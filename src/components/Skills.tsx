import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Globe, Cpu, Bot, Brain, Container, Star, StarHalf, Zap } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  rating: number; // Out of 5
  color: string;
  description?: string;
}

const skillCategories = {
  'Core Technologies': [
    { 
      name: 'Node.js', 
      icon: <Terminal />, 
      rating: 4.5, 
      color: 'from-green-500 to-green-700',
      description: 'Building scalable backend services and APIs'
    },
    { 
      name: 'Python', 
      icon: <Code2 />, 
      rating: 4, 
      color: 'from-blue-500 to-blue-700',
      description: 'Data processing and AI model integration'
    },
    { 
      name: 'MongoDB', 
      icon: <Database />, 
      rating: 4.5, 
      color: 'from-emerald-500 to-emerald-700',
      description: 'NoSQL database design and optimization'
    },
  ],
  'AI & Backend': [
    { 
      name: 'FastAPI', 
      icon: <Globe />, 
      rating: 4, 
      color: 'from-teal-500 to-teal-700',
      description: 'High-performance Python web frameworks'
    },
    { 
      name: 'OpenAI', 
      icon: <Brain />, 
      rating: 4.5, 
      color: 'from-purple-500 to-purple-700',
      description: 'LLM integration and prompt engineering'
    },
    { 
      name: 'Autogen', 
      icon: <Bot />, 
      rating: 4, 
      color: 'from-indigo-500 to-indigo-700',
      description: 'Multi-agent AI systems development'
    },
  ],
  'Tools & Infrastructure': [
    { 
      name: 'Docker', 
      icon: <Container />, 
      rating: 3.5, 
      color: 'from-cyan-500 to-cyan-700',
      description: 'Containerization and deployment'
    },
    { 
      name: 'System Design', 
      icon: <Cpu />, 
      rating: 3, 
      color: 'from-rose-500 to-rose-700',
      description: 'Scalable architecture planning'
    },
  ]
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function SkillRating({ rating, color }: { rating: number; color: string }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={`w-4 h-4 fill-current text-yellow-400`} />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 text-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" />
      ))}
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="mb-6 p-5 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.color} shadow-md`}>
              <div className="text-white w-5 h-5">
                {skill.icon}
              </div>
            </div>
            <span className="font-medium text-lg">{skill.name}</span>
          </div>
          <div>
            <SkillRating rating={skill.rating} color={skill.color} />
          </div>
        </div>
        
        {skill.description && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600 dark:text-gray-400 pl-10"
          >
            {skill.description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="mb-24">
      <div className="relative mb-16">
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
            alt="Code background"
            className="w-full h-full object-cover opacity-20"
          />
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 text-center py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-gray-200">Skills & Expertise</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-primary to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Technical Expertise
            </h2>
            <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
              Proficient in modern technologies with a focus on AI, backend development, and cloud infrastructure
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div
            key={category}
            variants={item}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {category}
            </h3>
            <div>
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}