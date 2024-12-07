"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export function ResultsSection() {
  const [phone, setPhone] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Access Your Medical Records</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Invoice Number</label>
                  <Input
                    placeholder="Enter invoice number"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Test Results
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  View Medical History
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}