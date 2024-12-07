"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BranchFormProps {
  onSuccess: () => void;
  initialData?: Branch;
}

export function BranchForm({ onSuccess, initialData }: BranchFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement branch submission
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Branch Name</Label>
        <Input 
          id="name" 
          defaultValue={initialData?.name}
          required 
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea 
          id="address" 
          defaultValue={initialData?.address}
          required 
          className="h-24"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Contact Number</Label>
        <Input 
          id="phone" 
          type="tel"
          defaultValue={initialData?.phone}
          required 
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Saving..." : "Save Branch"}
      </Button>
    </form>
  );
}