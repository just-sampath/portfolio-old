import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'BTech - CSE (AIML)',
    institution: 'Godavari Global University',
    location: 'Rajahmundry, India',
    date: 'May 2024',
    gpa: '8.49',
    achievements: [
      'Specialized in Artificial Intelligence and Machine Learning',
      'Led technical workshops on AI/ML fundamentals',
      'Published research paper on predictive analytics'
    ],
    icon: GraduationCap
  },
  {
    degree: 'Intermediate (12th), MPC',
    institution: 'Sree Vijaya Durga Jr College',
    location: 'Rajahmundry, India',
    date: 'March 2020',
    achievements: [
      'Achieved state rank in Mathematics',
      'Active member of Science Club',
      'Participated in district-level science exhibitions'
    ],
    icon: BookOpen
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

export function Education() {
  return (
    <section className="mb-16">
      <div className="relative mb-12 rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-dark/10 backdrop-blur-xl z-10" />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070"
            alt="Education background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center py-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto px-4">
            Building a strong foundation in computer science and artificial intelligence
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-8 px-4"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="absolute -left-3 -top-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg">
                <edu.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="ml-8">
              <h3 className="text-xl font-semibold text-primary dark:text-primary">
                {edu.degree}
              </h3>
              <p className="text-lg font-medium text-text-primary dark:text-text-primary-dark mt-1">
                {edu.institution}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-text-secondary dark:text-text-secondary-dark mt-1">
                <span>{edu.location}</span>
                <span>•</span>
                <span>{edu.date}</span>
                {edu.gpa && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </>
                )}
              </div>
              
              <ul className="mt-4 space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary dark:text-primary mt-1.5">•</span>
                    <span className="text-text-secondary dark:text-text-secondary-dark">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}