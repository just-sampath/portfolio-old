import React, { useState, useEffect } from 'react';
import { ChevronRight, Github, Linkedin, ArrowDown, Briefcase, FileText } from 'lucide-react';
import { profile } from '../../data/profile';
import { experiences } from '../../data/experience';

const currentJob = experiences.find((e) => e.status === 'current');

const Hero: React.FC = () => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useEffect(() => {
        const handleScroll = () => setShowScrollIndicator(window.scrollY <= 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about" className="min-h-[80vh] flex flex-col justify-center border-l border-white/10 pl-6 sm:pl-10 pt-24 relative">
            <div className="mb-8 text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                <ChevronRight size={14} className="text-white" aria-hidden="true" />
                <span>./init_profile.sh --force</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 mix-blend-difference leading-[0.9]">
                YELLAPANTHULA<br />SAI SAMPATH
            </h1>

            <p className="text-lg sm:text-2xl text-white font-bold mb-8">{profile.role}</p>

            <div className="max-w-2xl space-y-5 text-sm sm:text-lg leading-relaxed border-l-2 border-white pl-6 py-2 bg-gradient-to-r from-white/5 to-transparent">
                {currentJob && (
                    <p className="flex flex-wrap items-center gap-2">
                        <span className="bg-white text-black px-2 py-0.5 text-xs font-bold uppercase">Current Role</span>
                        <span className="text-gray-200">
                            {currentJob.role} @ {currentJob.company}
                        </span>
                    </p>
                )}
                <ul className="space-y-2 text-gray-300" role="list">
                    {profile.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                            <span className="text-white" aria-hidden="true">»</span>
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-mono border border-white/30 px-5 py-3 bg-white/5">
                <span className="text-2xl font-bold text-white">{profile.yearsOfExperience}+</span>
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase">Years of</span>
                    <span className="text-white font-semibold">Experience</span>
                </div>
            </div>

            {profile.availableForWork && (
                <div className="mt-6 inline-flex items-center gap-2 text-xs text-green-400 border border-green-400/30 px-3 py-1.5 bg-green-400/5 w-fit">
                    <Briefcase size={14} aria-hidden="true" />
                    <span>{profile.availabilityLabel}</span>
                </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-black border border-white uppercase text-xs font-bold tracking-widest transition-colors hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <FileText size={16} className="mr-2" aria-hidden="true" />
                    <span>Résumé</span>
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-white text-white uppercase text-xs font-bold tracking-widest transition-colors hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <Github size={16} className="mr-2" aria-hidden="true" />
                    <span>GitHub</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-white text-white uppercase text-xs font-bold tracking-widest transition-colors hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <Linkedin size={16} className="mr-2" aria-hidden="true" />
                    <span>LinkedIn</span>
                </a>
            </div>

            <div
                aria-hidden="true"
                className={`mt-12 animate-bounce text-gray-500 transition-opacity duration-300 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}
            >
                <ArrowDown size={24} />
            </div>
        </section>
    );
};

export default Hero;
