"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const mockReports = [
  {
    id: "1",
    date: "2024-03-15",
    type: "Blood Test",
    invoiceNumber: "INV-001",
    status: "Ready",
  },
  {
    id: "2",
    date: "2024-03-10",
    type: "X-Ray",
    invoiceNumber: "INV-002",
    status: "Processing",
  },
];

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Medical Reports</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search reports..."
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {mockReports.map((report) => (
          <motion.div key={report.id} variants={itemVariants}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{report.type}</h3>
                  <p className="text-sm">
                    Date: {new Date(report.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm">
                    Invoice: {report.invoiceNumber}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-sm",
                      report.status === "Ready"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    )}
                  >
                    {report.status}
                  </span>
                  {report.status === "Ready" && (
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}