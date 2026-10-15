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
        id: "concentrix-se2",
        role: "Software Engineer II",
        company: "Concentrix",
        period: "2026-01 - Present",
        status: "current",
        summary:
            "Full-stack and AI engineering on production RAG and WFM automation systems—optimizing chatbot workflows, shipping banking RAG under tight deadlines, and building Claude/Azure-powered reporting pipelines.",
        achievements: [
            {
                text: "Optimized RAG chatbot workflows with parent-child chunking, pre-canned routing, task-based model selection, and parallelized retrieval/LLM calls, reducing latency and improving answer quality for production banking use cases",
                highlight: true,
            },
            {
                text: "Delivered a modular, provider/model-agnostic banking RAG chatbot to production in 3 days with hybrid search, hierarchical chunking, and evaluation checkpoints",
                highlight: true,
            },
            {
                text: "Built a Claude Code plugin that takes a WFM report briefing to a tested, packaged Azure Functions app through one command: 17 agents, 12 gated steps, 13 deterministic gates, and 6 bypass-proof hooks",
                highlight: true,
            },
            {
                text: "Developed WFM reporting pipelines with Claude on Azure Functions (query generation, aggregation, production deployment)",
            },
            {
                text: "Converted 7 manual WFM reports per week into AI-assisted workflows across query and aggregation-heavy use cases",
            },
        ],
        technologies: [
            "Python",
            "Node.js",
            "Claude",
            "Azure Functions",
            "RAG",
            "Hybrid Search",
        ],
    },
    {
        id: "chataid-lead",
        role: "Team Lead",
        company: "Chat Aid",
        period: "2025-05 - 2025-12",
        status: "completed",
        summary:
            "Led cross-functional development across Node.js backend, Python RAG services, and React frontend. Drove RAG latency improvements, serverless document processing, and vector DB infrastructure for an enterprise chatbot platform.",
        achievements: [
            {
                text: "Reduced RAG response time from 60–80s to 10–15s at p99 by routing models by plan tier, using structured outputs, and reranking results from multiple providers (Cohere + Jina) in parallel",
                highlight: true,
            },
            {
                text: "Architected a 7-Lambda serverless document processing pipeline with Step Functions for secure file handling",
                highlight: true,
            },
            {
                text: "Deployed zero-downtime Qdrant infrastructure on EC2/EBS with SQS/S3 write buffering, health-gated cutover, and instance promotion/retirement",
                highlight: true,
            },
            {
                text: "Optimized vector database with tenant-specific indexing, HNSW tuning, recency bias, and configurable top-K retrieval",
            },
            {
                text: "Added post-evaluation system for Auto Answer quality assessment",
            },
            {
                text: "Designed tree-based chunking strategies for Notion & Confluence knowledge bases",
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
            "EC2",
            "SQS",
            "Pinecone",
            "Qdrant",
            "LlamaIndex",
            "OpenAI",
            "Cohere",
            "Jina",
        ],
    },
    {
        id: "chataid-be",
        role: "Backend Lead",
        company: "Chat Aid",
        period: "2025-01 - 2025-05",
        status: "completed",
        summary:
            "Sole backend owner responsible for the entire Node.js and Python backend ecosystem. Set up complete AWS infrastructure from scratch and drove critical optimizations.",
        achievements: [
            {
                text: "Deployed full AWS infrastructure: ECS + Fargate, ECR, ALB, CloudFront, S3, Redis, SQS",
                highlight: true,
            },
            {
                text: "Configured VPC networking, IAM policies, internal/external ALBs, API Gateway, Route 53 DNS, and Secrets Manager",
            },
            {
                text: "Introduced Chainguard images for enhanced container security",
            },
            {
                text: "Built CI/CD pipelines with automated deployments to AWS",
                highlight: true,
            },
            {
                text: "Implemented webhook → S3 multipart uploads with 15MB batch processing",
            },
            {
                text: "Built streaming byte-level file processing into Qdrant to avoid loading entire files into memory",
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
        period: "2023-07 - 2024-12",
        status: "completed",
        summary:
            "Architected backend systems for Albus, an enterprise RAG chatbot ingesting data from 50+ sources including JIRA, Notion, Confluence, Google Drive, and custom web crawlers. Led the Agentic Actions initiative.",
        achievements: [
            {
                text: "Raised test coverage across the backend service to 90% with unit and integration suites (Mocha, Chai)",
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
                text: "Designed BullMQ parent-child queue architecture with tenant-channel isolation for Slack ingestion across workspaces with 1000+ channels",
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
                text: "Built Python backend services with FastAPI and pyautogen for agentic AI workflows; hardened Docker configurations with multi-stage builds and health checks",
            },
            {
                text: "Enhanced Microsoft Teams platform support",
            },
            {
                text: "Delivered an AI call automation system enabling voice-based customer interactions",
            },
        ],
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "BullMQ",
            "Mocha",
            "Python",
            "FastAPI",
            "PyAutoGen",
            "Docker",
            "Slack Bolt",
            "Teams Graph",
            "Apify",
        ],
    },
];
