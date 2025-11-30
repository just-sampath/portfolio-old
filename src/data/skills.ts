export interface Skill {
    name: string;
    level: number; // 0-100
    description: string;
    projects?: string[];
}

export interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: "backend",
        name: "Backend",
        icon: "⚡",
        skills: [
            {
                name: "Node.js",
                level: 95,
                description:
                    "Primary backend language for 2+ years. Built production systems handling enterprise workloads.",
                projects: ["Albus RAG Platform", "Chat Aid Backend", "Custom APIs"],
            },
            {
                name: "Python",
                level: 90,
                description:
                    "AI/ML backend development with FastAPI. RAG pipelines, agentic systems, and data processing.",
                projects: [
                    "RAG Pipeline Optimization",
                    "Lambda Document Processing",
                    "Agentic Actions",
                ],
            },
            {
                name: "Express.js",
                level: 92,
                description:
                    "REST API development, middleware patterns, and authentication flows.",
                projects: ["Albus API", "Chat Aid Backend"],
            },
            {
                name: "FastAPI",
                level: 88,
                description:
                    "High-performance Python APIs with async support and automatic OpenAPI docs.",
                projects: ["RAG Service", "Agentic Actions Service"],
            },
            {
                name: "BullMQ",
                level: 85,
                description:
                    "Distributed queue management with parent-child patterns for scalable processing.",
                projects: ["Slack Data Ingestion Pipeline"],
            },
        ],
    },
    {
        id: "cloud",
        name: "AWS_Cloud",
        icon: "☁️",
        skills: [
            {
                name: "Lambda",
                level: 90,
                description:
                    "Serverless functions for document processing. Designed 7-lambda pipeline with Step Functions.",
                projects: ["Document Processing Pipeline"],
            },
            {
                name: "ECS_Fargate",
                level: 88,
                description:
                    "Container orchestration for backend services. Set up complete production infrastructure.",
                projects: ["Chat Aid Infrastructure"],
            },
            {
                name: "S3",
                level: 92,
                description:
                    "Object storage for files, logs, and processed documents. Streaming reads for large files.",
                projects: ["Document Processing", "Data Ingestion"],
            },
            {
                name: "Step_Functions",
                level: 85,
                description:
                    "Workflow orchestration for multi-lambda coordination with error handling.",
                projects: ["Document Processing Pipeline"],
            },
            {
                name: "API_Gateway",
                level: 82,
                description:
                    "REST API management with authentication and rate limiting.",
                projects: ["Lambda Invocation Endpoints"],
            },
            {
                name: "CloudFront",
                level: 80,
                description: "CDN configuration for frontend and API distribution.",
                projects: ["Chat Aid Frontend Deployment"],
            },
            {
                name: "VPC_Networking",
                level: 78,
                description:
                    "Subnets, security groups, internal/external ALBs, and Route 53.",
                projects: ["Chat Aid Infrastructure"],
            },
        ],
    },
    {
        id: "databases",
        name: "Databases",
        icon: "🗄️",
        skills: [
            {
                name: "MongoDB",
                level: 95,
                description:
                    "Primary database for 2+ years. Aggregation pipelines, indexing optimization, state management.",
                projects: ["Albus", "Chat Aid", "Agentic State Management"],
            },
            {
                name: "Pinecone",
                level: 88,
                description: "Vector database with BM25 sparse-dense hybrid search.",
                projects: ["Albus RAG"],
            },
            {
                name: "Qdrant",
                level: 85,
                description:
                    "Vector database with BM42 hybrid search and HNSW index optimization.",
                projects: ["Chat Aid RAG Pipeline"],
            },
            {
                name: "Redis",
                level: 82,
                description: "Caching, session management, and queue backends.",
                projects: ["Chat Aid Caching Layer"],
            },
            {
                name: "MySQL",
                level: 70,
                description:
                    "Relational database for structured data and reporting needs.",
                projects: ["AI Call Automation"],
            },
        ],
    },
    {
        id: "ai",
        name: "AI_RAG",
        icon: "🤖",
        skills: [
            {
                name: "RAG_Systems",
                level: 95,
                description:
                    "End-to-end RAG pipeline design: chunking, embedding, retrieval, reranking, and generation.",
                projects: ["Albus", "Chat Aid"],
            },
            {
                name: "LlamaIndex",
                level: 88,
                description:
                    "Document indexing, query engines, and retrieval optimization.",
                projects: ["Chat Aid RAG Pipeline"],
            },
            {
                name: "OpenAI_API",
                level: 92,
                description:
                    "GPT integration, structured outputs, function calling, and prompt engineering.",
                projects: ["All RAG Projects"],
            },
            {
                name: "Prompt_Eng",
                level: 90,
                description:
                    "System prompt optimization for specific models, reducing hallucinations and improving accuracy.",
                projects: ["RAG Accuracy Optimization"],
            },
            {
                name: "PyAutoGen",
                level: 82,
                description:
                    "Multi-agent systems with deterministic tool calling patterns.",
                projects: ["Agentic Actions System"],
            },
            {
                name: "Cohere",
                level: 85,
                description:
                    "Reranking API for relevance scoring and semantic search enhancement.",
                projects: ["Chat Aid Reranking"],
            },
            {
                name: "Jina",
                level: 83,
                description:
                    "Embedding models and reranking for two-way relevance scoring.",
                projects: ["Chat Aid Reranking"],
            },
        ],
    },
    {
        id: "devops",
        name: "DevOps",
        icon: "🔧",
        skills: [
            {
                name: "Docker",
                level: 88,
                description:
                    "Containerization, multi-stage builds, and Chainguard secure images.",
                projects: ["All Backend Services"],
            },
            {
                name: "CI_CD",
                level: 85,
                description:
                    "Automated build and deployment pipelines to AWS services.",
                projects: ["Chat Aid Deployment"],
            },
            {
                name: "ECR",
                level: 82,
                description:
                    "Container registry management with automated image scanning.",
                projects: ["Chat Aid Infrastructure"],
            },
            {
                name: "CloudWatch",
                level: 80,
                description: "Logging, monitoring, and alerting for AWS services.",
                projects: ["Production Monitoring"],
            },
            {
                name: "Secrets_Mgr",
                level: 78,
                description: "Secure credential management for production environments.",
                projects: ["Chat Aid Security"],
            },
        ],
    },
];

// Flatten all skills for search/filter functionality
export const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
        ...skill,
        category: cat.name,
        categoryId: cat.id,
    }))
);
