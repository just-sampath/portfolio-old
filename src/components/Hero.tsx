import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';
import { IconButton } from './IconButton';

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/just-sampath', 
    label: 'GitHub',
    gradient: 'from-[#6e5494] to-[#24292e]'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/just-sampath', 
    label: 'LinkedIn',
    gradient: 'from-[#0077B5] to-[#00A0DC]'
  },
  { 
    icon: Mail, 
    href: 'mailto:ysampath36@gmail.com', 
    label: 'Email',
    gradient: 'from-[#EA4335] to-[#FBBC05]'
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Yellapanthula Sai Sampath
          </span>
        </h1>
        <p className="text-2xl text-text-secondary dark:text-text-secondary-dark mb-8 leading-relaxed max-w-2xl">
          Software Development Engineer at Springworks | Full Stack Developer | AI Enthusiast
        </p>
        <div className="flex space-x-4">
          {socialLinks.map(({ icon, href, label, gradient }) => (
            <IconButton
              key={label}
              Icon={icon}
              href={href}
              label={label}
              gradient={gradient}
            />
          ))}
        </div>
      </motion.div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary via-transparent to-transparent" />
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M45,-78.1C58.3,-71.2,69.1,-58.4,77.8,-43.7C86.5,-29,93.2,-12.5,89.8,2.1C86.4,16.7,73,29.3,61.5,41.6C50,53.9,40.4,65.9,27.5,73.3C14.6,80.7,-1.6,83.5,-17.4,80.6C-33.2,77.7,-48.6,69.1,-60.2,57.1C-71.8,45,-79.5,29.5,-83.2,12.7C-86.9,-4.1,-86.5,-22.2,-78.9,-36.1C-71.3,-50,-56.5,-59.6,-41.8,-65.9C-27.1,-72.2,-12.5,-75.2,2.4,-79.1C17.3,-83,34.6,-87.8,45,-78.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
}