import React, { useState } from 'react';
import {
    Command,
    ChevronDown,
    ChevronUp,
    Search,
    Calculator,
    ShieldCheck,
    FileCheck,
    GraduationCap,
    Workflow,
} from 'lucide-react';
import { projects, Project } from '../../data/projects';

const projectIcons: Record<string, React.ReactNode> = {
    'adaptive-deterministic-rag': <ShieldCheck size={24} />,
    'ats-resume-maker': <FileCheck size={24} />,
    'leetcode-ai-coach': <GraduationCap size={24} />,
    'recruiter-ai': <Search size={24} />,
    'emi-calculator': <Calculator size={24} />,
    'azure-devops-autocreate': <Workflow size={24} />,
};

const ProjectsGrid: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="projects" className="py-20 border-t border-dashed border-gray-800">
            <div className="flex items-center gap-4 mb-3">
                <Command size={24} className="text-white" aria-hidden="true" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">PROJECTS</h2>
                <span className="text-xs text-gray-400 ml-auto hidden sm:block">[CLICK_TO_EXPAND]</span>
            </div>
            <p className="text-sm text-gray-400 mb-10">Open source: public code you can read and run.</p>

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
    const panelId = `project-panel-${project.id}`;

    return (
        <div
            className={`group border bg-gray-950 p-1 transition-all duration-500 ${isExpanded
                    ? 'border-white bg-white md:col-span-2'
                    : 'border-gray-800 hover:border-white hover:scale-[1.02]'
                }`}
        >
            <div className={`border p-6 h-full flex flex-col relative overflow-hidden transition-colors ${isExpanded ? 'border-black bg-white' : 'border-gray-800'
                }`}>
                <span aria-hidden="true" className={`absolute -right-4 -top-4 text-8xl sm:text-9xl font-black opacity-10 select-none pointer-events-none transition-colors ${isExpanded ? 'text-gray-400' : 'text-gray-900 group-hover:text-gray-700'
                    }`}>
                    {String(index + 1).padStart(2, '0')}
                </span>

                {/* Disclosure control — panel is a sibling, not inside the button */}
                <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    className="w-full text-left bg-transparent border-0 p-0 cursor-pointer relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 transition-colors ${isExpanded
                                ? 'bg-black text-white'
                                : 'bg-gray-900 text-gray-400 group-hover:bg-black group-hover:text-white'
                            }`}>
                            {icon}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap justify-end">
                            <span className={`text-[10px] px-2 py-0.5 uppercase ${project.status === 'production'
                                    ? isExpanded
                                        ? 'bg-green-100 text-green-800 border border-green-700'
                                        : 'bg-green-500/20 text-green-400 border border-green-500/50'
                                    : 'bg-gray-800 text-gray-300 border border-gray-700'
                                }`}>
                                {project.status}
                            </span>
                            <span
                                aria-hidden="true"
                                className={`p-1 border transition-colors ${isExpanded ? 'border-black' : 'border-gray-700 group-hover:border-white'
                                    }`}
                            >
                                {isExpanded
                                    ? <ChevronUp size={16} className="text-black" />
                                    : <ChevronDown size={16} className="text-gray-400" />
                                }
                            </span>
                        </div>
                    </div>

                    <h3 className={`text-lg sm:text-xl font-bold mb-2 break-words transition-colors ${isExpanded ? 'text-black' : 'text-white'
                        }`}>
                        {project.name}
                    </h3>
                    <p className={`text-sm mb-4 font-mono transition-colors ${isExpanded ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-300'
                        }`}>
                        {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
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
                </button>

                <div id={panelId} hidden={!isExpanded} className="relative z-10">
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="mb-6 p-3 bg-black/5 border-l-2 border-black">
                        <span className="text-[10px] uppercase text-gray-600 block mb-1">Impact</span>
                        <span className="text-sm text-black font-medium">{project.impact}</span>
                    </div>

                    <div className="mb-6">
                        <span className="text-[10px] uppercase text-gray-600 mb-2 block">Key Highlights</span>
                        <ul className="text-sm text-gray-600 space-y-1" role="list">
                            {project.highlights.map((highlight) => (
                                <li key={highlight} className="flex items-start gap-2">
                                    <span className="text-black mt-0.5" aria-hidden="true">»</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {(project.github || project.demo) && (
                        <div className="mb-6 flex flex-wrap gap-3">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border border-black text-black hover:bg-black hover:text-white transition-colors"
                                >
                                    GitHub ↗
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
                                >
                                    Live Demo ↗
                                </a>
                            )}
                        </div>
                    )}
                </div>

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
                        <span className="text-[10px] text-gray-400 px-2 py-1">
                            +{project.technologies.length - 4} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsGrid;
