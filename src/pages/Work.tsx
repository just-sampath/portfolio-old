import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';

export function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          My Work
        </h1>
        <div className="relative h-[300px] mb-12">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
            alt="Development workspace"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80 rounded-xl flex items-center justify-center">
            <p className="text-white text-2xl font-medium text-center max-w-2xl px-6">
              Building the future through code and innovation
            </p>
          </div>
        </div>
      </div>
      <Experience />
      <Projects />
    </motion.div>
  );
}