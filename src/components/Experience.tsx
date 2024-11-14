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
                background: 'var(--surface)',
                color: 'var(--text-primary)',
                boxShadow: '0 3px 0 var(--primary)'
              }}
              contentArrowStyle={{ borderRight: '7px solid var(--primary)' }}
              date={experience.date}
              iconStyle={{ background: 'var(--primary)', color: '#fff' }}
              icon={<Briefcase />}
            >
              <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
              <h4 className="text-lg font-semibold mb-2">{experience.company}</h4>
              <ul className="list-disc list-inside space-y-2">
                {experience.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-text-secondary dark:text-text-secondary-dark">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
}