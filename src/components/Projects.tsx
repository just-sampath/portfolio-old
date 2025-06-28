import { motion } from 'framer-motion';
import { GradientCard } from './GradientCard';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Journal App',
    description: 'A web-based journaling app with user authentication and CRUD functionality using MongoDB and Express.js',
    technologies: ['Node.js', 'Express', 'MongoDB', 'PUG'],
    github: 'https://github.com/just-sampath/Simple-Journal-App',
    live: '#'
  },
  {
    title: 'Stock Price Prediction',
    description: 'A project to predict stock prices using regression models and decision trees',
    technologies: ['Python', 'Sklearn'],
    github: '#',
    live: '#'
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
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
        Featured Projects
      </h2>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <GradientCard className="p-6">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-primary/10 to-primary-dark/10 
                             dark:from-primary/20 dark:to-primary-dark/20 rounded-full text-sm font-medium
                             text-primary dark:text-primary-dark backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </GradientCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}