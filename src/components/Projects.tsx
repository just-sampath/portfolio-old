import { motion } from 'framer-motion';
import { GradientCard } from './GradientCard';
import { Github, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Journal App',
    description: 'A comprehensive web-based journaling application featuring user authentication, CRUD operations, and a clean, intuitive interface built with modern web technologies.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'PUG', 'Authentication'],
    github: 'https://github.com/just-sampath/Simple-Journal-App',
    live: '#',
    stars: 12,
    forks: 5,
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400&h=200'
  },
  {
    title: 'Stock Price Prediction',
    description: 'An intelligent stock price prediction system utilizing machine learning algorithms including regression models and decision trees for accurate market forecasting.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Analysis'],
    github: '#',
    live: '#',
    stars: 8,
    forks: 3,
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400&h=200'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Projects() {
  return (
    <section className="mb-24 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/3 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical skills and problem-solving abilities through real-world applications
          </p>
        </motion.div>
      </div>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm bg-card/95">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className={cn(
                      'backdrop-blur-sm shadow-lg',
                      project.status === 'Completed'
                        ? 'bg-green-500/90 hover:bg-green-500 border-green-400'
                        : 'bg-amber-500/90 hover:bg-amber-500 border-amber-400'
                    )}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* GitHub Stats Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <Badge variant="secondary" className="backdrop-blur-md bg-background/80">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {project.stars}
                  </Badge>
                  <Badge variant="secondary" className="backdrop-blur-md bg-background/80">
                    <GitFork className="w-3 h-3 mr-1" />
                    {project.forks}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-500">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3">
                <Button
                  variant="outline"
                  className="flex-1 group/btn"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    View Code
                  </a>
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 group/btn"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}