import React from 'react';
import { Briefcase } from 'lucide-react';
import { caseStudies, CaseStudy } from '../../data/caseStudies';

/** Literal class names so Tailwind generates them; one row of stats on large screens */
const LG_COLS: Record<number, string> = {
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
};

const CaseStudies: React.FC = () => {
    return (
        <section id="case-studies" className="py-20 border-t border-dashed border-gray-800">
            <div className="flex items-center gap-3 mb-3">
                <Briefcase size={24} className="text-white" aria-hidden="true" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">CASE_STUDIES</h2>
            </div>
            <p className="text-sm text-gray-400 mb-10 max-w-3xl">
                Production systems I built at Concentrix, Chat Aid, and Springworks. The code belongs to
                each employer; the problem, approach, and result are below.
            </p>

            <div className="space-y-6">
                {caseStudies.map((study) => (
                    <CaseStudyRow key={study.id} study={study} />
                ))}
            </div>
        </section>
    );
};

const CaseStudyRow: React.FC<{ study: CaseStudy }> = ({ study }) => {
    const titleId = `case-study-${study.id}`;

    return (
        <article
            aria-labelledby={titleId}
            className="border border-white/20 bg-black/50 p-6 sm:p-8 hover:border-white transition-colors duration-300"
        >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                        @{study.employer} · {study.role}
                    </p>
                    <h3 id={titleId} className="text-xl sm:text-2xl font-bold text-white break-words">
                        {study.name}
                    </h3>
                </div>
                <div className="md:text-right shrink-0 md:max-w-xs border-l-2 border-green-500 pl-3 md:border-l-0 md:pl-0 md:border-r-2 md:pr-3">
                    <p className="text-2xl sm:text-3xl font-black text-white leading-tight">
                        {study.metric.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                        {study.metric.label}
                    </p>
                </div>
            </div>

            {study.stats && (
                <ul
                    className={`mt-6 grid grid-cols-2 sm:grid-cols-3 ${LG_COLS[study.stats.length] ?? 'lg:grid-cols-6'} gap-px bg-white/10 border border-white/10`}
                    role="list"
                    aria-label="Scale"
                >
                    {study.stats.map((stat) => (
                        <li key={stat.label} className="bg-black p-3 last:odd:col-span-2 sm:last:odd:col-span-1">
                            <span className="block text-xl font-black text-white">{stat.value}</span>
                            <span className="block text-[10px] uppercase tracking-wider text-gray-400">{stat.label}</span>
                        </li>
                    ))}
                </ul>
            )}

            <dl className="mt-6 grid grid-cols-1 md:grid-cols-[7rem_1fr] gap-x-6 gap-y-2 md:gap-y-4 text-sm">
                <dt className="text-xs uppercase tracking-widest text-gray-400 md:pt-0.5">Problem</dt>
                <dd className="text-gray-300 leading-relaxed mb-3 md:mb-0">{study.problem}</dd>

                <dt className="text-xs uppercase tracking-widest text-gray-400 md:pt-0.5">Approach</dt>
                <dd className="mb-3 md:mb-0">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-1 text-gray-300" role="list">
                        {study.approach.map((step) => (
                            <li key={step} className="flex items-start gap-2">
                                <span className="text-white" aria-hidden="true">»</span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>
                </dd>

                <dt className="text-xs uppercase tracking-widest text-gray-400 md:pt-0.5">Result</dt>
                <dd className="text-white font-bold leading-relaxed">{study.result}</dd>
            </dl>

            <ul className="flex flex-wrap gap-2 mt-6" role="list" aria-label="Technologies">
                {study.technologies.map((tech) => (
                    <li
                        key={tech}
                        className="text-[10px] font-bold px-2 py-1 uppercase tracking-wider border border-gray-700 text-gray-400"
                    >
                        {tech}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default CaseStudies;
