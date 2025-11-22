import React from 'react';
import { Hash } from 'lucide-react';

const ExperienceLog: React.FC = () => {
    return (
        <section id="experience" className="py-20">
            <div className="flex items-center gap-4 mb-12">
                <Hash size={24} className="text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">EXPERIENCE</h2>
            </div>

            <div className="space-y-0 relative border-l border-gray-800 ml-2 sm:ml-4">
                {[
                    {
                        role: "BACKEND LEAD",
                        company: "CHAT AID",
                        date: "2025-01 -- PRESENT",
                        items: [
                            "Led backend dev for high-throughput Slack integrations (1000s msg/day).",
                            "Optimized event-driven architecture & robust webhook ingestion.",
                            "Scaled training/data pipelines using webhooks & queueing.",
                            "Implemented system-hardening measures & performance optimizations."
                        ]
                    },
                    {
                        role: "SDE I",
                        company: "SPRINGWORKS",
                        date: "2023-07 -- 2024-12",
                        items: [
                            "Built agent-powered Slack automations (JIRA) with FastAPI.",
                            "Integrated Node.js/Express services with MongoDB & AI agents.",
                            "Reduced system errors by 45% via diagnosis & tuning.",
                            "Raised code coverage to 85% with Mocha & Chai."
                        ]
                    }
                ].map((job, idx) => (
                    <div key={idx} className="relative pl-8 sm:pl-12 pb-16 group">
                        {/* Timeline Node */}
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-black border border-white group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 transition-transform duration-300 group-hover:translate-x-2">
                            <div>
                                <h3 className="text-xl sm:text-2xl text-white font-bold flex items-center gap-2">
                                    {job.role}
                                    <span className="hidden sm:inline-block w-4 h-[1px] bg-gray-600"></span>
                                    <span className="text-gray-400 font-normal text-lg">@{job.company}</span>
                                </h3>
                            </div>
                            <div className="font-mono text-[10px] sm:text-xs border border-gray-700 px-3 py-1 mt-2 md:mt-0 self-start text-gray-400 bg-gray-900/50">
                                {job.date}
                            </div>
                        </div>

                        <ul className="text-sm text-gray-400 space-y-3 list-none">
                            {job.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group/item hover:text-gray-200 transition-colors">
                                    <span className="text-gray-600 mt-1 group-hover/item:text-white transition-colors">&gt;&gt;</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceLog;
