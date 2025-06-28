import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineIcon } from './TimelineIcon';

const experiences = [
  {
    title: 'Lead Backend Engineer',
    company: 'ChatAid',
    date: 'Jan 2025 - Present',
    points: [
      'Spearheading backend architecture and development of AI-powered chat systems',
      'Architecting and implementing robust data ingestion pipelines for diverse data sources',
      'Leading the development of AI agent systems with advanced multimodal capabilities',
      'Collaborating with cross-functional teams to implement and optimize frontend features',
      'Driving technical decisions and best practices for system scalability and performance'
    ]
  },
  {
    title: 'Software Development Engineer - 1',
    company: 'Springworks',
    date: 'Jul 2024 - Dec 2024',
    points: [
      'Led AI agent development using FastAPI and webhook flows, automating Slack workflows',
      'Integrated backend services with AI agents using Node.js, Express, and MongoDB',
      'Applied prompt engineering to improve AI agent performance',
      'Enhanced containerization and resource management for backend scalability',
      'Strengthened documentation for backend and AI integrations'
    ]
  },
  {
    title: 'Backend Intern',
    company: 'Springworks',
    date: 'Jul 2023 - Jul 2024',
    points: [
      'Developed backend services using Node.js and Express',
      'Implemented unit tests using Mocha and Chai, improving code coverage to 85%',
      'Resolved critical bugs and performance issues, reducing system errors by 45%',
      'Built and integrated backend features with MongoDB'
    ]
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
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Professional Journey
          </motion.h2>
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
                <div className="bg-white/5 backdrop-blur-lg dark:bg-gray-800/50 rounded-xl p-6 shadow-lg 
                  border border-gray-200/10 dark:border-gray-700/50
                  hover:shadow-2xl hover:border-primary/20 transition-all duration-300
                  transform hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <motion.h3 
                      className="text-2xl font-bold text-primary dark:text-primary mb-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {experience.title}
                    </motion.h3>
                    <motion.h4 
                      className="text-xl font-semibold mb-4 text-text-light-primary dark:text-text-dark-primary"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <a 
                        href={experience.company === 'ChatAid' ? 'https://www.chataid.com/' : 'https://www.springworks.in/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        {experience.company}
                      </a>
                    </motion.h4>
                    
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
                          className="flex items-start gap-3 group"
                        >
                          <span className="text-primary mt-1.5 text-lg opacity-75 group-hover:opacity-100 transition-opacity">•</span>
                          <span className="text-text-light-secondary dark:text-text-dark-secondary group-hover:text-primary/90 transition-colors duration-300">
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