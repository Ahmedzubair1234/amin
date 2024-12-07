"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const emergencySlides = [
  {
    title: "24/7 Emergency Care",
    description: "Immediate medical attention when you need it most",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Advanced ICU Facilities",
    description: "State-of-the-art intensive care units",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=60",
  },
];

const specialtySlides = [
  {
    title: "Cardiology Excellence",
    description: "World-class heart care specialists",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Pediatric Care",
    description: "Specialized care for your little ones",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&auto=format&fit=crop&q=60",
  },
];

export function HeroSection() {
  const [emergencyIndex, setEmergencyIndex] = useState(0);
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setEmergencyIndex((prev) => (prev + 1) % emergencySlides.length);
      setSpecialtyIndex((prev) => (prev + 1) % specialtySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <Card className="overflow-hidden">
            <div className="relative h-[400px]">
              <img
                src={emergencySlides[emergencyIndex].image}
                alt={emergencySlides[emergencyIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-transparent p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{emergencySlides[emergencyIndex].title}</h2>
                <p className="text-sm">{emergencySlides[emergencyIndex].description}</p>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              <Button
                variant="link"
                size="sm"
                className="bg-transparent overflow-hidden"
                onClick={() => setEmergencyIndex((prev) => (prev - 1 + emergencySlides.length) % emergencySlides.length)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="link"
                size="sm"
                className="bg-transparent overflow-hidden"
                onClick={() => setEmergencyIndex((prev) => (prev + 1) % emergencySlides.length)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </Card>
        </div>

        <div className="relative">
          <Card className="overflow-hidden">
            <div className="relative h-[400px]">
              <img
                src={specialtySlides[specialtyIndex].image}
                alt={specialtySlides[specialtyIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-transparent p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{specialtySlides[specialtyIndex].title}</h2>
                <p className="text-sm">{specialtySlides[specialtyIndex].description}</p>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              <Button
                variant="link"
                size="sm"
                className="bg-transparent overflow-hidden"
                onClick={() => setSpecialtyIndex((prev) => (prev - 1 + specialtySlides.length) % specialtySlides.length)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="link"
                size="sm"
                className="bg-transparent overflow-hidden"
                onClick={() => setSpecialtyIndex((prev) => (prev + 1) % specialtySlides.length)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}