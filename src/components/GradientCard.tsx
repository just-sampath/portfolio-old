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
  // Default gradient uses new primary and secondary colors for a subtle effect
  gradient = 'from-primary-500/10 to-secondary-500/10 dark:from-primary-700/10 dark:to-secondary-700/10'
}: GradientCardProps) {
  return (
    <Tilt
      options={{
        max: 12, // Reduced max tilt for a more subtle effect
        scale: 1.03, // Slightly reduced scale
        speed: 600, // Slightly faster speed for responsiveness
        perspective: 1000, // Added perspective for a better 3D effect
      }}
    >
      <motion.div
        className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out
                   bg-surface-light-secondary dark:bg-surface-dark-secondary
                   ${className}`} // Added base background color from new palette
        // whileHover={{ y: -5 }} // Kept this for a slight lift
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay - slightly more visible and uses the passed or default gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 dark:opacity-40 group-hover:opacity-80 dark:group-hover:opacity-60 transition-opacity duration-300`} />

        {/* Optional: Add a subtle inner border effect if desired */}
        {/* <div className="absolute inset-0 rounded-xl border border-white/10 dark:border-white/5 pointer-events-none" /> */}

        <div className="relative z-10 p-6"> {/* Added default padding inside the card */}
          {children}
        </div>
      </motion.div>
    </Tilt>
  );
}