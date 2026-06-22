"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Database,
  Cpu,
  Brain,
  Wrench,
  GitBranch,
  Flame,
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Python", icon: Code2, color: "from-blue-500 to-cyan-500" },
    { name: "React.js", icon: Zap, color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", icon: Code2, color: "from-purple-500 to-pink-500" },
    { name: "Tailwind CSS", icon: Wrench, color: "from-teal-500 to-cyan-500" },
    { name: "SQL", icon: Database, color: "from-orange-500 to-red-500" },
    { name: "Flask", icon: Flame, color: "from-amber-500 to-orange-500" },
    { name: "Firebase", icon: Cpu, color: "from-yellow-500 to-orange-500" },
    { name: "Machine Learning", icon: Brain, color: "from-purple-500 to-indigo-500" },
    { name: "REST APIs", icon: GitBranch, color: "from-green-500 to-teal-500" },
    { name: "GitHub", icon: GitBranch, color: "from-gray-500 to-slate-500" },
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
      id="skills"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass p-6 rounded-lg text-center hover:border-neon-purple/50 transition-all cursor-pointer group"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all transform group-hover:rotate-12`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-white text-sm md:text-base">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Always learning and exploring new technologies
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-neon-blue text-neon-blue px-8 py-3 rounded-lg font-semibold hover:bg-neon-blue/10 transition-all"
          >
            View Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
