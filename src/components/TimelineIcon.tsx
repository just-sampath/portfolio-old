import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export function TimelineIcon() {
  return (
    <div className="relative">
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/30"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Inner circle */}
      <motion.div
        className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Briefcase className="w-5 h-5 text-white" />
      </motion.div>

      {/* Flowing particles */}
      <motion.div
        className="absolute left-1/2 top-full -translate-x-1/2 w-px h-32 overflow-hidden"
        style={{ pointerEvents: 'none' }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-primary via-primary/50 to-transparent"
            initial={{ y: -16 }}
            animate={{ y: 128 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
