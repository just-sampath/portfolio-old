import React, { useState, useEffect } from 'react';
import { Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer id="contact" className="border-t border-white/20 pt-20 pb-10">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-white animate-pulse rounded-full"></div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT</h2>
                    </div>
                    <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                        Currently open to discussing backend engineering roles.
                        Execute the email protocol below to connect.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-sm group cursor-pointer hover:translate-x-2 transition-transform">
                            <div className="p-3 border border-gray-700 group-hover:border-white transition-colors">
                                <Mail className="text-gray-500 group-hover:text-white" size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase">Email_Address</span>
                                <span className="text-gray-300 group-hover:text-white text-base">ysampath36@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm group hover:translate-x-2 transition-transform">
                            <div className="p-3 border border-gray-700 group-hover:border-white transition-colors">
                                <Globe className="text-gray-500 group-hover:text-white" size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase">Location_Data</span>
                                <span className="text-gray-300 group-hover:text-white text-base">Rajahmundry, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900/30 p-8 border border-gray-800 font-mono text-xs text-gray-500 backdrop-blur-sm hover:border-gray-600 transition-colors">
                    <div className="flex justify-between mb-4 border-b border-gray-800 pb-4">
                        <span>SYSTEM_DIAGNOSTICS</span>
                        <span className="text-green-500">ALL_SYSTEMS_GO</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between"><span>UPTIME</span><span className="text-white font-bold">{Math.floor((currentTime.getTime() - currentTime.getTime() + 10000000) / 1000)}s</span></div>
                        <div className="flex justify-between"><span>FRAMEWORK</span><span className="text-white">React_19.2.0</span></div>
                        <div className="flex justify-between"><span>RENDERER</span><span className="text-white">Tailwind_v4</span></div>
                        <div className="mt-8 text-gray-600 pt-4 border-t border-gray-800 text-center">
              // Built by Sampath <br />
              // &copy; 2025 All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
