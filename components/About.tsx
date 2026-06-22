"use client";

import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      title: "Freelance Development",
      description: "Building custom solutions for clients worldwide",
    },
    {
      title: "AI Automation",
      description: "Implementing intelligent systems and automation",
    },
    {
      title: "Modern Web Tech",
      description: "Latest frameworks and best practices",
    },
    {
      title: "Performance First",
      description: "Fast, responsive, and optimized applications",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="about"
      className="relative py-20 px-4 md:py-32 overflow-hidden"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies
              and frameworks. I create scalable, performant applications that solve real-world
              problems and deliver measurable value to users and businesses.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in React, Next.js, Node.js, and databases, I specialize
              in building responsive web applications, interactive dashboards, and robust APIs.
              I bring technical excellence and creative problem-solving to every project.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you need a modern website, a complex web application, or a complete system
              redesign, I deliver production-ready code with exceptional quality and user experience.
            </p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "30+", label: "Clients" },
                { number: "5+", label: "Years" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <div className="glass p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-lg hover:border-neon-purple/50 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg mb-4" />
                <h3 className="font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
