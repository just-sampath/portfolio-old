import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Terminal, Zap, X } from 'lucide-react';
import { skillCategories, Skill, SkillCategory } from '../../data/skills';
import { useEscapeKey } from '../../hooks/useEscapeKey';

interface SelectedSkillInfo {
    skill: Skill;
    category: SkillCategory;
}

function skillButtonId(skillName: string): string {
    return `skill-btn-${skillName.replace(/\W+/g, '-').toLowerCase()}`;
}

interface SkillBarProps {
    skill: Skill;
    category: SkillCategory;
    onOpen: (skill: Skill, category: SkillCategory) => void;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, category, onOpen }) => {
    const max = 20;
    const filled = Math.floor((skill.level / 100) * max);
    const empty = max - filled;

    return (
        <button
            id={skillButtonId(skill.name)}
            type="button"
            aria-haspopup="dialog"
            onClick={() => onOpen(skill, category)}
            className="w-full text-left font-mono text-xs sm:text-sm mb-3 cursor-pointer group relative overflow-hidden transition-all hover:bg-white/5 p-1 rounded bg-transparent border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
            <div className="flex justify-between mb-1 relative z-10">
                <span className="group-hover:text-white group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
                    <span className="opacity-0 group-hover:opacity-100 text-[10px]">&gt;</span>
                    {skill.name.replace(/_/g, ' ')}
                </span>
                <span className="group-hover:text-white">{skill.level}%</span>
            </div>
            <div className="text-gray-600 group-hover:text-gray-400 transition-colors relative z-10">
                [
                <span className="text-white group-hover:text-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0.5)]">{'#'.repeat(filled)}</span>
                <span className="text-gray-800 group-hover:text-gray-700">{'-'.repeat(empty)}</span>
                ]
            </div>
        </button>
    );
};

const FOCUSABLE =
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function isFocusableVisible(el: HTMLElement): boolean {
    if (el.hasAttribute('disabled') || el.getAttribute('aria-hidden') === 'true') {
        return false;
    }
    if (typeof el.checkVisibility === 'function') {
        return el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true });
    }
    const style = window.getComputedStyle(el);
    return style.visibility !== 'hidden' && style.display !== 'none';
}

interface ModalProps {
    selectedSkill: SelectedSkillInfo | null;
    openerId: string | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ selectedSkill, openerId, onClose }) => {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const titleId = 'skill-modal-title';
    const prevOpenRef = useRef(false);
    const lastOpenerIdRef = useRef<string | null>(null);

    useEffect(() => {
        if (openerId) lastOpenerIdRef.current = openerId;
    }, [openerId]);

    useEffect(() => {
        const isOpen = selectedSkill !== null;

        if (!isOpen) {
            if (prevOpenRef.current) {
                const id = lastOpenerIdRef.current;
                requestAnimationFrame(() => {
                    if (id) document.getElementById(id)?.focus();
                });
            }
            prevOpenRef.current = false;
            return;
        }

        prevOpenRef.current = true;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Tab' || !dialogRef.current) return;
            const nodes = Array.from(
                dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
            ).filter(isFocusableVisible);
            if (nodes.length === 0) return;
            const first = nodes[0];
            const last = nodes[nodes.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [selectedSkill]);

    if (!selectedSkill) return null;

    const { skill, category } = selectedSkill;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="bg-black border border-white w-full max-w-md shadow-[0_0_30px_rgba(255,255,255,0.15)] relative animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-white text-black px-3 py-2 flex justify-between items-center border-b border-white">
                    <div className="flex items-center gap-2">
                        <span aria-hidden="true">{category.icon}</span>
                        <span id={titleId} className="text-xs font-bold uppercase">
                            {skill.name.replace(/_/g, ' ')}
                        </span>
                    </div>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="hover:bg-black hover:text-white px-2 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                    >
                        <X size={14} />
                    </button>
                </div>

                <div className="p-6 font-mono text-sm text-gray-300 leading-relaxed">
                    <div className="mb-6">
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-gray-500">PROFICIENCY</span>
                            <span className="text-white font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-900 border border-gray-700">
                            <div
                                className="h-full bg-white transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-white">
                        <Zap size={16} className="animate-pulse" aria-hidden="true" />
                        <span className="font-bold text-xs uppercase">Analysis</span>
                    </div>
                    <p className="mb-6 border-l-2 border-gray-700 pl-3 text-gray-400">
                        {skill.description}
                    </p>

                    {skill.projects && skill.projects.length > 0 && (
                        <div>
                            <div className="text-xs text-gray-500 uppercase mb-2">Used In Projects</div>
                            <div className="flex flex-wrap gap-2">
                                {skill.projects.map((project) => (
                                    <span
                                        key={project}
                                        className="text-[10px] px-2 py-1 border border-gray-700 text-gray-400 bg-gray-900/50"
                                    >
                                        {project}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="text-[10px] text-gray-600 mt-6 pt-4 border-t border-gray-800">
                        &gt; Category: {category.name} | Press ESC or click outside to close_
                    </div>
                </div>
            </div>
        </div>
    );
};

const SkillsMatrix: React.FC = () => {
    const [selectedSkill, setSelectedSkill] = useState<SelectedSkillInfo | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [openerId, setOpenerId] = useState<string | null>(null);

    const openSkill = useCallback((skill: Skill, category: SkillCategory) => {
        setOpenerId(skillButtonId(skill.name));
        setSelectedSkill({ skill, category });
    }, []);

    const closeModal = useCallback(() => {
        setSelectedSkill(null);
    }, []);

    useEscapeKey(closeModal, selectedSkill !== null);

    return (
        <section id="skills" className="py-20 border-t border-dashed border-gray-800">
            <Modal
                selectedSkill={selectedSkill}
                openerId={openerId}
                onClose={closeModal}
            />

            <div className="flex items-center gap-3 mb-8">
                <Terminal size={24} className="text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">SKILLS_MATRIX</h2>
                <span className="text-xs text-gray-600 ml-auto hidden sm:block">[CLICK_FOR_DETAILS]</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8 sm:hidden">
                {skillCategories.map((cat) => (
                    <button
                        key={cat.id}
                        type="button"
                        aria-pressed={activeCategory === cat.id}
                        onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                        className={`text-xs px-3 py-1.5 border transition-all ${activeCategory === cat.id
                                ? 'bg-white text-black border-white'
                                : 'border-gray-700 text-gray-400 hover:border-white hover:text-white'
                            }`}
                    >
                        {cat.icon} {cat.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {skillCategories.map((category) => (
                    <div
                        key={category.id}
                        className={`border border-white/20 bg-black/50 p-4 sm:p-6 relative group hover:border-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${activeCategory && activeCategory !== category.id ? 'hidden sm:block' : ''
                            }`}
                    >
                        <div className="absolute -top-3 left-4 bg-black px-2 text-xs text-white border border-white/20 group-hover:border-white uppercase tracking-wider transition-colors flex items-center gap-1">
                            <span>{category.icon}</span>
                            <span>{category.name}</span>
                        </div>
                        <div className="space-y-3 mt-2">
                            {category.skills.map((skill) => (
                                <SkillBar
                                    key={skill.name}
                                    skill={skill}
                                    category={category}
                                    onOpen={openSkill}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center text-xs text-gray-600 font-mono">
                TOTAL_SKILLS: {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} |
                CATEGORIES: {skillCategories.length} |
                AVG_PROFICIENCY: {Math.round(
                    skillCategories.flatMap(c => c.skills).reduce((acc, s) => acc + s.level, 0) /
                    skillCategories.flatMap(c => c.skills).length
                )}%
            </div>
        </section>
    );
};

export default SkillsMatrix;
