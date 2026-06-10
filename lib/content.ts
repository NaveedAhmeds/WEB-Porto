// =============================================================
//  CONTENT — single source of truth for the whole site.
//  Edit copy here; components stay untouched.
//  Lines marked  // TODO  are placeholders to fill in.
// =============================================================

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "open-source", label: "Open Source" },
  { id: "leadership", label: "Leadership" },
  { id: "interests", label: "Interests" },
];

export const profile = {
  name: "NAVEED AHMED SYED",
  shortName: "Naveed Ahmed Syed",
  role: "AI, ML & Software Security Engineer",
};

export const hero = {
  headline: "NAVEED AHMED SYED",
  statement:
    "Building intelligent systems through software engineering, artificial intelligence, machine learning, computer vision, and secured backend infrastructure.",
  subStatement:
    "Exploring how modern systems learn, reason, scale, and stay secure as AI becomes core infrastructure.",
  cta: { label: "View Research", href: "#research" },
};

// ---- Now (Current Focus + Recently Exploring) — update every few months ----
export const now = {
  updated: "June 2026",
  focus: [
    "The future of secure financial systems",
    "Reliability and recovery in agentic AI",
    "Memory, context, and reasoning in language models",
    "Security boundaries in AI-powered applications",
  ],
  exploring: [
    "Anthropic research on model welfare",
    "Context engineering patterns",
    "MCP ecosystem growth",
    "Agentic system security",
    "Multi-agent orchestration",
  ],
};

export const about = {
  body: [
    "I work at the intersection of software engineering and machine intelligence designing systems that reason about data, hold up under load, and defend themselves.",
    "My focus is moving toward application and AI security, as models become decision making infrastructure, the attack surface stops being abstract. I care about backend systems that are correct, observable, and hard to break.",
    "Most of what I publish here is working notes and things I am actively reading, building, and arguing with myself about.",
  ],
  figure: "Systems & security",
};

// ---- Research & Notes : the differentiator ----
// Each note opens a modal with a personal take + optional source/video.
// Replace the "#" source/video URLs with real links when you have them.
export type ResearchNote = {
  category: string;
  date: string;
  title: string;
  insight: string;
  take: string;
  source?: { label: string; url: string };
  video?: { label: string; url: string };
};

export const researchNotes: ResearchNote[] = [
  {
    category: "Reasoning",
    date: "2026.02",
    title: "Why LLMs struggle with reverse reasoning",
    insight:
      "Autoregressive training optimizes for forward continuation, so models are far better at A→B than at recovering A from B.",
    take:
      "The question isn't whether the model can reverse a relationship, it's whether it ever learned the relationship in the first place. We train these models to predict forward, so the reverse direction is genuinely out-of-distribution. The fix is usually not a bigger model; it's restructuring the prompt so the hard direction becomes a forward one.",
    source: { label: "The Reversal Curse (Cornell University)", url: "https://arxiv.org/abs/2309.12288" }, // TODO
  },
  {
    category: "Agents",
    date: "2026.02",
    title: "The rise of agentic AI",
    insight:
      "The interesting shift isn't tool use, it's planning under uncertainty across many steps.",
    take:
      "The hype is on autonomy; the engineering reality is failure handling. I care less about how many tools an agent can call and more about what happens on step 7 when step 3 was wrong. Bounded blast radius and good state recovery are what separate a demo from something you'd actually run.",
    source: { label: "Source", url: "https://www.recordedfuture.com/research/emerging-enterprise-security-risks-of-ai" }, // TODO
  },
  {
    category: "Security",
    date: "2026.01",
    title: "Security challenges in autonomous systems",
    insight:
      "Once a system can act, every input is potentially an instruction.",
    take:
      "The problem isn't prompt injection rather the problem is authority. Once a system can take actions, 'who is allowed to do this?' applies to the model's outputs, not just the user. I treat every model output that triggers an action as untrusted input crossing a privilege boundary it was never authorized to cross.",
    source: { label: "Source", url: "https://cispa.de/en/research/publications/84772-cybersecurity-challenges-of-autonomous-systems" }, // TODO
  },
  {
    category: "AppSec",
    date: "2026.01",
    title: "Application security in AI systems",
    insight:
      "Classic AppSec assumptions break when the 'logic' is a model, but input validation and least privilege still apply.",
    take:
      "Traditional AppSec assumes the software is deterministic & AI breaks that assumption. The most underrated risk is still the boring one: model output flowing into a shell, a query, or a downstream call without validation. Output encoding and least privilege never went away; they just have a new source of untrusted data.",
    source: { label: "Cisco's take & Top 10 OWASP for LLMs", url: "https://www.cisco.com/site/us/en/learn/topics/artificial-intelligence/ai-application-security.html" }, // TODO
  },
  {
    category: "Architecture",
    date: "2025.12",
    title: "The future of multi-agent architectures",
    insight:
      "Coordination cost grows faster than capability.",
    take:
      "I'm skeptical of most multi-agent demos and a lot of the 'collaboration' is just decomposition you could have scripted. The genuinely hard, interesting problem is shared, consistent state across agents, and almost nobody has that solved.",
    source: { label: "IBM Research", url: "https://www.ibm.com/think/news/clawdbot-ai-agent-testing-limits-vertical-integration" }, // TODO
  },
  {
    category: "Vision",
    date: "2025.12",
    title: "Computer vision beyond object detection",
    insight:
      "Detection is solved enough to be boring. The frontier is spatial reasoning and scene understanding.",
    take:
      "Bounding boxes feel solved to me, both Neural Pilot and the smile pipeline lived in that world. What I find interesting now is whether a model understands the scene: relationships, intent, what happens next & not whether it can localize a cat.",
    source: { label: "National Library of Medicine", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12932818/" }, // TODO
  },
  {
    category: "Memory",
    date: "2025.11",
    title: "Memory limitations in large language models",
    insight:
      "Context windows are not memory. They're a working set with no consolidation and no forgetting policy.",
    take:
      "Calling the context window 'memory' bothers me. Real memory needs a forgetting policy and consolidation. I think durable agent memory is mostly an information retrieval problem we already know how to build for retrieval, ranking and eviction and not a scaling one.",
    source: { label: "Microsoft Tech Community", url: "https://techcommunity.microsoft.com/blog/educatordeveloperblog/the-hidden-memory-architecture-of-llms/4485367" }, // TODO
  },
  {
    category: "Retrieval",
    date: "2025.11",
    title: "Retrieval-augmented generation, in practice",
    insight:
      "Most RAG failures are retrieval failures wearing a generation costume.",
    take:
      "Every time RAG 'doesn't work,' I find the retriever & not the generator is the culprit. Better chunking and a reranker beat swapping the base model nine times out of ten. RAG is an IR problem with a language model bolted on the end.",
    source: { label: "Salesforce Research", url: "https://www.salesforce.com/agentforce/resources/prompt-builder-guide/" }, // TODO
  },
  {
    category: "Context",
    date: "2025.10",
    title: "Model context engineering",
    insight:
      "What you put in the window, in what order, with what framing, is now a first-class design surface.",
    take:
      "I've started treating the context window like a database schema: what goes in, in what order, with what framing. It's the highest-leverage knob in most LLM apps and the least respected one.",
    source: { label: "Anthropic", url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" }, // TODO
  },
];

// ---- Areas of Interest (with a personal "why") ----
export type Interest = {
  index: string;
  title: string;
  blurb: string;
  why: string; // why it resonates with me
};

export const interests: Interest[] = [
  {
    index: "01",
    title: "Artificial Intelligence",
    blurb: "Systems that reason, plan, and act and where their reasoning quietly breaks.",
    why: "The failure modes fascinate me more than the wins, that's where the real engineering is.",
  },
  {
    index: "02",
    title: "Machine Learning",
    blurb: "Training dynamics, generalization, and the gap between benchmark and behavior.",
    why: "I like seeing why a model generalizes or doesn't, not just that it scored well.",
  },
  {
    index: "03",
    title: "Computer Vision",
    blurb: "Spatial and scene understanding past the object-detection plateau.",
    why: "My entry point into ML & Neural Pilot and the smile pipeline both started here.",
  },
  {
    index: "04",
    title: "Cybersecurity",
    blurb: "Threat modeling, trust boundaries, and the economics of breaking systems.",
    why: "Where I'm heading. Breaking and defending systems is the most honest test of understanding them.",
  },
  {
    index: "05",
    title: "Application Security",
    blurb: "Securing the software layer, including the new surface that models introduce.",
    why: "The overlap of my security interest and the systems I actually build.",
  },
  {
    index: "06",
    title: "AI Engineering",
    blurb: "Turning models into reliable, observable, production-grade systems.",
    why: "Getting a notebook to survive production is the part I enjoy most.",
  },
  {
    index: "07",
    title: "Backend Systems",
    blurb: "Correct, fast, and observable services that fail in predictable ways.",
    why: "Where I reach for Go for small, fast, predictable services are deeply satisfying to build.",
  },
  {
    index: "08",
    title: "Distributed Systems",
    blurb: "Consistency, coordination, and what actually happens at the edges.",
    why: "The hard problems live here; I'm picking up Rust partly to get closer to them.",
  },
];

// ---- Selected Projects ----
export type Project = {
  index: string;
  title: string;
  category: string; // group header
  domain: string; // mono sub-tag
  tagline: string;
  problem: string;
  approach: string;
  impact: string;
  tech: string[];
  figure: string;
  image?: string; 
  demo?: string;
  repo?: string;
};

export const projectCategories = [
  "AI / Machine Learning",
  "Security & Application Security",
  "Cloud & Backend Systems",
  "Autonomous Systems & Robotics",
];

export const projects: Project[] = [
  {
    index: "01",
    title: "Zeus",
    image: "/grid_stress.png",
    category: "AI / Machine Learning",
    domain: "Systems · ML · Geospatial",
    tagline:
      "A neighbourhood-level, 5-year forecast of where EV charging demand will overload Ontario's grid.",
    problem:
      "Ontario EV adoption is outpacing utility planning. Feeders built for a different load profile face evening peak overload, and upgrades already run 30–60% of charging-project cost in constrained areas and yet utilities discover constraints only after interconnection filings, forcing reactive capital spend.",
    approach:
      "A three-stage engine: per FSA adoption forecasting (XGBoost + ARIMA over MTO and StatCan data), a physics based model translating EV counts to peak kW, and a GeoPandas spatial join mapping demand onto feeder boundaries. Macro shock multipliers and sustained gas price, sub-$35K vehicle entry which overlay the forecast through live scenario sliders.",
    impact:
      "Produces a feeder risk register with projected overload dates through 2031. Under combined macro shocks the model moves feeders crossing critical capacity from 3 to 11+, and the managed-charging module quantifies $180M+ in deferrable upgrade capital and formatted as evidence for OEB filings.",
    tech: ["Next.js", "FastAPI", "Python", "XGBoost", "ARIMA", "GeoPandas", "DuckDB", "PuLP"],
    figure: "Feeder stress map",
    demo: "https://zeus-grid.vercel.app", // TODO — live URL
    repo: "https://github.com/Apex-Ascension-Protocol/zeus", // TODO — source URL
  },
  {
    index: "02",
    title: "Neural Pilot Cloning",
    category: "AI / Machine Learning",
    image: "/pipe.png",
    domain: "Deep Learning · Computer Vision",
    tagline:
      "An end-to-end autonomous-steering model that maps raw camera pixels straight to steering angle.",
    problem:
      "Drive a simulated car from a front-facing camera with no handcrafted features or lane heuristics and avoid the trivial 'always steer straight' solution a naive dataset collapses into.",
    approach:
      "Behavioral cloning on human driving logs through a PilotNet-style CNN (five strided conv layers into a compact control head, ~250k params). Frames are cropped to the road ROI, resized to 66×200, and converted to YUV; a dynamic augmentation generator adds flips, brightness, and geometric shifts with corrected steering labels to synthesize recovery.",
    impact:
      "Stable closed-loop autonomous driving on both training and unseen validation tracks, served through a Flask + Socket.IO loop streaming frames and returning steering per timestep over 20,000+ augmented samples per epoch.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "Socket.IO"],
    figure: "PilotNet inference loop",
    repo: "https://github.com/NaveedAhmeds/Neural-Pilot-Cloning",
  },
  {
    index: "03",
    title: "Real-time Smile Detection",
    category: "AI / Machine Learning",
    image: "/smile.png",
    domain: "Computer Vision",
    tagline:
      "A low latency CV pipeline that detects smiles from a live webcam feed and self curates a labeled dataset.",
    problem:
      "Run face and smile detection in real time with few false positives, while accumulating a labeled set of positive samples for downstream ML.",
    approach:
      "A cascade pipeline: grayscale conversion, Haar face localization, then a smile cascade constrained to each detected face ROI to cut noise. Positives are logged to disk with microsecond timestamps, building a dataset alongside a real-time overlay.",
    impact:
      "A real-time labeled feed plus a growing positive sample corpus that can train a learned classifier or benchmark against the cascade baseline.",
    tech: ["Python", "OpenCV", "Haar cascades", "NumPy"],
    figure: "CV pipeline",
    repo: "https://github.com/NaveedAhmeds/Realtime-ml-smile-detector", // TODO
  },
  {
    index: "04",
    title: "Vital Box",
    category: "Security & Application Security",
    image: "/vi.png",
    domain: "Application Security · Full-Stack",
    tagline:
      "An AI health guidance app, re-engineered defensively, closing a live rate-limit bypass and a NoSQL injection vector.",
    problem:
      "Vital Box authenticates users and handles biometric data plus an AI advisor, so it needs real defenses but the per-route rate limiter was effectively a no-op: 490+ requests slipped through because in-memory Maps inside serverless handlers reset on every cold start. User input also reached MongoDB without operator sanitization, leaving a NoSQL injection vector open.",
    approach:
      "Moved rate limiting into long lived Edge middleware that runs before any serverless function, so the counter actually persists per region (route-level limiter kept as a fallback). Rewrote sanitization: assertSafeFields / assertSafeObject reject object and array payloads carrying operators like $gt and $where. Hardened signup with strict email and password rules mirrored server-side, bcrypt hashing, and dual-token JWT in httpOnly cookies with server-side role checks.",
    impact:
      "Closed the rate-limit bypass (490+ unthrottled requests now enforced at the edge), eliminated the NoSQL injection vector, and brought auth to httpOnly-cookie JWT with server-side revalidation and API keys held server-side.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Edge Middleware", "JWT", "bcrypt", "Google Generative AI"],
    figure: "Auth & rate-limit flow",
    demo: "https://vital-box.vercel.app",
    repo: "https://github.com/GauravVedak/Vital-Box", // TODO
  },
  {
    index: "05",
    title: "Fragments Microservices",
    category: "Cloud & Backend Systems",
    image: "/frag.png",
    domain: "Cloud Backend · Access Control",
    tagline:
      "A cloud-native microservice for storing and serving user content, with authentication and least-privilege access at the core.",
    problem:
      "Let authenticated users run CRUD on mixed content (text, JSON, images) over a service that scales, keeps every request authorized, and separates metadata from binary storage cleanly.",
    approach:
      "An Express service fronted by Amazon Cognito for authN/authZ, with metadata in DynamoDB and binary content in S3. Containerized with Docker, exercised against LocalStack, and shipped through GitHub Actions with structured Pino logging and a Jest/Supertest/Hurl suite.",
    impact:
      "A reproducible, test-covered backend where access control is enforced at the edge and storage is split by data type and a clean template for secure, scalable content services.",
    tech: ["Node.js", "Express", "Amazon Cognito", "DynamoDB", "Amazon S3", "Docker", "GitHub Actions", "Jest"],
    figure: "Service architecture",
    repo: "https://github.com/NaveedAhmeds/Fragments", // TODO — confirm repo + your role (team project)
  },
  {
    index: "06",
    title: "VEX Labyrinth Navigator",
    category: "Autonomous Systems & Robotics",
    image: "/vex.png",
    domain: "Robotics · Control",
    tagline:
      "An autonomous VEX robot that explores an unknown maze, finds a line path, and follows it out while logging telemetry the whole way.",
    problem:
      "Escape a labyrinth with no preloaded map: detect obstacles, locate a line path, and switch to line-following consistently, regardless of battery voltage.",
    approach:
      "Programmed in RobotC with geometry-based motion (cm/deg converted to encoder ticks from a central calibration block) instead of timed moves, so behavior holds as voltage drops. Hardware config is separated from path-planning logic, with a high-priority emergency-stop task running concurrently.",
    impact:
      "Reliable multi-sensor autonomous navigation with live telemetry with distance, speed, sensor data all streamed to the debug console. Built for an Advanced Robotics Lab challenge.",
    tech: ["RobotC", "VEX Cortex", "Encoders", "Sonar", "Line Sensors"],
    figure: "Maze navigation path",
    repo: "https://youtu.be/E-EFalngo0s?si=AS2BxAGPCL0ks0jp", // TODO
  },
];

// ---- Leadership & Hackathons ----
export type Leadership = {
  period: string;
  type: string;
  tag?: string;
  title: string;
  image: string;
  org: string;
  body: string;
  figure: string;
};

export const leadership: Leadership[] = [
  {
    period: "2026",
    type: "Hackathon",
    tag: "Finalist",
    title: "Seneca Energy Hackathon",
    image: "/sii.png",
    org: "Seneca Polytechnic",
    body: "Reached the finals with an energy-systems build under deadline, fast scoping and hard technical calls on an Ontario EV-grid problem, the same space Zeus explores.",
    figure: "Energy hackathon",
  },
  {
    period: "Nov 2024",
    type: "Hackathon",
    title: "Google Developer Hackathon",
    image: "/g.png",
    org: "Major League Hacking · University of Guelph",
    body: "Built and shipped a working prototype with a small team under a tight deadline, fast scoping, dividing the build, and making technical calls under time pressure at an MLH-sanctioned event.",
    figure: "Hackathon build",
  },
  {
    period: "2025",
    type: "Conference",
    title: "AWS Summit",
    image: "/aws.jpg",
    org: "Amazon Web Services · Toronto",
    body: "Sessions on cloud architecture, managed ML services, and security by staying close to how production cloud systems are actually built and secured.",
    figure: "Cloud summit",
  },
  {
    period: "2026",
    type: "Community",
    title: "Toronto Tech Week",
    image: "/yy.webp",
    org: "Toronto",
    body: "Engaged with the city's startup, AI, and security community with talks and conversations on where applied AI and engineering are heading next.",
    figure: "Tech community",
  },
];

// ---- Open Source Contributions ----
export type Contribution = {
  name: string;
  role: string;
  summary: string;
  tech?: string[];
  demo?: string;
  repo?: string;
  tag?: string;
};

export const contributions: Contribution[] = [
  {
    name: "Microsoft VS Code",
    role: "Open-source contributor",
    tag: "Open Source",
    summary:
      "Contributed to Microsoft's VS Code, one of the most widely used open-source developer tools in the world.",
    tech: ["TypeScript"],
    repo: "https://github.com/microsoft/vscode", // TODO — link your specific PR / issue
  },
  {
    name: "Scriptorium",
    role: "Frontend & Backend",
    summary:
      "A 3D themed digital 'room' where users collect and reflect on books, music, movies, and podcasts with reflections, goal tracking, daily streaks, and rewards. JWT auth with email verification and secure routes; 3D rooms built in Three.js and Blender. I worked across both the frontend and the backend.",
    tech: ["Node.js", "Express", "EJS", "Three.js", "Tailwind", "JWT"],
    demo: "https://scriptorium-frontend.vercel.app/",
    repo: "https://github.com/Nerdy-Babushkas/scriptorium-frontend", // TODO
  },
  {
    name: "QueueTech",
    role: "Contributor",
    summary:
      "A platform showing real-time wait queues for Ontario emergency rooms, walk-in clinics, and specialty services, so patients can pick the right facility before leaving home, easing misrouting, overcrowding, and staff burnout.",
    tech: ["No Repo link yet, due to signed NDA's"],
  },
];

export const footer = {
  tagline: "Building intelligent, secure systems.",
  links: [
    { label: "GitHub", href: "https://github.com/NaveedAhmeds" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/naveed-ahmed-syed-17862132a/" },
    { label: "Email", href: "mailto:syednaveed2006@gmail.com" }, // TODO
  ],
};
