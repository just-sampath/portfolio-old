import React from 'react';

export function Experience() {
  return (
    <section id="experience" className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-text-primary dark:text-text-primary-dark">
        Experience
      </h2>
      <div className="space-y-8">
        <div className="bg-surface dark:bg-surface-dark rounded-lg p-6 elevation-1 card-hover">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-primary dark:text-primary">
              Software Development Engineer - 1
            </h3>
            <p className="text-text-secondary dark:text-text-secondary-dark">
              Springworks • Jul 2024 - Present
            </p>
          </div>
          <ul className="space-y-3 text-text-primary dark:text-text-primary-dark">
            {[
              'Led AI agent development using FastAPI and webhook flows, automating Slack workflows',
              'Integrated backend services with AI agents using Node.js, Express, and MongoDB',
              'Applied prompt engineering to improve AI agent performance',
              'Enhanced containerization and resource management for backend scalability',
              'Strengthened documentation for backend and AI integrations'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface dark:bg-surface-dark rounded-lg p-6 elevation-1 card-hover">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-primary dark:text-primary">
              Backend Intern
            </h3>
            <p className="text-text-secondary dark:text-text-secondary-dark">
              Springworks • Jul 2023 - Jul 2024
            </p>
          </div>
          <ul className="space-y-3 text-text-primary dark:text-text-primary-dark">
            {[
              'Developed backend services using Node.js and Express',
              'Implemented unit tests using Mocha and Chai, improving code coverage to 85%',
              'Resolved critical bugs and performance issues, reducing system errors by 45%',
              'Built and integrated backend features with MongoDB'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}