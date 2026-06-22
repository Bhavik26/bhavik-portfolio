"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, Tech Startup",
      content:
        "Bhavik delivered an exceptional website for our startup. His attention to detail and understanding of modern web technologies is outstanding. The project was completed on time and exceeded all expectations.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Product Manager, AI Solutions",
      content:
        "Working with Bhavik on our AI integration project was a game-changer. His expertise in machine learning and backend development helped us build a robust and scalable solution.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Founder, Digital Agency",
      content:
        "The dashboard Bhavik built for our agency has transformed how we manage projects. It's intuitive, beautiful, and incredibly functional. Highly recommended!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
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
      id="testimonials"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full" />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-xl hover:border-neon-purple/50 transition-all flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Join satisfied clients who have transformed their projects
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-neon-purple to-neon-blue text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
