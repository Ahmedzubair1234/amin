
import { HeroSection } from '@/components/sections/hero-section';
import { ResultsSection } from '@/components/sections/results-section';
import { ServicesSection } from '@/components/sections/services-section';

export default function Home() {
  return (
      <main className="min-h-screen py-24 bg-gradient-to-b">
      <div className="container mx-auto px-4">
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      </div>
      </main>
    
  );
}
