import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-sticky transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md shadow-lg' // Use new surface colors with opacity and blur
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Uses container paddings internally */}
        <div className="flex justify-between h-20">
          {/* Logo/Name */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="text-2xl font-serif font-bold"> {/* Updated font */}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent dark:from-primary-300 dark:to-secondary-400"> {/* Updated gradient */}
                Sampath
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  to={item.path}
                  className={`relative text-base font-medium transition-colors duration-200 px-4 py-2 rounded-lg ${ // Increased font size
                    isActive(item.path)
                      ? 'text-white' // Active text color is white, background is the motion.div
                      : 'text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg -z-10" // Updated gradient
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-3 rounded-full bg-surface-light-secondary dark:bg-surface-dark-secondary text-text-light-primary dark:text-text-dark-primary hover:text-primary-500 dark:hover:text-primary-300 transition-colors" // Updated styles
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />} {/* Slightly larger icon */}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-text-light-primary dark:text-text-dark-primary hover:text-primary-500 dark:hover:text-primary-300" // Updated colors
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />} {/* Slightly larger icon */}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 right-0 bg-surface-light dark:bg-surface-dark shadow-xl md:hidden" // Added md:hidden, updated colors
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white' // Updated gradient
                          : 'text-text-light-secondary dark:text-text-dark-secondary hover:bg-surface-light-secondary dark:hover:bg-surface-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Theme Toggle */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="px-4 pt-2" // Added padding top
                >
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium text-text-light-secondary dark:text-text-dark-secondary hover:bg-surface-light-secondary dark:hover:bg-surface-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary transition-colors" // Updated colors
                  >
                    <span className="mr-3">
                      {isDark ? <Sun size={22} /> : <Moon size={22} />} {/* Slightly larger icon */}
                    </span>
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}