"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { doctors } from "@/lib/data/doctors";
import { Doctor } from "@/types/doctor";

interface DoctorSearchProps {
  onSearch: (doctors: Doctor[]) => void;
}

export function DoctorSearch({ onSearch }: DoctorSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filtered);
  }, [searchTerm, onSearch]);

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="flex gap-4">
        <Input
          placeholder="Search by doctor's name or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-lg"
        />
        <Button size="lg">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
}