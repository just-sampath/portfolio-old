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
    /** Public repo URL; omit when not applicable */
    github?: string;
    /** Live demo URL; omit when not applicable */
    demo?: string;
}

export const projects: Project[] = [
    {
        id: "rag-optimization",
        name: "RAG_PIPELINE_OPTIMIZER",
        tagline: "80s → 25-30s response time optimization",
        description:
            "Comprehensive optimization of a production RAG system serving enterprise customers. Tackled the full stack from vector database indexing to prompt engineering.",
        impact: "Reduced response times by 60%+ (80s → 25-30s); improved answer relevance via reranking and indexing",
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
        id: "recruiter-ai",
        name: "RECRUITER_AI_ATS",
        tagline: "Natural-language candidate search with hybrid RAG ranking",
        description:
            "Production-shaped ATS search stack: natural-language queries over resumes, interview transcripts, scorecards, screening answers, and recruiter comments. Three-tier routing (structured SQL → hybrid filter+vector → pure semantic), dense+sparse Qdrant with RRF fusion, then Cohere/LLM rerank with per-candidate explanations.",
        impact:
            "Turns vague recruiter language into scored, explainable shortlists—not keyword bingo",
        technologies: [
            "Bun",
            "Hono",
            "PostgreSQL",
            "Drizzle",
            "Qdrant",
            "BullMQ",
            "Redis",
            "Gemini",
            "Cohere",
            "Docker",
        ],
        details: [
            { label: "Search_Tiers", value: "SQL · Hybrid · Semantic" },
            { label: "Retrieval", value: "Dense + Sparse RRF" },
            { label: "Indexed_Docs", value: "5 source types" },
        ],
        highlights: [
            "LLM query extraction classifies strategy and hard filters (location, skills, notice, salary)",
            "Hybrid Qdrant retrieval fuses dense (Gemini 1536d) and sparse (BM42/tokenizer) via Reciprocal Rank Fusion",
            "Cross-source aggregation with configurable weights across resumes, transcripts, comments, and screening",
            "Match scores normalized to [0, 1] for consistent UI thresholds",
            "Async BullMQ indexing with idempotent chunk UUIDs and overlap-aware chunking",
            "Multi-sheet XLSX import with dependency-ordered ingest and index enqueue",
            "JWT roles, DI container, and Docker Compose for Postgres/Redis/Qdrant",
        ],
        status: "completed",
        github: "https://github.com/just-sampath/recruiter_ai",
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
        id: "azure-devops-autocreate",
        name: "ADO_WORK_ITEM_AUTOMATION",
        tagline: "User Story → five standard child Tasks, zero duplicates",
        description:
            "Azure Functions webhook that listens for Azure DevOps workitem.created. On User Story create, auto-spawns Requirements, Design, Implementation, Test, and Documentation tasks—inheriting Area Path and Iteration Path—with WIQL-based idempotency so retries never double-create.",
        impact:
            "Removes repetitive backlog hygiene from every story; safe under webhook retries and partial failures",
        technologies: [
            "Azure Functions",
            "Node.js",
            "azure-devops-node-api",
            "WIQL",
        ],
        details: [
            { label: "Trigger", value: "workitem.created webhook" },
            { label: "Tasks_Per_Story", value: "5 (SDLC template)" },
            { label: "Idempotency", value: "WIQL child title check" },
        ],
        highlights: [
            "Filters non–User Story events with clean 200 skip responses",
            "Queries Hierarchy-Forward Task children before create",
            "Creates only missing titles (case-insensitive)—retry- and re-trigger-safe",
            "Copies parent Area/Iteration paths; links via Hierarchy-Reverse",
            "Structured logging with correlation-style context for ops",
            "Deployable to Azure consumption plan with PAT / Key Vault–ready config",
        ],
        status: "completed",
        github: "https://github.com/just-sampath/azure-devops-work-item-autocreate",
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
    {
        id: "emi-calculator",
        name: "INDIAN_CC_EMI_CALCULATOR",
        tagline: "Statement-grade regular & no-cost EMI, not a toy formula",
        description:
            "React calculator that models how Indian credit-card EMI actually bills: monthly reducing balance, GST 18% on interest, processing fee + GST, pro-rata first period (30-day or actual/365), no-cost merchant discount via PV of installments, full amortization, and month-by-month pre-closure cost.",
        impact:
            "Surfaces true total cost above MRP—including the “no-cost” interest GST customers still pay",
        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Vitest",
            "Testing Library",
            "GitHub Actions",
        ],
        details: [
            { label: "Modes", value: "Regular + No-cost EMI" },
            { label: "Day_Count", value: "30/360 · Actual/365" },
            { label: "Extras", value: "Pre-closure + GST audit" },
        ],
        highlights: [
            "No-cost: base EMIs sum to MRP; principal = PV of payments; merchant discount = MRP − principal",
            "Statement-perfect month-1 interest using booking→PDD day count",
            "GST on billed (rounded-to-paise) interest every period",
            "Pre-closure simulator: fee, residual interest months, optional merchant clawback",
            "Independent math-audit script for bank-style identities beyond unit tests",
            "CI pipeline: test → build → deploy to GitHub Pages",
        ],
        status: "completed",
        github: "https://github.com/just-sampath/indian-credit-card-emi-calculator",
        demo: "https://just-sampath.github.io/indian-credit-card-emi-calculator/",
    },
];
