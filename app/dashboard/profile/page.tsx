"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Camera, Save } from "lucide-react";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement profile update
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="p-6 lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-6">
              <Avatar className="w-24 h-24">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60"
                  alt="Profile"
                  className="object-cover"
                />
              </Avatar>
              <Button variant="outline" size="sm">
                <Camera className="w-4 h-4 mr-2" />
                Change Photo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input defaultValue="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <Input defaultValue="+8801712345678" disabled />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input type="email" defaultValue="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth
                </label>
                <Input type="date" defaultValue="1990-01-01" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Address
              </label>
              <Input defaultValue="123 Medical Street, Kushtia" />
            </div>

            <Button type="submit" disabled={loading}>
              <Save className="w-4 h-4 mr-2" />
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm">Member Since</p>
              <p className="font-medium">March 15, 2024</p>
            </div>
            <div>
              <p className="text-sm">Last Visit</p>
              <p className="font-medium">2 days ago</p>
            </div>
            <div>
              <p className="text-sm">Total Reports</p>
              <p className="font-medium">12</p>
            </div>
            <div>
              <p className="text-sm">Upcoming Appointments</p>
              <p className="font-medium">2</p>
            </div>
            
          </div>
        </Card>
      </div>
    </div>
  );
}