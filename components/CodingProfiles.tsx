"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  GitBranch,
  Star,
  Trophy,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig, codingAchievements } from "@/lib/constants";

const iconMap = {
  code: Code2,
  repo: GitBranch,
  star: Star,
  trophy: Trophy,
};

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      description: "Open source projects, contributions, and code repositories",
      url: siteConfig.github,
      icon: Github,
      color: "from-gray-600 to-slate-800",
      stats: "9 repositories",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="coding"
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="GitHub & Coding"
          subtitle="Where I build, contribute, and sharpen my problem-solving skills"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {codingAchievements.map((achievement) => {
            const Icon = iconMap[achievement.icon];
            return (
              <motion.div
                key={achievement.label}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="glass p-6 rounded-xl text-center hover:border-neon-purple/40 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {achievement.value}
                </div>
                <p className="text-gray-400 text-sm">{achievement.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass p-8 rounded-xl hover:border-neon-purple/50 transition-all group block"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <ExternalLink
                    size={20}
                    className="text-gray-500 group-hover:text-neon-blue transition-colors"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {profile.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {profile.description}
                </p>
                <span className="text-neon-blue text-sm font-semibold">
                  {profile.stats} →
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
