import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineIcon } from './TimelineIcon';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Lead Backend Engineer',
    company: 'ChatAid',
    companyUrl: 'https://www.chataid.com/',
    location: 'Remote',
    date: 'Jan 2025 - Present',
    type: 'Full-time',
    points: [
      'Spearheading backend architecture and development of AI-powered chat systems',
      'Architecting and implementing robust data ingestion pipelines for diverse data sources',
      'Leading the development of AI agent systems with advanced multimodal capabilities',
      'Collaborating with cross-functional teams to implement and optimize frontend features',
      'Driving technical decisions and best practices for system scalability and performance'
    ],
    technologies: ['FastAPI', 'Python', 'AI/ML', 'System Design', 'Microservices']
  },
  {
    title: 'Software Development Engineer - 1',
    company: 'Springworks',
    companyUrl: 'https://www.springworks.in/',
    location: 'Bangalore, India',
    date: 'Jul 2024 - Dec 2024',
    type: 'Full-time',
    points: [
      'Led AI agent development using FastAPI and webhook flows, automating Slack workflows',
      'Integrated backend services with AI agents using Node.js, Express, and MongoDB',
      'Applied prompt engineering to improve AI agent performance',
      'Enhanced containerization and resource management for backend scalability',
      'Strengthened documentation for backend and AI integrations'
    ],
    technologies: ['Node.js', 'FastAPI', 'MongoDB', 'Docker', 'AI Agents']
  },
  {
    title: 'Backend Intern',
    company: 'Springworks',
    companyUrl: 'https://www.springworks.in/',
    location: 'Bangalore, India',
    date: 'Jul 2023 - Jul 2024',
    type: 'Internship',
    points: [
      'Developed backend services using Node.js and Express',
      'Implemented unit tests using Mocha and Chai, improving code coverage to 85%',
      'Resolved critical bugs and performance issues, reducing system errors by 45%',
      'Built and integrated backend features with MongoDB'
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Testing', 'API Development']
  }
];

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

export function Experience() {
  return (
    <section className="mb-24 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent inline-block mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Professional Journey
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
            Building innovative solutions with cutting-edge technology and leading high-impact projects
          </p>
        </div>
        
        <VerticalTimeline 
          lineColor="var(--color-primary-500)" 
          animate
          className="custom-timeline"
        >
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'transparent',
                boxShadow: 'none',
                padding: 0,
                border: 'none'
              }}
              contentArrowStyle={{ 
                borderRight: '7px solid var(--color-primary-500)',
                filter: 'blur(0.5px)',
                opacity: 0.5
              }}
              date={experience.date}
              dateClassName="text-text-light-secondary dark:text-text-dark-secondary font-medium md:text-lg"
              iconStyle={{ 
                background: 'transparent',
                boxShadow: 'none'
              }}
              icon={<TimelineIcon />}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl 
                  border border-gray-200/20 dark:border-gray-700/20
                  hover:shadow-2xl hover:border-primary/30 transition-all duration-500
                  transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <motion.h3 
                          className="text-2xl font-bold text-primary dark:text-primary mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {experience.title}
                        </motion.h3>
                        <motion.div
                          className="flex items-center gap-2 mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <h4 className="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary">
                            <a 
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
                            >
                              {experience.company}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </h4>
                        </motion.div>
                        
                        {/* Meta information */}
                        <div className="flex flex-wrap gap-4 text-sm text-text-light-secondary dark:text-text-dark-secondary mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 
                                   dark:from-primary/20 dark:to-secondary/20 rounded-full text-sm font-medium
                                   text-primary dark:text-primary border border-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Achievements */}
                    <motion.ul 
                      className="space-y-3"
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      {experience.points.map((point, pointIndex) => (
                        <motion.li 
                          key={pointIndex}
                          variants={item}
                          className="flex items-start gap-3 group/item"
                        >
                          <span className="text-primary mt-1.5 text-lg opacity-75 group-hover/item:opacity-100 transition-opacity">•</span>
                          <span className="text-text-light-secondary dark:text-text-dark-secondary group-hover/item:text-text-light-primary dark:group-hover/item:text-text-dark-primary transition-colors duration-300 leading-relaxed">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <style dangerouslySetInnerHTML={{
          __html: `
            .custom-timeline .vertical-timeline::before {
              background: linear-gradient(180deg, 
                transparent 0%, 
                var(--color-primary-500) 10%,
                var(--color-primary-500) 90%,
                transparent 100%
              ) !important;
              width: 3px !important;
              filter: blur(0.5px) !important;
            }
          `
        }} />
      </motion.div>
    </section>
  );
}