import React, { useState } from 'react';
import { Hash, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { experiences, Experience } from '../../data/experience';

const ExperienceLog: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="experience" className="py-20">
            <div className="flex items-center gap-4 mb-12">
                <Hash size={24} className="text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">EXPERIENCE_LOG</h2>
                <span className="text-xs text-gray-400 ml-auto hidden sm:block">[CLICK_TO_EXPAND]</span>
            </div>

            <div className="space-y-0 relative border-l border-gray-800 ml-2 sm:ml-4">
                {experiences.map((job) => (
                    <ExperienceCard
                        key={job.id}
                        job={job}
                        isExpanded={expandedId === job.id}
                        onToggle={() => toggleExpand(job.id)}
                    />
                ))}
            </div>
        </section>
    );
};

interface ExperienceCardProps {
    job: Experience;
    isExpanded: boolean;
    onToggle: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job, isExpanded, onToggle }) => {
    const panelId = `experience-panel-${job.id}`;

    return (
        <div className="relative pl-8 sm:pl-12 pb-8 group">
            {/* Timeline Node */}
            <div className={`absolute left-[-5px] top-2 w-2.5 h-2.5 border transition-all duration-300 ${job.status === 'current'
                    ? 'bg-green-500 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]'
                    : 'bg-black border-white group-hover:bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                }`}></div>

            {/* Header: short expand control; summary stays outside the button for AT names */}
            <div className="transition-all duration-300 group-hover:translate-x-2">
                <div className="flex items-start gap-2 mb-4">
                    <button
                        type="button"
                        onClick={onToggle}
                        aria-expanded={isExpanded}
                        aria-controls={panelId}
                        className="flex-1 min-w-0 text-left bg-transparent border-0 p-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <div className="flex flex-col md:flex-row md:items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="text-xl sm:text-2xl text-white font-bold">
                                        {job.role}
                                    </h3>
                                    {job.status === 'current' && (
                                        <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 border border-green-500/50 uppercase">
                                            Active
                                        </span>
                                    )}
                                </div>
                                <div className="mt-1 text-gray-400 text-lg">
                                    @{job.company}
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-2 md:mt-0">
                                <span className="font-mono text-[10px] sm:text-xs border border-gray-700 px-3 py-1 text-gray-400 bg-gray-900/50">
                                    {job.period}
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="p-1 border border-gray-700 group-hover:border-white transition-colors inline-flex"
                                >
                                    {isExpanded
                                        ? <ChevronUp size={16} className="text-white" />
                                        : <ChevronDown size={16} className="text-gray-400" />
                                    }
                                </span>
                            </div>
                        </div>
                    </button>

                    {job.companyUrl && (
                        <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${job.company} website`}
                            className="text-gray-400 hover:text-white transition-colors mt-2 shrink-0"
                        >
                            <ExternalLink size={14} aria-hidden="true" />
                        </a>
                    )}
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-3xl">
                    {job.summary}
                </p>
            </div>

            {/* Expandable Content — hidden from a11y tree when collapsed */}
            <div id={panelId} hidden={!isExpanded}>
                <div className="mb-6">
                    <div className="text-xs text-gray-400 uppercase mb-3 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-gray-700"></span>
                        Key Achievements
                    </div>
                    <ul className="text-sm text-gray-400 space-y-2 list-none" role="list">
                        {job.achievements.map((achievement, i) => (
                            <li
                                key={i}
                                className={`flex items-start gap-3 transition-colors ${achievement.highlight
                                        ? 'text-white bg-white/5 p-2 border-l-2 border-white -ml-2'
                                        : 'hover:text-gray-200'
                                    }`}
                            >
                                <span className={`mt-1 ${achievement.highlight ? 'text-white' : 'text-gray-600'}`} aria-hidden="true">
                                    {achievement.highlight ? '★' : '>>'}
                                </span>
                                <span>{achievement.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="text-xs text-gray-400 uppercase mb-3 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-gray-700"></span>
                        Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="text-[10px] font-mono border border-gray-700 px-2 py-1 text-gray-400 bg-gray-900/50 hover:border-white hover:text-white transition-colors uppercase"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceLog;
