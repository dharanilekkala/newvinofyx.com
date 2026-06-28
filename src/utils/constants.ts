export const NAV_ITEMS = [
  { label: "Home",      href: "#hero" },
  { label: "Company",   href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "AI Lab",    href: "#ai-lab" },
  { label: "Contact",   href: "#contact" },
];

export const HERO_STATS = [
  { value: "∞",    label: "Industries" },
  { value: "5+",   label: "Clients" },
  { value: "98%",  label: "Satisfaction" },
];

export const SOLUTIONS = [
  { id: "ai",            title: "AI Solutions",            description: "Custom AI agents, intelligent automation, ML models, and AI-powered business tools that transform operations.",                            icon: "Brain" },
  { id: "software",      title: "Software Development",    description: "Enterprise applications, SaaS platforms, APIs, and full-stack solutions built for scale and reliability.",                                  icon: "Code2" },
  { id: "data",          title: "Data Engineering",        description: "Data pipelines, warehousing, analytics platforms, and business intelligence for data-driven decisions.",                                    icon: "Database" },
  { id: "consulting",    title: "Business Consulting",     description: "Strategic advisory, process optimization, digital transformation roadmaps, and execution support.",                                          icon: "Briefcase" },
  { id: "institutional", title: "Institutional Solutions", description: "Tailored solutions for universities, government bodies, hospitals, and public sector organizations.",                                       icon: "Building2" },
  { id: "mobile",        title: "Mobile Development",      description: "Cross-platform and native iOS/Android applications with enterprise-grade performance and UX.",                                               icon: "Smartphone" },
  { id: "cloud",         title: "Cloud Infrastructure",    description: "Cloud architecture, DevOps, CI/CD pipelines, and infrastructure management at scale.",                                                      icon: "Cloud" },
  { id: "cybersecurity", title: "Cybersecurity",           description: "Security audits, penetration testing, compliance frameworks, and enterprise security architecture.",                                        icon: "ShieldCheck" },
  { id: "ecommerce",     title: "E-Commerce Solutions",    description: "End-to-end e-commerce platforms, marketplace development, and high-converting digital storefronts.",                                        icon: "ShoppingCart" },
  { id: "erp",           title: "ERP & CRM Systems",       description: "Custom ERP, CRM, and enterprise management systems tailored to complex business workflows.",                                                icon: "Settings2" },
  { id: "edtech",        title: "EdTech Solutions",        description: "E-learning platforms, LMS systems, virtual classrooms, and next-generation educational technology.",                                        icon: "GraduationCap" },
  { id: "fintech",       title: "FinTech Solutions",       description: "Payment systems, financial analytics, trading platforms, and regulatory compliance technology.",                                             icon: "Landmark" },
];

export const INDUSTRIES = [
  { name: "Healthcare",           icon: "Heart" },
  { name: "Finance & Banking",    icon: "Landmark" },
  { name: "Education",            icon: "GraduationCap" },
  { name: "Government",           icon: "Building" },
  { name: "Retail & E-Commerce",  icon: "ShoppingBag" },
  { name: "Manufacturing",        icon: "Factory" },
  { name: "Real Estate",          icon: "Home" },
  { name: "Logistics & Supply",   icon: "Truck" },
  { name: "Media & Entertainment",icon: "Film" },
  { name: "Hospitality",          icon: "Hotel" },
  { name: "Agriculture & FoodTech",icon: "Leaf" },
  { name: "Legal & Compliance",   icon: "Scale" },
  { name: "Technology & SaaS",    icon: "Cpu" },
  { name: "Energy & Utilities",   icon: "Zap" },
  { name: "Telecommunications",   icon: "Wifi" },
  { name: "Startups & SMEs",      icon: "Rocket" },
];

export const AI_CAPABILITIES = [
  {
    id: "agents",
    title: "AI Agents",
    description: "Autonomous AI agents that execute multi-step tasks, manage complex workflows, and make intelligent decisions without human intervention.",
    features: ["Task Automation", "Natural Language Understanding", "Multi-step Reasoning", "Agent Coordination"],
  },
  {
    id: "conversational",
    title: "Conversational AI",
    description: "Enterprise chatbots and voice assistants fine-tuned on your business data for accurate, context-aware interactions across all channels.",
    features: ["Custom LLM Fine-tuning", "Multi-language Support", "Voice & Text", "CRM Integration"],
  },
  {
    id: "vision",
    title: "Computer Vision",
    description: "Visual AI systems for quality control, document processing, surveillance analytics, and real-time video understanding.",
    features: ["Object Detection", "OCR & Document AI", "Video Analytics", "Medical Imaging"],
  },
  {
    id: "predictive",
    title: "Predictive Analytics",
    description: "Machine learning models that forecast demand, detect anomalies, predict churn, and optimize business outcomes at scale.",
    features: ["Demand Forecasting", "Risk Modeling", "Churn Prediction", "Revenue Optimization"],
  },
];

export const CASE_STUDIES = [
  {
    industry: "Healthcare",
    title: "AI Diagnostics Platform",
    client: "Multi-Specialty Hospital Group",
    description: "Built an AI-powered diagnostic assistant that analyzes patient data and medical imaging to support clinical decision-making across 12 hospital branches.",
    results: ["40% reduction in diagnostic turnaround time", "92% accuracy rate on imaging analysis", "Deployed across 12 facilities in 6 months"],
    tags: ["AI", "Healthcare", "Machine Learning"],
  },
  {
    industry: "FinTech",
    title: "Fraud Detection Engine",
    client: "Regional Banking Institution",
    description: "Developed a real-time ML-based fraud detection system that monitors transactions across millions of accounts and flags anomalies within milliseconds.",
    results: ["78% reduction in fraudulent transactions", "Processing 2M+ transactions daily", "99.97% uptime since deployment"],
    tags: ["FinTech", "ML", "Real-time"],
  },
  {
    industry: "EdTech",
    title: "Adaptive Learning Platform",
    client: "National University Network",
    description: "Designed and deployed an AI-driven e-learning platform with personalized learning paths for 50,000+ students across 8 universities.",
    results: ["35% improvement in student outcomes", "50,000+ active learners onboarded", "Reduced course completion time by 28%"],
    tags: ["EdTech", "AI", "Personalization"],
  },
  {
    industry: "E-Commerce",
    title: "Enterprise Commerce Scaling",
    client: "D2C Retail Brand",
    description: "Re-architected a D2C e-commerce platform to handle 10x traffic spikes during peak sales, integrated AI-driven product recommendations and automated inventory management.",
    results: ["10x traffic capacity increase", "23% uplift in average order value", "99.9% uptime during peak sales"],
    tags: ["E-Commerce", "AI", "Scale"],
  },
];

export const GLOBAL_STATS = [
  { value: "3",   label: "Continents" },
  { value: "10+", label: "Countries" },
  { value: "5+",  label: "Enterprise Clients" },
];

export const CONTACT_INFO = {
  email: "info@vinofyx.com",
  phone: "+91 93919 34534",
  whatsapp: "https://wa.me/919391934534",
  address: "VINOFYX PRIVATE LIMITED, India",
};

export const FOOTER_LINKS = {
  company: [
    { label: "About Us",   href: "#about" },
    { label: "Leadership", href: "#about" },
    { label: "Careers",    href: "#contact" },
  ],
  solutions: [
    { label: "AI Solutions",     href: "#solutions" },
    { label: "Software Dev",     href: "#solutions" },
    { label: "Data Engineering", href: "#solutions" },
    { label: "Business Consulting",href: "#solutions" },
  ],
  industries: [
    { label: "Healthcare",  href: "#solutions" },
    { label: "FinTech",     href: "#solutions" },
    { label: "Education",   href: "#solutions" },
    { label: "Government",  href: "#solutions" },
  ],
};
