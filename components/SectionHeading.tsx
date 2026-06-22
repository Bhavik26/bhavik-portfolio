"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h2>
    {subtitle && (
      <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
        {subtitle}
      </p>
    )}
    <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full mt-4" />
  </motion.div>
);

export default SectionHeading;
