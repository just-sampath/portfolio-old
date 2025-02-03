import { motion } from 'framer-motion';
import { Education } from '../components/Education';

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="relative aspect-[4/3] w-full">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471"
            alt="Team collaboration"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-primary-dark/10" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-6 leading-relaxed">
            I'm a Software Development Engineer with a passion for building innovative solutions. 
            My journey in tech started with a curiosity about how things work, which led me to 
            pursue Computer Science with a focus on AI and Machine Learning.
          </p>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or learning Japanese. I believe in continuous learning and pushing the boundaries 
            of what's possible with technology.
          </p>
        </div>
      </div>
      <Education />
    </motion.div>
  );
}