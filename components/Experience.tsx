"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/constants";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Internships and project experience building real-world applications"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-blue to-transparent" />

          <div className="space-y-8">
            {experience.map((item) => {
              const Icon = item.type === "Internship" ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative pl-16 md:pl-20"
                >
                  <div className="absolute left-3 md:left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center ring-4 ring-dark-950">
                    <Icon size={12} className="text-white" />
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass p-6 md:p-8 rounded-xl hover:border-neon-purple/40 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-neon-blue font-medium text-sm">
                          {item.company}
                        </p>
                      </div>
                      <span className="inline-flex self-start sm:self-auto items-center text-xs font-medium px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/30">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
