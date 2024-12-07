import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Image,
  FileText,
  Building2,
} from "lucide-react";

const adminModules = [
  {
    title: "Manage Branches",
    description: "Add and manage hospital branches",
    icon: Building2,
    href: "/admin/branches",
  },
  {
    title: "Manage Doctors",
    description: "Add and manage doctors",
    icon: Users,
    href: "/admin/doctors",
  },
  {
    title: "Manage Sliders",
    description: "Update homepage sliders",
    icon: Image,
    href: "/admin/sliders",
  },
  {
    title: "Manage Reports",
    description: "Handle medical reports and test results",
    icon: FileText,
    href: "/admin/reports",
  },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminModules.map((module) => (
          <Link key={module.title} href={module.href}>
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer">
              <module.icon className="w-8 h-8 mb-4 text-green-600" />
              <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
              <p className="text-green-600">{module.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}