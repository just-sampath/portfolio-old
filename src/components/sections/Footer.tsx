import React from 'react';
import { Mail, Globe, Briefcase, Github, Linkedin, FileText } from 'lucide-react';
import { profile } from '../../data/profile';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="border-t border-white/20 pt-20 pb-10">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT</h2>
                    </div>

                    {profile.availableForWork && (
                        <div className="mb-6 inline-flex items-center gap-2 text-xs text-green-400 border border-green-400/30 px-3 py-1.5 bg-green-400/5">
                            <Briefcase size={14} aria-hidden="true" />
                            <span>{profile.availabilityLabel}</span>
                        </div>
                    )}

                    <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                        {profile.availabilityBlurb}
                    </p>

                    <div className="space-y-6">
                        <a
                            href={`mailto:${profile.email}`}
                            className="flex items-center gap-4 text-sm group cursor-pointer hover:translate-x-2 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                            <div className="p-3 border border-gray-700 group-hover:border-white transition-colors">
                                <Mail className="text-gray-400 group-hover:text-white" size={18} aria-hidden="true" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 uppercase">Email_Address</span>
                                <span className="text-gray-300 group-hover:text-white text-base break-all">{profile.email}</span>
                            </div>
                        </a>
                        <a
                            href={profile.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-sm group cursor-pointer hover:translate-x-2 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                            <div className="p-3 border border-gray-700 group-hover:border-white transition-colors">
                                <FileText className="text-gray-400 group-hover:text-white" size={18} aria-hidden="true" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 uppercase">Résumé</span>
                                <span className="text-gray-300 group-hover:text-white text-base">Open PDF ↗</span>
                            </div>
                        </a>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="p-3 border border-gray-700">
                                <Globe className="text-gray-400" size={18} aria-hidden="true" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 uppercase">Location_Data</span>
                                <span className="text-gray-300 text-base">{profile.location}</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <Github size={20} className="text-gray-400 group-hover:text-black" aria-hidden="true" />
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="p-3 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <Linkedin size={20} className="text-gray-400 group-hover:text-black" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-mono mb-3">
                        CONTACT_CHANNEL // form
                    </p>
                    <ContactForm />
                </div>
            </div>

            <p className="mt-16 pt-6 border-t border-gray-800 text-center text-xs text-gray-400 font-mono">
                // &copy; {new Date().getFullYear()} Sai Sampath Yellapanthula
            </p>
        </footer>
    );
};

export default Footer;
