"use client";

import { useState } from "react";
import { SliderForm } from "@/components/admin/sliders/slider-form";
import { SliderList } from "@/components/admin/sliders/slider-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SlidersPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Sliders</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Slider
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Slider</DialogTitle>
            </DialogHeader>
            <SliderForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      <SliderList />
    </div>
  );
}