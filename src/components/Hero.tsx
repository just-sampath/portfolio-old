import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowDown } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
import Typewriter from 'typewriter-effect';
import { IconButton } from './IconButton';
import { AnimatedBackground } from './AnimatedBackground';

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/just-sampath', 
    label: 'GitHub',
    gradient: 'from-[#6e5494] to-[#24292e]'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/just-sampath', 
    label: 'LinkedIn',
    gradient: 'from-[#0077B5] to-[#00A0DC]'
  },
  { 
    icon: Mail, 
    href: 'mailto:ysampath36@gmail.com', 
    label: 'Email',
    gradient: 'from-[#EA4335] to-[#FBBC05]'
  }
];

export function Hero() {
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 100, friction: 10 },
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <animated.div style={titleSpring} className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-primary to-purple-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Yellapanthula
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-purple-500 via-primary to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Sai&nbsp;Sampath
                </motion.span>
              </div>
            </h1>
          </animated.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light space-y-2">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="text-gray-600 dark:text-gray-300">Lead Backend Engineer at</span>
                <motion.a 
                  href="https://www.chataid.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-600 transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  ChatAid
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              </div>
              <div className="h-10 flex items-center justify-center">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-gray-600 dark:text-gray-300">
                    <Typewriter
                      options={{
                        strings: [
                          'AI Systems Architect',
                          'Full Stack Developer',
                          'Backend Specialist',
                          'Tech Innovator'
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative line with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
              <motion.div
                className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Social links with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label, gradient }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  Icon={Icon}
                  href={href}
                  label={label}
                  gradient={gradient}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
            >
              <ArrowDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}