"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

const mockSliders = [
  {
    id: "1",
    title: "24/7 Emergency Care",
    description: "Immediate medical attention when you need it most",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60",
    branch: "Kushtia",
  },
  {
    id: "2",
    title: "Advanced ICU Facilities",
    description: "State-of-the-art intensive care units",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=60",
    branch: "Jhineidah",
  },
];

export function SliderList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockSliders.map((slider) => (
            <TableRow key={slider.id}>
              <TableCell>
                <img
                  src={slider.image}
                  alt={slider.title}
                  className="w-20 h-12 object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">{slider.title}</TableCell>
              <TableCell className="max-w-xs truncate">
                {slider.description}
              </TableCell>
              <TableCell>{slider.branch}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}