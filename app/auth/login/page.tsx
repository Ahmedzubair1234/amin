"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { OTPVerification } from "@/components/auth/otp-verification";
import Link from "next/link";

const loginSchema = z.object({
  phone: z.string().regex(/^\+8801[3-9]\d{8}$/, "Invalid Bangladesh phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const [showOTP, setShowOTP] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    // TODO: Implement login logic
    setShowOTP(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <Card className="p-8 backdrop-blur-sm bg-white/80">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Welcome Back
            </h2>
            <p className="mt-2 text-gray-600">Sign in to access your account</p>
          </div>

          {showOTP ? (
            <OTPVerification onVerify={() => console.log("Verified")} />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input
                  {...register("phone")}
                  placeholder="+8801XXXXXXXXX"
                  className="mt-1"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  {...register("password")}
                  type="password"
                  className="mt-1"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>

              <div className="text-center">
                <Link href="/auth/register" className="text-sm text-blue-600 hover:text-blue-500">
                  Don't have an account? Register
                </Link>
              </div>
            </form>
          )}
        </Card>
      </motion.div>
    </div>
  );
}