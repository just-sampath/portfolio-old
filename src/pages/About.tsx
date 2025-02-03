import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Education } from '../components/Education';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16"
      ref={containerRef}
      style={{ opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h1>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary/30 to-primary-dark/30 rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl -z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471"
              alt="Profile"
              className="rounded-2xl shadow-xl"
              initial={{ filter: "blur(5px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.p 
              className="text-lg text-text-secondary dark:text-text-secondary-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              I'm a Software Development Engineer with a passion for building innovative solutions. 
              My journey in tech started with a curiosity about how things work, which led me to 
              pursue Computer Science with a focus on AI and Machine Learning.
            </motion.p>
            <motion.p 
              className="text-lg text-text-secondary dark:text-text-secondary-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or learning Japanese. I believe in continuous learning and pushing the boundaries 
              of what's possible with technology.
            </motion.p>
          </motion.div>
        </div>
        <Education />
      </div>
    </motion.div>
  );
}