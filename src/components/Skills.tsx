import React from 'react';

export function Skills() {
  const skills = {
    'Main Stack': ['MongoDB', 'Express', 'Node.js', 'Python', 'FastAPI', 'Autogen', 'OpenAI'],
    'Backend': ['FastAPI', 'Node.js', 'Express'],
    'Tools': ['Docker'],
    'Languages': ['English', 'Telugu', 'Hindi', 'Japanese']
  };

  return (
    <section id="skills" className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-text-primary dark:text-text-primary-dark">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-surface dark:bg-surface-dark rounded-lg p-6 elevation-1 card-hover">
            <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}