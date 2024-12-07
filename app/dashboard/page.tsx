"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Clock, User } from "lucide-react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    label: "Total Reports",
    value: "12",
    icon: FileText,
    color: "from-blue-600 to-cyan-600",
  },
  {
    label: "Appointments",
    value: "3",
    icon: Calendar,
    color: "from-purple-600 to-pink-600",
  },
  {
    label: "Pending Results",
    value: "2",
    icon: Clock,
    color: "from-orange-600 to-red-600",
  },
  {
    label: "Profile Views",
    value: "24",
    icon: User,
    color: "from-green-600 to-teal-600",
  },
];

export default function DashboardPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Patient Dashboard</h1>
        <Button>Book New Appointment</Button>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
          {/* Recent reports list will go here */}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          {/* Upcoming appointments list will go here */}
        </Card>
      </div>
    </div>
  );
}