export interface ProjectDetail {
    label: string;
    value: string;
}

export interface Project {
    id: string;
    name: string;
    tagline: string;
    description: string;
    impact: string;
    technologies: string[];
    details: ProjectDetail[];
    highlights: string[];
    status: "production" | "completed" | "archived";
}

export const projects: Project[] = [
    {
        id: "rag-optimization",
        name: "RAG_PIPELINE_OPTIMIZER",
        tagline: "80s → 25s response time optimization",
        description:
            "Comprehensive optimization of a production RAG system serving enterprise customers. Tackled the full stack from vector database indexing to prompt engineering.",
        impact: "Reduced response times by 68%, improved answer relevance by 40%",
        technologies: [
            "Python",
            "FastAPI",
            "Pinecone",
            "Qdrant",
            "OpenAI",
            "Cohere",
            "Jina",
        ],
        details: [
            { label: "Response_Time", value: "80s → 25-30s" },
            { label: "Relevance_Boost", value: "+40%" },
            { label: "Index_Strategy", value: "HNSW + Tenant Isolation" },
        ],
        highlights: [
            "Optimized system prompts for specific model characteristics",
            "Implemented two-way reranking between Cohere and Jina",
            "Added tenant-level vector DB indexing for isolation",
            "Introduced recency bias for time-sensitive queries",
            "Made top-N results configurable per user preference",
            "Added structured outputs across all LLM calls",
        ],
        status: "production",
    },
    {
        id: "lambda-pipeline",
        name: "SERVERLESS_DOC_PROCESSOR",
        tagline: "7-Lambda document processing architecture",
        description:
            "Designed and implemented a serverless pipeline for secure document processing. Handles PDF, PPTX, DOCX, and XLSX files with coordinated Lambda execution via Step Functions.",
        impact:
            "Secure, scalable document processing with complete audit trail",
        technologies: [
            "AWS Lambda",
            "Step Functions",
            "S3",
            "API Gateway",
            "Python",
            "VPC",
        ],
        details: [
            { label: "Lambdas", value: "7 specialized functions" },
            { label: "File_Types", value: "PDF, PPTX, DOCX, XLSX" },
            { label: "Orchestration", value: "Step Functions" },
        ],
        highlights: [
            "Coordinator Lambda for validation and chunking",
            "Specialized Lambdas for each file type (PDF, PPTX, DOCX, XLSX)",
            "Mover Lambda for post-processing file organization",
            "Callback Lambda for backend notification",
            "VPC configuration for security isolation",
            "API Gateway integration for external triggers",
        ],
        status: "production",
    },
    {
        id: "slack-ingestion",
        name: "SLACK_DATA_PIPELINE",
        tagline: "BullMQ parent-child queue architecture",
        description:
            "Scalable data ingestion system for Slack workspaces. Uses sophisticated queue architecture to ensure efficient processing while maintaining tenant isolation.",
        impact: "Handles enterprise-scale Slack workspaces with 1000+ channels",
        technologies: ["Node.js", "BullMQ", "Redis", "MongoDB", "Slack Bolt"],
        details: [
            { label: "Queue_Type", value: "Parent-Child Hierarchy" },
            { label: "Concurrency", value: "1 channel/tenant" },
            { label: "Scale", value: "1000+ channels" },
        ],
        highlights: [
            "Parent queue manages tenant-level processing",
            "Child queues handle individual channel ingestion",
            "Ensures only one channel per tenant processes at a time",
            "Prevents rate limiting and maintains data consistency",
            "Automatic retry with exponential backoff",
            "Progress tracking and resumable state",
        ],
        status: "production",
    },
    {
        id: "agentic-actions",
        name: "AGENTIC_ACTIONS_ENGINE",
        tagline: "Deterministic AI agent tool calling",
        description:
            "Rearchitected an agentic system from WebSockets to Webhooks, adding state management and making AI tool calls predictable and reliable.",
        impact: "Transformed unreliable AI agents into production-ready system",
        technologies: ["Python", "FastAPI", "PyAutoGen", "MongoDB", "OpenAI"],
        details: [
            { label: "Architecture", value: "WebSocket → Webhook" },
            { label: "State", value: "MongoDB persisted" },
            { label: "Reliability", value: "Deterministic calls" },
        ],
        highlights: [
            "Migrated from WebSockets to Webhooks for reliability",
            "Added MongoDB state management for resumable conversations",
            "Restructured tool calling to be deterministic",
            "Agent responsibility limited to parameter determination",
            "Clean error handling passed back to LLM",
            "Supports CRM updates, ticket creation, meeting scheduling",
        ],
        status: "production",
    },
    {
        id: "aws-infrastructure",
        name: "AWS_INFRA_SETUP",
        tagline: "Complete cloud infrastructure from scratch",
        description:
            "Designed and deployed production-ready AWS infrastructure for a SaaS platform. From container orchestration to CDN configuration.",
        impact: "Zero-downtime deployments with complete infrastructure as code",
        technologies: [
            "AWS ECS",
            "Fargate",
            "ECR",
            "ALB",
            "CloudFront",
            "S3",
            "Redis",
            "SQS",
        ],
        details: [
            { label: "Compute", value: "ECS + Fargate" },
            { label: "CDN", value: "CloudFront + Cloudflare" },
            { label: "Security", value: "Chainguard Images" },
        ],
        highlights: [
            "Frontend: S3 + CloudFront + Cloudflare",
            "Backend: ECR + ECS + Fargate + ALB",
            "Redis cluster for caching and sessions",
            "SQS queues for async processing",
            "Chainguard images for container security",
            "Secrets Manager for credential management",
        ],
        status: "production",
    },
];
