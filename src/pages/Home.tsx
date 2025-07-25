import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  // Particle animation for the quote section
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    })), 
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <Hero />
      
      <motion.div 
        className="my-24"
        ref={containerRef}
        style={{ opacity, scale, y }}
      >
        <motion.div 
          className="relative max-w-6xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
              alt="Coding workspace"
              className="w-full h-[500px] object-cover"
              initial={{ filter: "blur(10px)", scale: 1.1 }}
              animate={{ filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90 backdrop-filter backdrop-blur-sm flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Animated particles */}
              {particles.map(particle => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full bg-white/20"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    top: `${particle.y}%`,
                    left: `${particle.x}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "linear"
                  }}
                />
              ))}
              
              {/* Quote icon */}
              <motion.div
                className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white/10 rounded-full p-4"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Quote className="w-8 h-8 text-white/80" />
              </motion.div>
              
              <motion.blockquote 
                className="text-white text-2xl md:text-3xl font-medium text-center max-w-3xl px-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8,
                      type: "spring",
                      stiffness: 100 
                    }}
                    className="leading-relaxed"
                  >
                    Passionate about creating innovative solutions through code and AI technology.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-lg text-white/70 mt-6 font-light"
                  >
                    Building the future, one line of code at a time
                  </motion.p>
                </div>
              </motion.blockquote>
              
              {/* Decorative lines */}
              <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      <Skills />
    </motion.div>
  );
}