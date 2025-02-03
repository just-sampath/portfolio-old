import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  Icon: LucideIcon;
  href: string;
  label: string;
  gradient?: string;
}

export function IconButton({ Icon, href, label, gradient = 'from-primary to-primary-dark' }: IconButtonProps) {
  return (
    <Tilt
      options={{
        max: 25,
        scale: 1,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-16 h-16 rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/30 shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={label}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out`} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        <Icon className="relative z-10 w-7 h-7 text-gray-300 group-hover:text-white transition-colors duration-300" />
        
        {/* Hover tooltip */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <p className="text-white text-sm font-medium whitespace-nowrap">{label}</p>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-black/80" />
        </div>
      </motion.a>
    </Tilt>
  );
}