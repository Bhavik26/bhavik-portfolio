"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", link: siteConfig.github },
    { icon: Linkedin, label: "LinkedIn", link: siteConfig.linkedin },
    { icon: Mail, label: "Email", link: `mailto:${siteConfig.email}` },
  ];

  const quickLinks = navLinks.filter((link) =>
    ["Home", "About", "Projects", "Contact"].includes(link.name)
  );

  return (
    <footer className="relative border-t border-gray-800/80 bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              {siteConfig.initials}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.name} — Full Stack Developer & AI Engineer building
              intelligent, scalable web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:border-neon-purple/50 transition-all group"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <Icon
                      size={18}
                      className="text-gray-400 group-hover:text-neon-blue transition-colors"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center md:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
