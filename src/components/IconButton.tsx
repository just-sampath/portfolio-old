import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  Icon: LucideIcon;
  href: string;
  label: string;
  gradient?: string;
}

export function IconButton({ Icon, href, label, gradient = 'from-primary-500 to-primary-600' }: IconButtonProps) {
  return (
    <Tilt
      options={{
        max: 25,
        scale: 1.05,
        speed: 500,
        glare: true,
        'max-glare': 0.3,
      }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-16 h-16 rounded-2xl overflow-hidden
                   bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg
                   border border-white/20 dark:border-gray-700/50
                   shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label={label}
      >
        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-90 transition-all duration-300 ease-out`}
        />
        
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`} />
        
        <Icon className="relative z-10 w-7 h-7 text-text-light-primary dark:text-text-dark-primary group-hover:text-white transition-colors duration-300" />

        {/* Enhanced tooltip */}
        <div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-3 py-2
                     bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl
                     opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
                     border border-gray-700/50"
        >
          <p className="text-white text-xs font-medium whitespace-nowrap">{label}</p>
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2
                       border-4 border-transparent border-b-gray-900/95 dark:border-b-gray-800/95"
          />
        </div>
      </motion.a>
    </Tilt>
  );
}