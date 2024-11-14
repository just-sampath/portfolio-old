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
        scale: 1.1,
        speed: 450,
      }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative group flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={label}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
        <Icon className="relative z-10 text-white w-6 h-6" />
      </motion.a>
    </Tilt>
  );
}