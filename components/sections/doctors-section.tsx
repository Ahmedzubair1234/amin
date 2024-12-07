"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60",
    availability: "Mon, Wed, Fri",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60",
    availability: "Tue, Thu, Sat",
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Neurology",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=60",
    availability: "Mon, Thu, Fri",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60",
    availability: "Wed, Fri, Sat",
  },
];

export function DoctorsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4">
                  <img src={doctor.image} alt={doctor.name} className="object-cover" />
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
                <p className="text-sm text-center">Available: {doctor.availability}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}