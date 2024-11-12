import React from 'react';

export function Education() {
  return (
    <section id="education" className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-text-primary dark:text-text-primary-dark">
        Education
      </h2>
      <div className="space-y-6">
        <div className="bg-surface dark:bg-surface-dark rounded-lg p-6 elevation-1 card-hover">
          <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">
            BTech - CSE (AIML)
          </h3>
          <p className="text-text-primary dark:text-text-primary-dark font-medium">
            Godavari Global University
          </p>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            May 2024 | Rajahmundry, India
          </p>
          <p className="text-primary dark:text-primary mt-2 font-medium">
            GPA: 8.49
          </p>
        </div>
        
        <div className="bg-surface dark:bg-surface-dark rounded-lg p-6 elevation-1 card-hover">
          <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">
            Intermediate (12th), MPC
          </h3>
          <p className="text-text-primary dark:text-text-primary-dark font-medium">
            Sree Vijaya Durga Jr College
          </p>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            March 2020 | Rajahmundry, India
          </p>
        </div>
      </div>
    </section>
  );
}