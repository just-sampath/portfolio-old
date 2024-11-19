import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase } from 'lucide-react';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    title: 'Software Development Engineer - 1',
    company: 'Springworks',
    date: 'Jul 2024 - Present',
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

export function Experience() {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Professional Journey
        </h2>
        
        <VerticalTimeline>
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
                display: 'none'
              }}
              date={experience.date}
              dateClassName="text-text-secondary dark:text-text-secondary-dark font-medium"
              iconStyle={{ 
                background: 'var(--color-primary-500)',
                color: '#fff',
                boxShadow: 'none'
              }}
              icon={<Briefcase className="w-5 h-5" />}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-primary dark:text-primary">{experience.title}</h3>
                <h4 className="text-lg font-semibold mb-2 text-text-primary dark:text-text-primary-dark">
                  {experience.company}
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {experience.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-text-secondary dark:text-text-secondary-dark">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
}