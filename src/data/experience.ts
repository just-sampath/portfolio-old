export interface Achievement {
    text: string;
    highlight?: boolean;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    status: "current" | "completed";
    summary: string;
    achievements: Achievement[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: "chataid-lead",
        role: "Team Lead",
        company: "Chat Aid",
        period: "2025-01 - Present",
        status: "current",
        summary:
            "Leading backend architecture and AI systems for an enterprise RAG chatbot platform. Promoted to Team Lead while being the most junior member, now overseeing all technical decisions across Node.js, Python, and AWS infrastructure.",
        achievements: [
            {
                text: "Reduced RAG response times from 80s to 25-30s through system prompt optimization and vector DB indexing",
                highlight: true,
            },
            {
                text: "Architected a 7-Lambda serverless document processing pipeline with Step Functions for secure file handling",
                highlight: true,
            },
            {
                text: "Introduced two-way reranking between providers (Cohere + Jina) improving answer relevance by 40%",
            },
            {
                text: "Implemented structured outputs and model routing based on subscription plans",
            },
            {
                text: "Optimized vector database with proper indexing, tenant isolation, and HNSW tuning",
            },
            {
                text: "Added post-evaluation system for Auto Answer quality assessment",
            },
            {
                text: "Designed chunking strategies with overlap for Notion & Confluence providers",
            },
            {
                text: "Built streaming processing for large files to eliminate memory issues",
            },
        ],
        technologies: [
            "Python",
            "FastAPI",
            "AWS Lambda",
            "Step Functions",
            "S3",
            "API Gateway",
            "Pinecone",
            "Qdrant",
            "LlamaIndex",
            "OpenAI",
        ],
    },
    {
        id: "chataid-be",
        role: "Backend Developer",
        company: "Chat Aid",
        period: "2025-01 - 2025-06",
        status: "completed",
        summary:
            "Sole backend owner responsible for the entire Node.js and Python backend ecosystem. Set up complete AWS infrastructure from scratch and drove critical optimizations.",
        achievements: [
            {
                text: "Deployed full AWS infrastructure: ECS + Fargate, ECR, ALB, CloudFront, S3, Redis, SQS",
                highlight: true,
            },
            {
                text: "Introduced Chainguard images for enhanced container security",
            },
            {
                text: "Built CI/CD pipelines with automated deployments to AWS",
                highlight: true,
            },
            {
                text: "Optimized data ingestion to stream from S3 instead of loading entire files",
            },
            {
                text: "Implemented persona-based customizable answer structures",
            },
            {
                text: "Added comprehensive data visualization dashboards for plans, integrations, and analytics",
            },
            {
                text: "Streamlined authentication flows and introduced new subscription plans",
            },
        ],
        technologies: [
            "Node.js",
            "Express",
            "AWS ECS",
            "Fargate",
            "ECR",
            "CloudFront",
            "Redis",
            "SQS",
            "Docker",
            "MongoDB",
        ],
    },
    {
        id: "springworks",
        role: "Software Development Engineer I",
        company: "Springworks",
        companyUrl: "https://www.springworks.in/albus/",
        period: "2023-08 - 2024-12",
        status: "completed",
        summary:
            "Backend developer for Albus, an enterprise RAG chatbot ingesting data from 50+ sources. Grew from writing test cases to owning critical features and leading the Agentic Actions initiative.",
        achievements: [
            {
                text: "Achieved 80% test coverage by writing comprehensive test suites for existing flows",
                highlight: true,
            },
            {
                text: "Built Auto Answer feature for automatic message response handling across Slack & Teams",
                highlight: true,
            },
            {
                text: "Implemented end-to-end Web Crawler with Apify handling enterprise scale",
            },
            {
                text: "Designed BullMQ parent-child queue architecture for efficient Slack data ingestion",
                highlight: true,
            },
            {
                text: "Created Custom API for programmatic RAG access",
            },
            {
                text: "Led Agentic Actions project: rearchitected from WebSockets to Webhooks with resumable state",
            },
            {
                text: "Made AI agents deterministic by restructuring tool calling flow for predictable behavior",
            },
            {
                text: "Optimized MongoDB queries by eliminating $lookup joins",
            },
            {
                text: "Improved query routing to reduce unnecessary AI/RAG invocations",
            },
            {
                text: "Enhanced Microsoft Teams platform support",
            },
        ],
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "BullMQ",
            "Python",
            "FastAPI",
            "PyAutoGen",
            "Slack Bolt",
            "Teams Graph",
            "Apify",
        ],
    },
];
