import { motion } from 'framer-motion';
import { TechnicalExpertise } from '../components/TechnicalExpertise';
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
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                My Work
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto px-4">
                Building the future through code and innovation
              </p>
            </div>
          </div>
        </div>
      </div>

      <Experience />
      <TechnicalExpertise />
    </motion.div>
  );
}