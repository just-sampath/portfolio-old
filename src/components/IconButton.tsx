import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  Icon: LucideIcon;
  href: string;
  label: string;
  gradient?: string; // Example: from-primary-500 to-secondary-500
}

export function IconButton({ Icon, href, label, gradient = 'from-primary-500 to-primary-600' }: IconButtonProps) {
  return (
    <Tilt
      options={{
        max: 25,
        scale: 1.05, // Slightly increased scale on tilt
        speed: 500, // Slightly faster speed
        glare: true,
        'max-glare': 0.3, // Reduced glare intensity
      }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-16 h-16 rounded-2xl overflow-hidden
                   bg-surface-light-secondary/50 dark:bg-surface-dark-secondary/50  // Use new surface colors with opacity
                   border border-neutral-300/50 dark:border-neutral-700/50  // Softer borders
                   shadow-lg dark:shadow-neutral-900/50" // Adjusted shadow for dark mode
        whileHover={{ scale: 1.1 }} // Increased hover scale
        whileTap={{ scale: 0.9 }}
        aria-label={label}
      >
        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-80 transition-all duration-300 ease-out`} // More subtle opacity
        />
        {/* Darkening overlay on hover for better contrast with icon */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        <Icon className="relative z-10 w-8 h-8 text-text-light-primary dark:text-text-dark-primary group-hover:text-white transition-colors duration-300" /> {/* Larger icon, updated colors */}

        {/* Hover tooltip - improved styling */}
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 px-3 py-2
                     bg-neutral-800/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-md shadow-xl
                     opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        >
          <p className="text-white text-xs font-semibold whitespace-nowrap">{label}</p> {/* Smaller font, bolder */}
          <div
            className="absolute -top-1.5 left-1/2 -translate-x-1/2
                       border-8 border-transparent border-b-neutral-800/90 dark:border-b-neutral-900/90" // Triangle pointing up
          />
        </div>
      </motion.a>
    </Tilt>
  );
}