"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/admin" className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-lg">Admin Dashboard</span>
          </Link>

          <nav className="flex items-center space-x-4">
            <Link href="/admin/branches">
              <Button variant="ghost">Branches</Button>
            </Link>
            <Link href="/admin/doctors">
              <Button variant="ghost">Doctors</Button>
            </Link>
            <Link href="/admin/sliders">
              <Button variant="ghost">Sliders</Button>
            </Link>
            <Link href="/admin/reports">
              <Button variant="ghost">Reports</Button>
            </Link>
            <Link href="/">
              <Button variant="outline">View Site</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}