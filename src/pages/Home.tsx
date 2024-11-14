import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div className="my-16">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
            alt="Coding workspace"
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80 rounded-xl flex items-center justify-center">
            <blockquote className="text-white text-2xl font-medium text-center max-w-2xl px-6">
              "Passionate about creating innovative solutions through code and AI technology."
            </blockquote>
          </div>
        </div>
      </div>
      <Skills />
    </motion.div>
  );
}