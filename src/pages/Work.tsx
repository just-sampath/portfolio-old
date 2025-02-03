import { motion, useScroll, useTransform } from 'framer-motion';
import { Experience } from '../components/Experience';
import { useRef } from 'react';

export function Work() {
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
      className="pt-24 pb-16 min-h-screen"
      ref={containerRef}
      style={{ opacity, scale }}
    >
      <motion.div 
        className="relative mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative h-[300px] rounded-2xl overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-dark/10 backdrop-blur-xl z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
            alt="Work background"
            className="w-full h-full object-cover opacity-20"
            initial={{ scale: 1.1, filter: "blur(5px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center max-w-3xl mx-auto px-4">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Professional Journey
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-text-secondary dark:text-text-secondary-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Building innovative solutions with cutting-edge technology
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Experience />
      </motion.div>
    </motion.div>
  );
}