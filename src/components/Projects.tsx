import { motion } from 'framer-motion';
import { GradientCard } from './GradientCard';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

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
            <div className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2">
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {project.title}
                  </h3>
                  
                  {/* GitHub Stats */}
                  <div className="flex items-center gap-4 text-sm text-text-light-secondary dark:text-text-dark-secondary mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 
                               dark:from-primary/20 dark:to-secondary/20 rounded-full text-sm font-medium
                               text-primary dark:text-primary border border-primary/20 backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors text-text-light-primary dark:text-text-dark-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 text-white rounded-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}