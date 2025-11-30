import React, { useState } from 'react';
import { Command, ChevronDown, ChevronUp, Zap, Server, Database, Cloud, Bot } from 'lucide-react';
import { projects, Project } from '../../data/projects';

const projectIcons: Record<string, React.ReactNode> = {
    'rag-optimization': <Zap size={24} />,
    'lambda-pipeline': <Cloud size={24} />,
    'slack-ingestion': <Server size={24} />,
    'agentic-actions': <Bot size={24} />,
    'aws-infrastructure': <Database size={24} />,
};

const ProjectsGrid: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="projects" className="py-20 border-t border-dashed border-gray-800">
            <div className="flex items-center gap-4 mb-8">
                <Command size={24} className="text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">PROJECT_HIGHLIGHTS</h2>
                <span className="text-xs text-gray-600 ml-auto hidden sm:block">[CLICK_TO_EXPAND]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {projects.map((proj, idx) => (
                    <ProjectCard
                        key={proj.id}
                        project={proj}
                        index={idx}
                        icon={projectIcons[proj.id]}
                        isExpanded={expandedId === proj.id}
                        onToggle={() => toggleExpand(proj.id)}
                    />
                ))}
            </div>
        </section>
    );
};

interface ProjectCardProps {
    project: Project;
    index: number;
    icon: React.ReactNode;
    isExpanded: boolean;
    onToggle: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, icon, isExpanded, onToggle }) => {
    return (
        <div
            className={`group border bg-gray-950 p-1 transition-all duration-500 cursor-pointer ${isExpanded
                    ? 'border-white bg-white md:col-span-2'
                    : 'border-gray-800 hover:border-white hover:scale-[1.02]'
                }`}
            onClick={onToggle}
        >
            <div className={`border p-6 h-full flex flex-col relative overflow-hidden transition-colors ${isExpanded ? 'border-black bg-white' : 'border-gray-800'
                }`}>
                {/* Background Number */}
                <span className={`absolute -right-4 -top-4 text-8xl sm:text-9xl font-black opacity-10 select-none pointer-events-none transition-colors ${isExpanded ? 'text-gray-400' : 'text-gray-900 group-hover:text-gray-700'
                    }`}>
                    0{index + 1}
                </span>

                {/* Header */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className={`p-3 transition-colors ${isExpanded
                            ? 'bg-black text-white'
                            : 'bg-gray-900 text-gray-400 group-hover:bg-black group-hover:text-white'
                        }`}>
                        {icon}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`text-[10px] px-2 py-0.5 uppercase ${project.status === 'production'
                                ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                : 'bg-gray-800 text-gray-400 border border-gray-700'
                            }`}>
                            {project.status}
                        </span>
                        <button className={`p-1 border transition-colors ${isExpanded ? 'border-black' : 'border-gray-700 hover:border-white'
                            }`}>
                            {isExpanded
                                ? <ChevronUp size={16} className="text-black" />
                                : <ChevronDown size={16} className="text-gray-400" />
                            }
                        </button>
                    </div>
                </div>

                {/* Title & Tagline */}
                <h3 className={`text-lg sm:text-xl font-bold mb-2 relative z-10 transition-colors ${isExpanded ? 'text-black' : 'text-white group-hover:text-white'
                    }`}>
                    {project.name}
                </h3>
                <p className={`text-sm mb-4 font-mono transition-colors ${isExpanded ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-400'
                    }`}>
                    {project.tagline}
                </p>

                {/* Quick Stats - Always Visible */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.details.map((detail) => (
                        <div
                            key={detail.label}
                            className={`text-[10px] font-mono px-2 py-1 transition-colors ${isExpanded
                                    ? 'border border-gray-300 text-gray-600'
                                    : 'border border-gray-700 text-gray-400 group-hover:border-gray-600'
                                }`}
                        >
                            <span className="opacity-70">{detail.label}:</span> {detail.value}
                        </div>
                    ))}
                </div>

                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out relative z-10 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Impact */}
                    <div className="mb-6 p-3 bg-black/5 border-l-2 border-black">
                        <span className="text-[10px] uppercase text-gray-500 block mb-1">Impact</span>
                        <span className="text-sm text-black font-medium">{project.impact}</span>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                        <span className="text-[10px] uppercase text-gray-500 mb-2 block">Key Highlights</span>
                        <ul className="text-sm text-gray-600 space-y-1">
                            {project.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-black mt-0.5">»</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tech Stack - Always at Bottom */}
                <div className="flex flex-wrap gap-2 mt-auto relative z-10 pt-4">
                    {project.technologies.slice(0, isExpanded ? undefined : 4).map(tech => (
                        <span
                            key={tech}
                            className={`text-[10px] font-bold px-2 py-1 uppercase tracking-wider transition-colors ${isExpanded
                                    ? 'border border-black text-black'
                                    : 'border border-gray-700 text-gray-400 group-hover:border-gray-500 group-hover:text-gray-300'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                    {!isExpanded && project.technologies.length > 4 && (
                        <span className="text-[10px] text-gray-600 px-2 py-1">
                            +{project.technologies.length - 4} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsGrid;
