import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center"
    >
      <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-2xl text-text-secondary dark:text-text-secondary-dark mb-8">
        Oops! Page not found
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
      >
        Go Home
      </Link>
    </motion.div>
  );
}
