import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowDown, Code, Sparkles } from 'lucide-react';
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
    <div className="relative min-h-screen flex items-center justify-center">
      <AnimatedBackground />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 md:left-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 md:right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
          >
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-gray-200">Welcome to my portfolio</span>
          </motion.div>
          
          <animated.div style={titleSpring} className="mb-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-500 bg-clip-text text-transparent hover:scale-105 transform transition-transform duration-300 drop-shadow-lg">
                  Yellapanthula
                </span>
                <span className="bg-gradient-to-r from-purple-500 via-primary to-blue-400 bg-clip-text text-transparent hover:scale-105 transform transition-transform duration-300 drop-shadow-lg">
                  Sai&nbsp;Sampath
                </span>
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
              <div className="flex items-center justify-center gap-2">
                <span className="text-gray-300">Lead Backend Engineer at</span>
                <a 
                  href="https://www.chataid.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-dark transition-colors relative group"
                >
                  <span className="relative">
                    ChatAid
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </div>
              <div className="h-10 flex items-center justify-center">
                <span className="text-gray-400 mr-2"><Code className="inline-block w-5 h-5 text-blue-400" /></span>
                <span className="text-gray-300">
                  <Typewriter
                    options={{
                      strings: [
                        'AI Systems Architect',
                        'Full Stack Developer',
                        'Problem Solver'
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500/50 via-primary/50 to-purple-500/50 rounded-full mx-auto mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label, gradient }) => (
              <motion.div
                key={label}
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}