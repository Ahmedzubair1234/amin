'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';

const mockReports = [
  {
    id: '1',
    patientName: 'John Doe',
    phoneNumber: '+880123456789',
    invoiceNumber: 'INV-001',
    testType: 'Blood Test',
    branch: 'Kushtia',
    date: '2024-03-15',
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    phoneNumber: '+880987654321',
    invoiceNumber: 'INV-002',
    testType: 'X-Ray',
    branch: 'Jhineidah',
    date: '2024-03-14',
  },
];

export function ReportList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Invoice Number</TableHead>
            <TableHead>Test Type</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockReports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.patientName}</TableCell>
              <TableCell>{report.phoneNumber}</TableCell>
              <TableCell>{report.invoiceNumber}</TableCell>
              <TableCell>{report.testType}</TableCell>
              <TableCell>{report.branch}</TableCell>
              <TableCell>{report.date}</TableCell>
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
