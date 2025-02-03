import { motion } from 'framer-motion';

type Skill = {
  name: string;
  proficiency: number;
  icon?: string;
};

const skillCategories = {
  'Core Technologies': [
    { name: 'Node.js', proficiency: 4.5, icon: '🟢' },
    { name: 'Python', proficiency: 4, icon: '🐍' },
    { name: 'MongoDB', proficiency: 4.5, icon: '🍃' }
  ],
  'AI & Backend': [
    { name: 'FastAPI', proficiency: 4, icon: '⚡' },
    { name: 'OpenAI', proficiency: 4.5, icon: '🤖' },
    { name: 'Autogen', proficiency: 4, icon: '🔄' }
  ],
  'Tools & Infrastructure': [
    { name: 'Docker', proficiency: 3.5, icon: '🐳' },
    { name: 'System Design', proficiency: 3, icon: '🔧' }
  ]
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${
            star <= rating
              ? 'text-yellow-400'
              : star - 0.5 <= rating
              ? 'text-yellow-400/50'
              : 'text-gray-400'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function SkillCard({ name, proficiency, icon }: Skill) {
  return (
    <motion.div
      variants={item}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gray-800"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          <span className="font-medium">{name}</span>
        </div>
        <StarRating rating={proficiency} />
      </div>
    </motion.div>
  );
}

export function TechnicalExpertise() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
        Technical Expertise
      </h2>
      <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-12">
        Proficient in modern technologies with a focus on AI, backend development, and cloud infrastructure
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">{category}</h3>
            <motion.div variants={container} className="space-y-4">
              {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
