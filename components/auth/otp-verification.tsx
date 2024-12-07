"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface OTPVerificationProps {
  onVerify: () => void;
}

export function OTPVerification({ onVerify }: OTPVerificationProps) {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement OTP verification
    onVerify();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-lg font-medium">OTP Verification</h3>
        <p className="text-sm text-gray-600 mt-1">
          We've sent a 6-digit code to your phone
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            className="text-center text-lg tracking-widest"
          />
        </div>

        <Button type="submit" className="w-full">
          Verify OTP
        </Button>

        <div className="text-center">
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-500"
            onClick={() => {/* TODO: Implement resend OTP */}}
          >
            Didn't receive code? Resend
          </button>
        </div>
      </form>
    </motion.div>
  );
}