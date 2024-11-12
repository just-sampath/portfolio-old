import React from 'react';

export function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-text-primary dark:text-text-primary-dark">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface dark:bg-surface-dark rounded-lg p-6 elevation-1 card-hover">
          <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary">
            Journal App
          </h3>
          <p className="text-text-secondary dark:text-text-secondary-dark mb-4">
            A web-based journaling app with user authentication and CRUD functionality using MongoDB and Express.js
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Node.js', 'Express', 'MongoDB', 'PUG'].map(tech => (
              <span 
                key={tech}
                className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <a 
            href="https://github.com/just-sampath/Simple-Journal-App"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary dark:text-primary hover:underline font-medium"
          >
            View Project <span className="ml-1">→</span>
          </a>
        </div>

        <div className="bg-surface dark:bg-surface-dark rounded-lg p-6 elevation-1 card-hover">
          <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary">
            Stock Price Prediction
          </h3>
          <p className="text-text-secondary dark:text-text-secondary-dark mb-4">
            A project to predict stock prices using regression models and decision trees
          </p>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Sklearn'].map(tech => (
              <span 
                key={tech}
                className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}