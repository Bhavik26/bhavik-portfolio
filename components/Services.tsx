"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Gauge,
  Zap,
  Wrench,
  Smartphone,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      description:
        "Modern, responsive websites built with React and Next.js for optimal performance and user experience.",
    },
    {
      icon: Cpu,
      title: "AI Integrations",
      description:
        "Integrate intelligent AI systems and machine learning models into your applications seamlessly.",
    },
    {
      icon: Gauge,
      title: "Dashboard Development",
      description:
        "Build comprehensive admin dashboards with analytics, charts, and real-time data visualization.",
    },
    {
      icon: Zap,
      title: "API Integration",
      description:
        "Seamless integration of third-party APIs and services into your existing applications.",
    },
    {
      icon: Wrench,
      title: "Automation Scripts",
      description:
        "Develop Python scripts to automate repetitive tasks and improve workflow efficiency.",
    },
    {
      icon: Smartphone,
      title: "Responsive UI Design",
      description:
        "Create beautiful, responsive user interfaces that work perfectly on all devices and screen sizes.",
    },
  ];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 40px rgba(185, 51, 255, 0.15), 0 0 40px rgba(0, 212, 255, 0.1)",
                }}
                className="glass p-8 rounded-xl hover:border-neon-purple/50 transition-all group cursor-pointer"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center text-neon-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more →
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
