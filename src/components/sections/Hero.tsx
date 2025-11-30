import React, { useState, useEffect } from 'react';
import { ChevronRight, Github, Linkedin, ArrowDown, Briefcase } from 'lucide-react';
import TypewriterText from '../ui/TypewriterText';
import { profile } from '../../data/profile';

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
                    {profile.role}
                </p>
                <p className="flex flex-wrap items-center gap-2">
                    <span className="bg-gray-800 text-white px-2 py-0.5 text-xs font-bold uppercase border border-gray-700">Stack</span>
                    <span className="text-gray-300">{profile.tagline}</span>
                </p>
                <div className="pt-4 font-light text-gray-400">
                    <TypewriterText
                        text="> Specializing in RAG pipelines, serverless architectures, and distributed backend systems."
                        delay={1200}
                    />
                    <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} text-white ml-1 inline-block w-2 h-4 bg-white align-middle`}></span>
                </div>
            </div>

            {/* Experience Badge */}
            <div className="mt-8 inline-flex items-center gap-3 text-sm font-mono border border-white/30 px-5 py-3 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 group">
                <span className="text-2xl font-bold text-white group-hover:text-black">2+</span>
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase group-hover:text-gray-600">Years of</span>
                    <span className="text-white font-semibold group-hover:text-black">Experience</span>
                </div>
            </div>

            {profile.availableForWork && (
                <div className="mt-6 inline-flex items-center gap-2 text-xs text-green-400 border border-green-400/30 px-3 py-1.5 bg-green-400/5 w-fit animate-pulse">
                    <Briefcase size={14} />
                    <span>OPEN_TO_OPPORTUNITIES</span>
                </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
                <a href={profile.github} target="_blank" rel="noreferrer" className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-white text-white uppercase text-xs font-bold tracking-widest overflow-hidden transition-all hover:bg-white hover:text-black">
                    <Github size={16} className="mr-2 group-hover:animate-bounce" />
                    <span>GitHub</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-black border border-white uppercase text-xs font-bold tracking-widest overflow-hidden transition-all hover:bg-black hover:text-white">
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
