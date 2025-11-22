import React, { useState } from 'react';
import { Terminal, Zap, X } from 'lucide-react';

const skillDetails: Record<string, string> = {
    "Python": "Proficient in writing efficient, scalable scripts and backend services. Used extensively for Data Structures, Algorithms, and AI/ML pipelines.",
    "Node.js": "Experienced in building high-throughput, event-driven backend services. Integrated with Express and MongoDB for production-grade applications.",
    "FastAPI": "Built agent-powered automations and high-performance APIs. Specialized in asynchronous request handling.",
    "Express.js": "Developed RESTful APIs and microservices. Implemented robust middleware for routing, authentication, and error handling.",
    "MongoDB": "Designed complex schemas for scalability. Handled session management and efficient data retrieval for web apps.",
    "OpenAI API": "Integrated LLMs into applications for intelligent agent responses. Tuned prompts for high accuracy in task completion.",
    "AutoGen": "Experience with multi-agent conversation frameworks for complex task automation.",
    "LlamaIndex": "Implemented RAG pipelines to connect LLMs with custom data sources for context-aware responses.",
    "Prompt_Eng": "Iterative refinement of system prompts to improve agent reliability and reduce hallucinations.",
    "RAG_Pipeline": "Building Retrieval-Augmented Generation flows to ground AI responses in factual data."
};

const skillLevels: Record<string, number> = {
    "Python": 98,
    "Node.js": 92,
    "FastAPI": 90,
    "Express.js": 88,
    "MongoDB": 85,
    "OpenAI API": 95,
    "AutoGen": 88,
    "LlamaIndex": 85,
    "Prompt_Eng": 92,
    "RAG_Pipeline": 88
};

const SkillsMatrix: React.FC = () => {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    const SkillBar = ({ name, level, max = 20 }: { name: string, level: number, max?: number }) => {
        const filled = Math.floor((level / 100) * max);
        const empty = max - filled;

        return (
            <div
                onClick={() => setSelectedSkill(name)}
                className="font-mono text-xs sm:text-sm mb-3 cursor-pointer group relative overflow-hidden transition-all hover:bg-white/5 p-1 rounded"
            >
                <div className="flex justify-between mb-1 relative z-10">
                    <span className="group-hover:text-white group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
                        <span className="opacity-0 group-hover:opacity-100 text-[10px]">&gt;</span>
                        {name}
                    </span>
                    <span className="group-hover:text-white">{level}%</span>
                </div>
                <div className="text-gray-600 group-hover:text-gray-400 transition-colors relative z-10">
                    [
                    <span className="text-white group-hover:text-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0.5)]">{'#'.repeat(filled)}</span>
                    <span className="text-gray-800 group-hover:text-gray-700">{'-'.repeat(empty)}</span>
                    ]
                </div>
            </div>
        );
    };

    return (
        <section id="skills" className="py-20 border-t border-dashed border-gray-800">
            <Modal selectedSkill={selectedSkill} onClose={() => setSelectedSkill(null)} />
            <div className="flex items-center gap-3 mb-12">
                <Terminal size={24} className="text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">SKILLS_MATRIX</h2>
                <span className="text-xs text-gray-600 ml-auto">[CLICK_FOR_DETAILS]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <div className="border border-white/20 bg-black/50 p-6 relative group hover:border-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <div className="absolute -top-3 left-4 bg-black px-2 text-xs text-white border border-white/20 group-hover:border-white uppercase tracking-wider transition-colors">
                        Backend_Core
                    </div>
                    <div className="space-y-4 mt-2">
                        {["Python", "Node.js", "FastAPI", "Express.js", "MongoDB"].map(s => (
                            <SkillBar key={s} name={s} level={skillLevels[s]} />
                        ))}
                    </div>
                </div>

                <div className="border border-white/20 bg-black/50 p-6 relative group hover:border-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <div className="absolute -top-3 left-4 bg-black px-2 text-xs text-white border border-white/20 group-hover:border-white uppercase tracking-wider transition-colors">
                        AI_Engineering
                    </div>
                    <div className="space-y-4 mt-2">
                        {["OpenAI API", "AutoGen", "LlamaIndex", "Prompt_Eng", "RAG_Pipeline"].map(s => (
                            <SkillBar key={s} name={s} level={skillLevels[s]} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ModalProps {
    selectedSkill: string | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ selectedSkill, onClose }) => {
    if (!selectedSkill) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-black border border-white w-full max-w-md shadow-[0_0_30px_rgba(255,255,255,0.15)] relative animate-in zoom-in-95 duration-300">
                <div className="bg-white text-black px-2 py-1 flex justify-between items-center border-b border-white">
                    <span className="text-xs font-bold uppercase">INFO: {selectedSkill}</span>
                    <button onClick={onClose} className="hover:bg-black hover:text-white px-1 transition-colors">
                        <X size={14} />
                    </button>
                </div>
                <div className="p-6 font-mono text-sm text-gray-300 leading-relaxed">
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <Zap size={16} className="animate-pulse" />
                        <span className="font-bold">SKILL_ANALYSIS</span>
                    </div>
                    <p className="mb-4 border-l-2 border-gray-700 pl-3">
                        {skillDetails[selectedSkill] || "Detailed proficiency in this technology stack used in production environments."}
                    </p>
                    <div className="text-xs text-gray-500 mt-6">
                        &gt; Press ESC or click X to close_
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsMatrix;
