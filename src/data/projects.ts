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
        id: "adaptive-deterministic-rag",
        name: "ADAPTIVE_DETERMINISTIC_RAG",
        tagline: "Multi-tenant RAG backend where code, not the model, owns every decision",
        description:
            "Async FastAPI backend for bounded, multi-tenant retrieval-augmented generation. Hybrid dense + BM25 search over Qdrant, MongoDB-checked authorization, Cohere reranking, and grounded generation with parallel faithfulness and completeness checks. Models return schema-validated suggestions; Python owns retries, security filters, budgets, and terminal states.",
        impact:
            "Every answer ends as COMPLETE, VERIFIED_PARTIAL, or INSUFFICIENT_EVIDENCE—never an unchecked guess",
        technologies: [
            "Python",
            "FastAPI",
            "Qdrant",
            "MongoDB",
            "OpenAI",
            "Cohere",
            "BM25",
            "pytest",
            "mypy",
            "Docker",
        ],
        details: [
            { label: "Search_Tries", value: "4 bounded strategies" },
            { label: "Retrieval", value: "Dense + BM25 fusion" },
            { label: "Test_Coverage", value: "98%" },
        ],
        highlights: [
            "Dense and BM25 sparse search in Qdrant with rank fusion, then Cohere reranking",
            "Mandatory tenant, role, and active-version filters in Qdrant; MongoDB re-checks tenant, ACL, deletion state, and current version before content reaches a prompt",
            "Four finite search tries: happy path, recall expansion, query recovery, and context isolation",
            "Parallel faithfulness and completeness evaluation, with at most one generation repair",
            "Follow-up detection rewrites only ambiguous turns; citations point only at verified sources",
            "Request events and detailed RAG traces stored in MongoDB",
            "CI runs ruff, mypy, and pytest (98% coverage)",
        ],
        status: "completed",
        github: "https://github.com/just-sampath/adaptive-deterministic-rag",
    },
    {
        id: "ats-resume-maker",
        name: "ATS_RESUME_MAKER",
        tagline: "AI agent skill + CLI that tailors résumés without inventing facts",
        description:
            "An agent skill plus an optional Python CLI for building and tailoring ATS-oriented résumés. The skill guides job-description-specific edits using only true experience; the CLI parses a canonical Markdown dialect, validates it, renders a real PDF through HTML/CSS and WeasyPrint, and checks the result through four gates.",
        impact:
            "Catches malformed or unparseable résumés before you hit submit; factual edits must cite evidence",
        technologies: [
            "Python",
            "Agent Skills",
            "WeasyPrint",
            "Jinja2",
            "pytest",
            "GitHub Actions",
        ],
        details: [
            { label: "Gates", value: "Markdown · Diff · PDF · Visual" },
            { label: "Renderer", value: "HTML/CSS → WeasyPrint" },
            { label: "Facts", value: "Evidence required" },
        ],
        highlights: [
            "Canonical Markdown dialect gives agents and tools one stable résumé structure",
            "Gate A validates Markdown structure and content",
            "Gate B diffs the tailored résumé against a change manifest; factual adds and updates need evidence",
            "Gate C checks PDF page count, full content inventory, and link annotations",
            "Gate D renders page PNGs for an explicit visual review",
            "Direct PDF via HTML/CSS → WeasyPrint, no DOCX or LibreOffice",
            "CI runs the test suite and builds a fixture résumé end to end",
        ],
        status: "completed",
        github: "https://github.com/just-sampath/ats-resume-maker",
    },
    {
        id: "leetcode-ai-coach",
        name: "LEETCODE_AI_COACH",
        tagline: "Chrome extension that coaches you through LeetCode without handing over the answer",
        description:
            "Manifest V3 Chrome extension that adds an AI coaching panel to LeetCode problems. Bring your own key for OpenAI, Anthropic, Gemini, Portkey, or any OpenAI-compatible endpoint; the coach reads the problem and your editor code to give overviews, hints, debugging help, and code reviews.",
        impact:
            "Keeps the learning with the user—full solutions are withheld unless explicitly asked for",
        technologies: [
            "JavaScript",
            "Chrome Extensions (MV3)",
            "OpenAI",
            "Anthropic",
            "Gemini",
            "Portkey",
        ],
        details: [
            { label: "Providers", value: "OpenAI · Anthropic · Gemini · Portkey · Custom" },
            { label: "Modes", value: "Overview · Hints · Debug · Review" },
            { label: "Keys", value: "BYOK, stored locally" },
        ],
        highlights: [
            "Provider factory with one adapter per LLM provider, including any OpenAI-compatible endpoint",
            "Reasoning-effort setting mapped to provider parameters such as Anthropic's extended-thinking budget",
            "Socratic or progressive hints, with follow-up questions in the same thread",
            "Monaco editor bridge reads the current code for debugging and review",
            "Custom persona instructions (e.g. \"be a strict interviewer\")",
            "API keys stay in browser storage; code goes only to the chosen provider",
        ],
        status: "completed",
        github: "https://github.com/just-sampath/leetcode-guider",
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
];
