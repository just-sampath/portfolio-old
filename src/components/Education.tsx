import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';

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
      'Published research paper on predictive analytics',
      'Active member of Computer Science Society'
    ],
    icon: GraduationCap,
    color: 'from-blue-500 to-purple-600'
  },
  {
    degree: 'Intermediate (12th), MPC',
    institution: 'Sree Vijaya Durga Jr College',
    location: 'Rajahmundry, India',
    date: 'March 2020',
    achievements: [
      'Achieved state rank in Mathematics',
      'Active member of Science Club',
      'Participated in district-level science exhibitions',
      'Excellence in Physics and Chemistry'
    ],
    icon: BookOpen,
    color: 'from-green-500 to-teal-600'
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
    <section className="mb-24 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation in computer science and artificial intelligence through dedicated learning and practical application
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-8 px-4 relative z-10"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative"
          >
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="absolute -left-4 -top-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${edu.color} shadow-xl`}>
                  <edu.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="ml-12 relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary dark:text-primary mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary mb-3">
                    {edu.institution}
                  </p>
                  
                  {/* Meta information */}
                  <div className="flex flex-wrap items-center gap-4 text-text-light-secondary dark:text-text-dark-secondary">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.date}</span>
                    </div>
                    {edu.gpa && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium">GPA: {edu.gpa}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-4">Key Achievements</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 group/achievement"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <span className="text-primary dark:text-primary mt-1.5 text-sm opacity-75 group-hover/achievement:opacity-100 transition-opacity">✓</span>
                        <span className="text-text-light-secondary dark:text-text-dark-secondary group-hover/achievement:text-text-light-primary dark:group-hover/achievement:text-text-dark-primary transition-colors duration-300 leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}