import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="mb-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Yellapanthula Sai Sampath
        </h1>
        <p className="text-xl text-text-secondary dark:text-text-secondary-dark mb-8 leading-relaxed">
          Software Development Engineer at Springworks | Full Stack Developer | AI Enthusiast
        </p>
        <div className="flex space-x-4">
          {[
            { icon: Github, href: 'https://github.com/just-sampath', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/just-sampath', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:ysampath36@gmail.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              aria-label={label}
            >
              <Icon size={24} className="text-primary dark:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}