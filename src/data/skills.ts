export interface SkillGroup {
    id: string;
    name: string;
    skills: string[];
}

/** Grouped like the résumé's Technical Skills section. */
export const skillGroups: SkillGroup[] = [
    {
        id: "ai",
        name: "AI & LLM",
        skills: [
            "RAG architecture",
            "RAG evaluation",
            "Prompt engineering",
            "Agentic workflows",
            "OpenAI API",
            "Claude",
            "Claude Code",
            "LlamaIndex",
            "AutoGen (pyautogen)",
            "Portkey",
            "LangChain",
            "LangGraph",
            "Langfuse",
        ],
    },
    {
        id: "languages",
        name: "Languages",
        skills: ["Python", "TypeScript", "JavaScript"],
    },
    {
        id: "retrieval",
        name: "Retrieval & Vector Search",
        skills: [
            "Pinecone",
            "Qdrant",
            "ChromaDB",
            "Hybrid search",
            "BM25",
            "BM42",
            "HNSW index tuning",
            "Cohere",
            "Jina",
        ],
    },
    {
        id: "cloud",
        name: "Cloud & DevOps",
        skills: [
            "AWS Lambda",
            "Step Functions",
            "S3",
            "SQS",
            "API Gateway",
            "ECS / Fargate",
            "ECR",
            "EC2",
            "CloudFront",
            "Secrets Manager",
            "Azure Functions",
            "Docker",
            "CI/CD",
            "Git",
        ],
    },
    {
        id: "backend",
        name: "Backend & Integrations",
        skills: [
            "Node.js",
            "Express.js",
            "FastAPI",
            "REST APIs",
            "Webhooks",
            "BullMQ",
            "Slack Bolt",
            "Microsoft Teams Graph API",
        ],
    },
    {
        id: "databases",
        name: "Databases & Caching",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Valkey"],
    },
    {
        id: "frontend",
        name: "Frontend",
        skills: ["React", "HTML", "CSS"],
    },
];
