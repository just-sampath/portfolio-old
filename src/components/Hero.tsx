import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';
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
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <animated.div style={titleSpring} className="mb-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-500 bg-clip-text text-transparent hover:scale-105 transform transition-transform duration-300">
                  Yellapanthula
                </span>
                <span className="bg-gradient-to-r from-purple-500 via-primary to-blue-400 bg-clip-text text-transparent hover:scale-105 transform transition-transform duration-300">
                  Sai&nbsp;Sampath
                </span>
              </div>
            </h1>
          </animated.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="text-gray-300">Lead Backend Engineer at</span>
                <a 
                  href="https://www.chataid.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-dark transition-colors relative group"
                >
                  ChatAid
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              <div className="h-8 flex items-center justify-center text-gray-300">
                <Typewriter
                  options={{
                    strings: [
                      'AI Systems Architect',
                      'Full Stack Developer'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-16 h-0.5 bg-gradient-to-r from-primary/30 to-primary-dark/30 rounded-full mx-auto mb-4"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
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
        </div>
      </motion.div>
    </div>
  );
}