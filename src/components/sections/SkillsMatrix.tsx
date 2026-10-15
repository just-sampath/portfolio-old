import React from 'react';
import { Terminal } from 'lucide-react';
import { skillGroups } from '../../data/skills';

const SkillsMatrix: React.FC = () => {
    return (
        <section id="skills" className="py-20 border-t border-dashed border-gray-800">
            <div className="flex items-center gap-3 mb-8">
                <Terminal size={24} className="text-white" aria-hidden="true" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">SKILLS</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {skillGroups.map((group) => (
                    <div
                        key={group.id}
                        className="border border-white/20 bg-black/50 p-4 sm:p-6 relative hover:border-white transition-colors duration-300"
                    >
                        <h3 className="absolute -top-3 left-4 bg-black px-2 text-xs text-white border border-white/20 uppercase tracking-wider">
                            {group.name}
                        </h3>
                        <ul className="flex flex-wrap gap-2 mt-2" role="list">
                            {group.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="text-xs font-mono border border-gray-700 px-2 py-1 text-gray-300 bg-gray-900/50"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsMatrix;
