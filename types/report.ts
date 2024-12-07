export interface Report {
  id: string;
  patientName: string;
  phoneNumber: string;
  invoiceNumber: string;
  testType: string;
  result: string;
  branchId: string;
  createdAt: Date;
  updatedAt: Date;
}