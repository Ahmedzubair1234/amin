"use client";

import { DoctorSearch } from "@/components/doctors/doctor-search";
import { DoctorList } from "@/components/doctors/doctor-list";
import { useState } from "react";
import { Doctor } from "@/types/doctor";
import { doctors } from "@/lib/data/doctors";

export default function FindDoctor() {
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);

  return (
    <main className="min-h-screen py-24 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-cyan-600">
          Find Your Doctor
        </h1>
        <DoctorSearch onSearch={setFilteredDoctors} />
        <DoctorList doctors={filteredDoctors} />
      </div>
    </main>
  );
}