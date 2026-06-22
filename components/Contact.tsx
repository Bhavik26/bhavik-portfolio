"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteConfig.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      link: `mailto:${siteConfig.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: siteConfig.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      link: siteConfig.github,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full glass px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-neon-purple to-neon-blue text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
              >
                {submitted ? (
                  "Opening email client..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.link}
                  target={method.label !== "Email" ? "_blank" : undefined}
                  rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 6 }}
                  className="glass p-5 rounded-xl hover:border-neon-purple/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{method.label}</h4>
                    <p className="text-gray-400 text-sm">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
