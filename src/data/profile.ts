export interface Profile {
    name: string;
    role: string;
    tagline: string;
    mission: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    availableForWork: boolean;
    yearsOfExperience: number;
    availabilityLabel: string;
    availabilityBlurb: string;
}

export const profile: Profile = {
    name: "YELLAPANTHULA SAI SAMPATH",
    role: "Full Stack & AI Engineer",
    tagline: "Building Scalable Systems | RAG Pipelines | Full Stack & Cloud",
    mission: `> SYSTEM.INIT: Full stack engineer with 3+ years building production AI systems.
> 
> EXPERTISE: Node.js | Python | TypeScript | AWS | Vector Databases | RAG
> 
> CURRENT_MISSION: Shipping scalable full-stack and AI platforms.
> Specialized in RAG chatbots, serverless infrastructure, and event-driven backends.`,
    email: "ysampath36@gmail.com",
    location: "India (Remote)",
    github: "https://github.com/just-sampath",
    linkedin: "https://linkedin.com/in/just-sampath",
    availableForWork: true,
    yearsOfExperience: 3,
    availabilityLabel: "OPEN_TO_SELECTIVE_ROLES",
    availabilityBlurb:
        "Open to selective conversations about full-stack, AI/ML engineering, and technical lead roles—especially RAG systems, distributed architectures, and AWS infrastructure.",
};
