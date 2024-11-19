import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Globe, Cpu, Bot, Brain, Container, Star, StarHalf } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  rating: number; // Out of 5
  color: string;
}

const skillCategories = {
  'Core Technologies': [
    { name: 'Node.js', icon: <Terminal />, rating: 4.5, color: 'from-green-500 to-green-700' },
    { name: 'Python', icon: <Code2 />, rating: 4, color: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', icon: <Database />, rating: 4.5, color: 'from-emerald-500 to-emerald-700' },
  ],
  'AI & Backend': [
    { name: 'FastAPI', icon: <Globe />, rating: 4, color: 'from-teal-500 to-teal-700' },
    { name: 'OpenAI', icon: <Brain />, rating: 4.5, color: 'from-purple-500 to-purple-700' },
    { name: 'Autogen', icon: <Bot />, rating: 4, color: 'from-indigo-500 to-indigo-700' },
  ],
  'Tools & Infrastructure': [
    { name: 'Docker', icon: <Container />, rating: 3.5, color: 'from-cyan-500 to-cyan-700' },
    { name: 'System Design', icon: <Cpu />, rating: 4, color: 'from-rose-500 to-rose-700' },
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

function SkillRating({ rating }: { rating: number; color: string }) {
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
      whileHover={{ scale: 1.02 }}
      className="mb-6 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
            <div className="text-white w-5 h-5">
              {skill.icon}
            </div>
          </div>
          <span className="font-medium">{skill.name}</span>
        </div>
        <div className="pl-10 sm:pl-0">
          <SkillRating rating={skill.rating} color={skill.color} />
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="mb-24">
      <div className="relative mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-dark/10 backdrop-blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
            alt="Code background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center py-16 px-4">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            Proficient in modern technologies with a focus on AI, backend development, and cloud infrastructure
          </p>
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
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
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