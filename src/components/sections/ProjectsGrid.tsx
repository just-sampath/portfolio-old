import React from 'react';
import { Command, Server, Database, ExternalLink } from 'lucide-react';

const ProjectsGrid: React.FC = () => {
    return (
        <section id="projects" className="py-20 border-t border-dashed border-gray-800">
            <div className="flex items-center gap-4 mb-12">
                <Command size={24} className="text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">PROJECTS</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                    {
                        title: "JOURNAL_APP.js",
                        icon: <Server size={24} />,
                        desc: "Secure web journal with auth & full CRUD. Server-side rendered via Pug with robust session handling.",
                        stack: ["NODE.JS", "EXPRESS", "PUG"],
                        link: "https://github.com/just-sampath/Simple-Journal-App"
                    },
                    {
                        title: "STOCK_PREDICTION.py",
                        icon: <Database size={24} />,
                        desc: "Baseline regression models (decision trees) for next-day price prediction. Automated evaluation pipeline.",
                        stack: ["PYTHON", "SCIKIT-LEARN", "ML"],
                        link: null
                    }
                ].map((proj, idx) => (
                    <div key={idx} className="group border border-gray-800 bg-gray-950 p-1 hover:bg-white hover:border-white transition-all duration-500 hover:scale-[1.02]">
                        <div className="border border-gray-800 group-hover:border-black p-6 h-full flex flex-col relative overflow-hidden">
                            {/* Background Number */}
                            <span className="absolute -right-4 -top-4 text-9xl font-black text-gray-900 group-hover:text-gray-200 opacity-20 transition-colors select-none pointer-events-none">
                                0{idx + 1}
                            </span>

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="bg-gray-900 group-hover:bg-black group-hover:text-white text-gray-400 p-3 transition-colors">
                                    {proj.icon}
                                </div>
                                {proj.link && (
                                    <a href={proj.link} className="opacity-0 group-hover:opacity-100 transition-opacity text-black bg-black/10 p-2 hover:bg-black/20 rounded-full">
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-white group-hover:text-black mb-3 relative z-10">{proj.title}</h3>
                            <p className="text-sm text-gray-500 group-hover:text-gray-700 mb-6 flex-grow leading-relaxed relative z-10">
                                {proj.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                {proj.stack.map(tech => (
                                    <span key={tech} className="text-[10px] font-bold border border-gray-700 px-2 py-1 text-gray-400 group-hover:border-black group-hover:text-black uppercase tracking-wider transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;
