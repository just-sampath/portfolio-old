import React, { useState, useEffect } from 'react';
import { ChevronRight, Github, Linkedin, ArrowDown } from 'lucide-react';
import TypewriterText from '../ui/TypewriterText';

const Hero: React.FC = () => {
    const [cursorVisible, setCursorVisible] = useState(true);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useEffect(() => {
        const cursorInterval = setInterval(() => setCursorVisible(v => !v), 530);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollIndicator(false);
            } else {
                setShowScrollIndicator(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about" className="min-h-[80vh] flex flex-col justify-center border-l border-white/10 pl-6 sm:pl-10 animate-in slide-in-from-bottom-10 duration-1000 fade-in pt-24 relative">
            <div className="mb-8 text-xs sm:text-sm text-gray-500 flex items-center gap-2">
                <ChevronRight size={14} className="text-white animate-pulse" />
                <span>./init_profile.sh --force</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 mix-blend-difference leading-[0.9]">
                YELLAPANTHULA<br />SAI SAMPATH
            </h1>

            <div className="max-w-2xl space-y-6 text-sm sm:text-lg leading-relaxed border-l-2 border-white pl-6 py-2 relative bg-gradient-to-r from-white/5 to-transparent">
                <div className="absolute top-0 left-0 w-1 h-full bg-white animate-pulse"></div>
                <p className="flex flex-wrap items-center gap-2">
                    <span className="bg-white text-black px-2 py-0.5 text-xs font-bold uppercase">Current Role</span>
                    Backend Lead & AI Engineer
                </p>
                <p className="flex flex-wrap items-center gap-2">
                    <span className="bg-gray-800 text-white px-2 py-0.5 text-xs font-bold uppercase border border-gray-700">Mission</span>
                    Architecting scalable event-driven systems.
                </p>
                <div className="pt-4 font-light text-gray-400">
                    <TypewriterText
                        text="> Specializing in high-throughput integrations, distributed systems, and intelligent agent workflows."
                        delay={1200}
                    />
                    <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} text-white ml-1 inline-block w-2 h-4 bg-white align-middle`}></span>
                </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
                <a href="https://github.com/just-sampath" target="_blank" rel="noreferrer" className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-white text-white uppercase text-xs font-bold tracking-widest overflow-hidden transition-all hover:bg-white hover:text-black">
                    <Github size={16} className="mr-2 group-hover:animate-bounce" />
                    <span>GitHub</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
                <a href="https://linkedin.com/in/just-sampath" target="_blank" rel="noreferrer" className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-black border border-white uppercase text-xs font-bold tracking-widest overflow-hidden transition-all hover:bg-black hover:text-white">
                    <Linkedin size={16} className="mr-2 group-hover:animate-bounce" />
                    <span>LinkedIn</span>
                </a>
            </div>

            <div className={`absolute bottom-10 left-4 sm:left-10 animate-bounce text-gray-600 transition-opacity duration-300 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}>
                <ArrowDown size={24} />
            </div>
        </section>
    );
};

export default Hero;
