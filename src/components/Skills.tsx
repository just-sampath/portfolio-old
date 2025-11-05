import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Globe, Cpu, Bot, Brain, Container, Star, StarHalf, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  icon: React.ReactNode;
  rating: number;
  color: string;
  description: string;
}

const skillCategories = {
  'Core Technologies': [
    { 
      name: 'Node.js', 
      icon: <Terminal />, 
      rating: 4.5, 
      color: 'from-green-500 to-green-700',
      description: 'Backend development & API design'
    },
    { 
      name: 'Python', 
      icon: <Code2 />, 
      rating: 4, 
      color: 'from-blue-500 to-blue-700',
      description: 'AI/ML & data processing'
    },
    { 
      name: 'MongoDB', 
      icon: <Database />, 
      rating: 4.5, 
      color: 'from-emerald-500 to-emerald-700',
      description: 'NoSQL database management'
    },
  ],
  'AI & Backend': [
    { 
      name: 'FastAPI', 
      icon: <Zap />, 
      rating: 4, 
      color: 'from-teal-500 to-teal-700',
      description: 'High-performance API development'
    },
    { 
      name: 'OpenAI', 
      icon: <Brain />, 
      rating: 4.5, 
      color: 'from-purple-500 to-purple-700',
      description: 'AI integration & prompt engineering'
    },
    { 
      name: 'Autogen', 
      icon: <Bot />, 
      rating: 4, 
      color: 'from-indigo-500 to-indigo-700',
      description: 'Multi-agent AI systems'
    },
  ],
  'Tools & Infrastructure': [
    { 
      name: 'Docker', 
      icon: <Container />, 
      rating: 3.5, 
      color: 'from-cyan-500 to-cyan-700',
      description: 'Containerization & deployment'
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

function SkillRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-current text-yellow-400" />
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
      className="group relative mb-4"
    >
      <Card className="relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm bg-card/95">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

        <CardContent className="p-5 relative z-10">
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg shrink-0`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-white w-5 h-5">
                {skill.icon}
              </div>
            </motion.div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-lg mb-1 truncate">{skill.name}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">{skill.description}</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t">
            <SkillRating rating={skill.rating} />
            <Badge variant="secondary" className="font-mono text-xs">
              {skill.rating}/5
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="mb-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Proficient in modern technologies with a focus on AI, backend development, and cloud infrastructure. 
            Constantly learning and adapting to emerging technologies.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            variants={item}
            className="relative"
          >
            <Card className="h-full border-2 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm bg-card/95 shadow-xl hover:shadow-2xl group">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <CardHeader className="text-center pb-6 relative z-10">
                <CardTitle className="text-2xl bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent mb-3 group-hover:from-secondary group-hover:to-primary transition-all duration-500">
                  {category}
                </CardTitle>
                <div className="relative h-1 w-20 mx-auto rounded-full overflow-hidden bg-muted">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </CardHeader>

              <CardContent className="space-y-3 relative z-10">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.5
                    }}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}