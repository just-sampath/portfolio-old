import { motion } from 'framer-motion';
import { Experience } from '../components/Experience';

export function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="relative mb-16">
        <div className="relative h-[300px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-dark/10 backdrop-blur-xl z-10" />
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
            alt="Work background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center max-w-3xl mx-auto px-4">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Professional Journey
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-text-secondary dark:text-text-secondary-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Building innovative solutions with cutting-edge technology
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Experience />
      </div>
    </motion.div>
  );
}