export interface CaseStudyMetric {
    value: string;
    label: string;
}

/** Production work at an employer; the code is private, so there are no links. */
export interface CaseStudy {
    id: string;
    name: string;
    /** Must match an Experience entry's company and role */
    employer: string;
    role: string;
    metric: CaseStudyMetric;
    /** Optional scale figures shown as a strip under the title */
    stats?: CaseStudyMetric[];
    problem: string;
    approach: string[];
    result: string;
    technologies: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: "wfm-report-automation",
        name: "WFM_BUILD_PLUGIN",
        employer: "Concentrix",
        role: "Software Engineer II",
        metric: { value: "1 command", label: "report briefing → packaged Azure Functions app" },
        stats: [
            { value: "17", label: "specialized agents" },
            { value: "12", label: "gated steps" },
            { value: "13", label: "deterministic gates" },
            { value: "6", label: "bypass-proof hooks" },
            { value: "24", label: "JSON-schema contracts" },
            { value: "1,900+", label: "guardrail tests" },
        ],
        problem:
            "Seven workforce-management (WFM) reports a week were produced by hand. Automating each one means turning a report briefing into tested, deployable code, and an unsupervised LLM can skip tests, send real emails, or deploy too early.",
        approach: [
            "One command (/wfm-build) drives 17 agents through Step 0 plus 12 gated steps: understand → freeze contracts → build → verify → ship",
            "Only deterministic Python gates can approve a step (PASS / SKIPPED / FAIL / HALT); the orchestrator is veto-only and can never forge a pass",
            "Bypass-proof PreToolUse hooks block out-of-order steps, writes outside a step's scope, email sends, and deploys while a build is running",
            "Test-first: generated tests must fail before any code exists; build agents then work in parallel from a frozen interface contract",
            "On-disk artifact bus with schema-validated contracts makes every run resumable and auditable",
            "Live end-to-end run with zero emails sent, reconciled against a known-good report; two human checkpoints (data mapping, email parity)",
            "Generated code held to hard limits: complexity ≤ 15 per function, no hardcoded secrets, DST-safe schedules, a full audit trail for every run",
            "Guardrail suite runs every gate and hook as a real subprocess against good and bad fixtures; OpenTelemetry tracks time and cost per step",
        ],
        result:
            "All seven weekly reports moved to AI-assisted workflows. A new report automation now goes from briefing to a tested, packaged Azure Functions app through one gated command.",
        technologies: [
            "Claude Code",
            "Claude",
            "Python",
            "Azure Functions",
            "JSON Schema",
            "pytest",
            "OpenTelemetry",
        ],
    },
    {
        id: "rag-optimization",
        name: "RAG_PIPELINE_OPTIMIZER",
        employer: "Chat Aid",
        role: "Team Lead",
        metric: { value: "60–80s → 10–15s", label: "p99 response time" },
        problem:
            "The production enterprise RAG chatbot took 60–80 seconds to answer at p99.",
        approach: [
            "Model routing by subscription plan tier",
            "Structured outputs on every LLM call",
            "Cohere + Jina reranking run in parallel",
            "Tenant-level indexing with HNSW tuning",
            "Recency bias for time-sensitive queries",
            "Configurable top-K retrieval",
        ],
        result: "p99 response time down to 10–15 seconds, at least 75% faster.",
        technologies: ["Python", "FastAPI", "Pinecone", "Qdrant", "OpenAI", "Cohere", "Jina"],
    },
    {
        id: "qdrant-zero-downtime",
        name: "QDRANT_ZERO_DOWNTIME_DEPLOY",
        employer: "Chat Aid",
        role: "Team Lead",
        metric: { value: "Zero downtime", label: "vector DB deployments" },
        problem:
            "The self-hosted vector database behind the production chatbot needed deployments without downtime.",
        approach: [
            "Qdrant on EC2 with EBS volumes",
            "SQS/S3 write buffering while instances change",
            "Health-gated cutover",
            "Instance promotion and retirement",
        ],
        result: "Vector database deployments with no downtime and a fallback at each step.",
        technologies: ["Qdrant", "AWS EC2", "EBS", "SQS", "S3"],
    },
    {
        id: "lambda-pipeline",
        name: "SERVERLESS_DOC_PROCESSOR",
        employer: "Chat Aid",
        role: "Team Lead",
        metric: { value: "7 Lambdas", label: "orchestrated by Step Functions" },
        problem:
            "Uploaded PDF, PPTX, DOCX, and XLSX files needed secure, parallel processing and chunking.",
        approach: [
            "Coordinator Lambda for validation and chunking",
            "One specialized Lambda per file type",
            "Mover and callback Lambdas for file organization and backend notification",
            "VPC isolation and API Gateway triggers",
        ],
        result: "Parallel document processing with intelligent chunking across four file types.",
        technologies: ["AWS Lambda", "Step Functions", "S3", "API Gateway", "Python", "VPC"],
    },
    {
        id: "aws-infrastructure",
        name: "AWS_INFRA_SETUP",
        employer: "Chat Aid",
        role: "Backend Lead",
        metric: { value: "From scratch", label: "full AWS environment" },
        problem:
            "The platform needed a complete AWS environment for its frontend, Node.js and Python services, caching, and queues.",
        approach: [
            "Frontend on S3 + CloudFront + Cloudflare",
            "Services on ECR + ECS Fargate behind ALBs",
            "VPC networking, IAM, Route 53, and Secrets Manager",
            "Redis caching and SQS queues",
            "CI/CD with Chainguard container images",
        ],
        result:
            "A complete environment built from scratch, with CI/CD deploying containers to ECS Fargate and the frontend to CloudFront.",
        technologies: ["AWS ECS", "Fargate", "ECR", "ALB", "CloudFront", "S3", "Redis", "SQS"],
    },
    {
        id: "agentic-actions",
        name: "AGENTIC_ACTIONS_ENGINE",
        employer: "Springworks",
        role: "Software Development Engineer I",
        metric: { value: "Deterministic", label: "agent tool calls" },
        problem:
            "Agent actions (JIRA tickets, meeting scheduling, CRM updates) ran over WebSockets and depended on the LLM deciding each tool call.",
        approach: [
            "WebSockets replaced with webhooks",
            "LLM limited to structured parameter extraction",
            "MongoDB state for resumable conversations",
            "Errors passed back to the LLM cleanly",
        ],
        result: "Deterministic tool calls that significantly improved task completion rates.",
        technologies: ["Python", "FastAPI", "PyAutoGen", "MongoDB", "OpenAI"],
    },
    {
        id: "slack-ingestion",
        name: "SLACK_DATA_PIPELINE",
        employer: "Springworks",
        role: "Software Development Engineer I",
        metric: { value: "1000+", label: "channels per workspace" },
        problem:
            "Enterprise Slack workspaces with 1000+ channels had to be ingested without hitting rate limits or mixing tenants.",
        approach: [
            "BullMQ parent queue per tenant",
            "Child queues per channel",
            "One channel per tenant at a time",
            "Retries with exponential backoff and resumable progress",
        ],
        result: "Enterprise-scale Slack workspaces ingested with tenant-channel isolation.",
        technologies: ["Node.js", "BullMQ", "Redis", "MongoDB", "Slack Bolt"],
    },
];
