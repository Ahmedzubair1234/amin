import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye 
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Expert heart care and treatments",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Advanced neurological care",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized care for children",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Complete bone and joint care",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Comprehensive eye care",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Primary healthcare services",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Our Medical Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <Button className="bg-green-300" variant="default" size="sm">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}