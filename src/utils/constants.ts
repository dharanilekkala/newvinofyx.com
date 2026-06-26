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
  { id: "marketing",     title: "Digital Marketing",       description: "Performance marketing, SEO, content strategy, paid media, and growth engineering that delivers ROI.",                                       icon: "TrendingUp" },
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
    client: "Leading Healthcare Group",
    industry: "Healthcare",
    title: "AI-Powered Patient Management System",
    description: "Deployed an intelligent patient scheduling and triage system that dramatically reduced wait times and improved care delivery quality.",
    results: ["60% reduction in wait times", "40% increase in patient throughput", "98% triage accuracy"],
    tags: ["AI", "Healthcare", "Automation"],
  },
  {
    client: "Regional Banking Institution",
    industry: "FinTech",
    title: "Real-Time Fraud Detection Engine",
    description: "Built an ML fraud detection system screening 2M+ daily transactions with sub-100ms latency, protecting assets at enterprise scale.",
    results: ["99.2% fraud detection accuracy", "80% reduction in false positives", "$2.4M annual savings"],
    tags: ["Machine Learning", "FinTech", "Real-time"],
  },
  {
    client: "State University Consortium",
    industry: "EdTech",
    title: "Smart Learning Management Platform",
    description: "Developed a comprehensive AI-powered LMS serving 50,000+ students across multiple campuses with personalized learning paths.",
    results: ["50,000+ active learners", "35% improvement in completion rates", "95% student satisfaction"],
    tags: ["EdTech", "AI", "Scale"],
  },
  {
    client: "E-Commerce Market Leader",
    industry: "Retail",
    title: "ML Personalization Engine",
    description: "Implemented an ML-powered recommendation system delivering hyper-personalized experiences that directly improved revenue metrics.",
    results: ["45% revenue increase per user", "3× conversion rate improvement", "2M+ products catalogued"],
    tags: ["E-Commerce", "ML", "Personalization"],
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
    { label: "Press",      href: "#contact" },
  ],
  solutions: [
    { label: "AI Solutions",     href: "#solutions" },
    { label: "Software Dev",     href: "#solutions" },
    { label: "Data Engineering", href: "#solutions" },
    { label: "Digital Marketing",href: "#solutions" },
  ],
  industries: [
    { label: "Healthcare",  href: "#solutions" },
    { label: "FinTech",     href: "#solutions" },
    { label: "Education",   href: "#solutions" },
    { label: "Government",  href: "#solutions" },
  ],
};
