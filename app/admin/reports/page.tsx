"use client";

import { useState } from "react";
import { ReportForm } from "@/components/admin/reports/report-form";
import { ReportList } from "@/components/admin/reports/report-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ReportsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Reports</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Report
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Medical Report</DialogTitle>
            </DialogHeader>
            <ReportForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      <ReportList />
    </div>
  );
}