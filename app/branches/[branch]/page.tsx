import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ResultsSection } from "@/components/sections/results-section";
import { getBranchName, VALID_BRANCHES } from "@/lib/utils/branch";

export function generateStaticParams() {
  return VALID_BRANCHES.map((branch) => ({
    branch: branch,
  }));
}

export default function BranchPage({ params }: { params: { branch: string } }) {
  if (!VALID_BRANCHES.includes(params.branch)) {
    notFound();
  }

  const branchName = getBranchName(params.branch);

  return (
    <main className="min-h-screen">
      <div className="pt-16">
        <h1 className="text-4xl font-bold text-center py-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          {branchName} Branch
        </h1>
        <HeroSection />
        <ServicesSection />
        <DoctorsSection />
        <ResultsSection />
      </div>
    </main>
  );
}