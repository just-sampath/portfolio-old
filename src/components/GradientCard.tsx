import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientCard({ 
  children, 
  className = '', 
  gradient = 'from-primary/5 to-primary-dark/5'
}: GradientCardProps) {
  return (
    <Tilt
      options={{
        max: 15,
        scale: 1.05,
        speed: 450,
      }}
    >
      <motion.div
        className={`relative rounded-xl overflow-hidden ${className}`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`} />
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </Tilt>
  );
}