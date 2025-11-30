import React, { useState, useEffect } from 'react';
import { Mail, Globe, Briefcase, Github, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';

const Footer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [uptime, setUptime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
            setUptime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer id="contact" className="border-t border-white/20 pt-20 pb-10">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-green-500 animate-pulse rounded-full"></div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT</h2>
                    </div>

                    {profile.availableForWork && (
                        <div className="mb-6 inline-flex items-center gap-2 text-xs text-green-400 border border-green-400/30 px-3 py-1.5 bg-green-400/5">
                            <Briefcase size={14} />
                            <span>ACTIVELY_SEEKING_OPPORTUNITIES</span>
                        </div>
                    )}

                    <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                        Open to backend engineering, AI/ML engineering, and technical lead roles.
                        Interested in RAG systems, distributed architectures, and AWS infrastructure.
                    </p>

                    <div className="space-y-6">
                        <a
                            href={`mailto:${profile.email}`}
                            className="flex items-center gap-4 text-sm group cursor-pointer hover:translate-x-2 transition-transform"
                        >
                            <div className="p-3 border border-gray-700 group-hover:border-white transition-colors">
                                <Mail className="text-gray-500 group-hover:text-white" size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase">Email_Address</span>
                                <span className="text-gray-300 group-hover:text-white text-base">{profile.email}</span>
                            </div>
                        </a>
                        <div className="flex items-center gap-4 text-sm group hover:translate-x-2 transition-transform">
                            <div className="p-3 border border-gray-700 group-hover:border-white transition-colors">
                                <Globe className="text-gray-500 group-hover:text-white" size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase">Location_Data</span>
                                <span className="text-gray-300 group-hover:text-white text-base">{profile.location}</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all group"
                            >
                                <Github size={20} className="text-gray-500 group-hover:text-black" />
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all group"
                            >
                                <Linkedin size={20} className="text-gray-500 group-hover:text-black" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900/30 p-6 sm:p-8 border border-gray-800 font-mono text-xs text-gray-500 backdrop-blur-sm hover:border-gray-600 transition-colors">
                    <div className="flex justify-between mb-4 border-b border-gray-800 pb-4">
                        <span>SYSTEM_DIAGNOSTICS</span>
                        <span className="text-green-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            ALL_SYSTEMS_GO
                        </span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between"><span>SESSION_UPTIME</span><span className="text-white font-bold">{uptime}s</span></div>
                        <div className="flex justify-between"><span>EXPERIENCE</span><span className="text-white">2+ Years</span></div>
                        <div className="flex justify-between"><span>SPECIALIZATION</span><span className="text-white">Backend + RAG</span></div>
                        <div className="flex justify-between"><span>FRAMEWORK</span><span className="text-white">React + Vite</span></div>
                        <div className="flex justify-between"><span>RENDERER</span><span className="text-white">Tailwind_v4</span></div>
                        <div className="flex justify-between"><span>LOCAL_TIME</span><span className="text-white">{currentTime.toLocaleTimeString()}</span></div>
                        <div className="mt-8 text-gray-600 pt-4 border-t border-gray-800 text-center">
                            // Built by Sampath <br />
                            // &copy; {new Date().getFullYear()} All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
