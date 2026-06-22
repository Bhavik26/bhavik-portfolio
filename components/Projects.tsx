"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Adaptive Exam System",
      description:
        "An intelligent online examination platform using AI and graph-based learning systems to personalize assessments and improve learning efficiency.",
      tech: ["Python", "React", "Flask", "Machine Learning", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Travel Agency Website",
      description:
        "A modern responsive travel booking and inquiry platform with attractive UI and WhatsApp integration for seamless communication.",
      tech: ["React", "Next.js", "Tailwind CSS", "Firebase", "Stripe"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "User Behaviour Profiling ML System",
      description:
        "A machine learning-based abnormal activity detection system for analyzing user behavior patterns with advanced analytics.",
      tech: ["Python", "Scikit-learn", "TensorFlow", "FastAPI", "MongoDB"],
      image: "https://images.unsplash.com/photo-1633356122544-f134ef2944f1?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Business Dashboard",
      description:
        "A clean admin dashboard with analytics, charts, authentication, and responsive UI for comprehensive business insights.",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "Node.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass rounded-xl overflow-hidden hover:border-neon-purple/50 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950/80 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-neon-purple/10 text-neon-purple px-3 py-1 rounded-full border border-neon-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-600 text-gray-300 py-2 rounded-lg hover:border-neon-blue hover:text-neon-blue transition-all"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-neon-purple to-neon-blue text-white py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors font-semibold"
          >
            View All Projects
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
