"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import { siteConfig } from "@/lib/constants";

const Hero = () => {
  const techStack = [
    "React",
    "Next.js",
    "Python",
    "PyTorch",
    "Neo4j",
    "Node.js",
    "TypeScript",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <NetworkBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/50 to-dark-950 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 glass-sm px-4 py-2 rounded-full text-sm text-neon-blue font-medium">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto font-medium"
        >
          {siteConfig.role}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.tagline} I specialize in React, Next.js, Node.js, Python,
          Machine Learning, Deep Learning, and Graph Neural Networks.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-neon-purple to-neon-blue text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            View Projects
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href={siteConfig.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-white hover:border-neon-purple/50 transition-all"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-neon-blue/60 text-neon-blue px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-neon-blue/10 transition-all"
          >
            <Mail size={20} />
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              className="glass-sm px-4 py-2 rounded-full text-sm text-gray-300 hover:border-neon-purple/50 hover:text-neon-purple transition-all"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-neon-blue/60 rounded-full flex justify-center">
          <motion.div className="w-1 h-2 bg-neon-blue rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
