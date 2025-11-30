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
}

export const profile: Profile = {
    name: "YELLAPANTHULA SAI SAMPATH",
    role: "Backend Lead & AI Engineer",
    tagline: "Building Scalable Systems | RAG Pipelines | AWS Architecture",
    mission: `> SYSTEM.INIT: Backend engineer specializing in distributed systems, 
> RAG pipelines, and cloud-native architectures.
> 
> EXPERTISE: Node.js | Python | AWS | Vector Databases
> 
> CURRENT_MISSION: Architecting AI-powered solutions that scale.
> Building the infrastructure behind intelligent applications.`,
    email: "ysampath36@gmail.com",
    location: "India (Remote)",
    github: "https://github.com/just-sampath",
    linkedin: "https://linkedin.com/in/just-sampath",
    availableForWork: true,
};
