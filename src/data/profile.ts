export interface Profile {
    name: string;
    role: string;
    /** Proof points shown at the top of the page */
    highlights: string[];
    email: string;
    location: string;
    github: string;
    linkedin: string;
    /** Path to the résumé PDF in public/ */
    resumeUrl: string;
    availableForWork: boolean;
    yearsOfExperience: number;
    availabilityLabel: string;
    availabilityBlurb: string;
}

export const profile: Profile = {
    name: "YELLAPANTHULA SAI SAMPATH",
    role: "Full Stack & AI Engineer",
    highlights: [
        "Cut RAG p99 latency from 60–80s to 10–15s",
        "Shipped a banking RAG chatbot to production in 3 days",
    ],
    email: "ysampath36@gmail.com",
    location: "India (Remote)",
    github: "https://github.com/just-sampath",
    linkedin: "https://linkedin.com/in/just-sampath",
    resumeUrl: "/Sai_Sampath_Yellapanthula_Resume.pdf",
    availableForWork: true,
    yearsOfExperience: 3,
    availabilityLabel: "OPEN_TO_SELECTIVE_ROLES",
    availabilityBlurb:
        "Open to selective conversations about full-stack, AI/ML engineering, and technical lead roles—especially RAG systems, distributed architectures, and AWS infrastructure.",
};
