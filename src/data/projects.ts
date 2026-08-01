export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  context: string;
  strategy: string;
  execution: string[];
  impact: string;
  metrics: {
    value: string;
    label: string;
    variant?: "positive" | "negative" | "neutral";
  }[];
}

export const projects: Project[] = [
  {
    slug: "atoma",
    title: "Atoma — India's Salon at Home",
    category: "Flagship Brand",
    description:
      "A hyperlocal beauty & wellness platform bringing trusted salon professionals directly to customers' homes under a worker-first model.",
    context:
      "Launched in Gandhinagar and Ahmedabad, Atoma is expanding rapidly with the goal of reaching 100+ cities. The venture addresses the high-churn gig economy by offering a dignified, secure, and long-term career path for service professionals.",
    strategy:
      "Create a worker-first ecosystem: instead of gig-economy exploitation, build loyalty and exceptional customer service by securing health coverage, accidental protection, and earnings growth pathways for all service professionals.",
    execution: [
      "0% commission model from service providers, maximizing partner earnings",
      "Insurance protection from Day 1 for all service partners",
      "Comprehensive health & accidental coverage",
      "Structured skill empowerment and earning growth pathways",
      "Dignified, respected, long-term work replacing traditional gig-economy models",
      "Hyperlocal density play in key cities of Gujarat, expanding to 50+ cities pan-India",
    ],
    impact:
      "Atoma is redefining beauty & wellness services in India by proving that a worker-first model leads to higher customer retention, consistent service quality, and lower partner churn.",
    metrics: [
      { value: "0%", label: "Partner Commission", variant: "positive" },
      { value: "Day 1", label: "Insurance Protection", variant: "positive" },
      { value: "50+", label: "Target Cities", variant: "neutral" },
    ],
  },
  {
    slug: "cuatro-labs",
    title: "Cuatro Labs",
    category: "Parent Group & Distribution",
    description:
      "India's exclusive gateway for world-class international beauty brands — managing end-to-end distribution, CDSCO compliance, warehousing, logistics, and retail partnerships.",
    context:
      "Founded in June 2025, Cuatro Labs manages direct importing, CDSCO regulatory clearances, warehousing, logistics, and retail training for multiple international beauty brands entering the Indian consumer market.",
    strategy:
      "Reduce typical market entry times by around 40% through deep regulatory expertise, centralized logistics, and pre-established B2B distribution networks reaching 500+ retail points across India.",
    execution: [
      "Secured exclusive distribution for 4 major global beauty brands",
      "Built end-to-end CDSCO compliance and regulatory filing pipeline",
      "Established pan-India warehousing, temperature-controlled logistics, and distribution",
      "Activated e-commerce growth strategies and B2B retail partnerships",
      "Reduced average brand market entry time by ~40%",
    ],
    impact:
      "Cuatro Labs operates as a highly efficient venture builder, connecting global formulations with Indian retail shelves and serving as the operational parent of Atoma and Prohall India.",
    metrics: [
      { value: "5", label: "Global Brands", variant: "positive" },
      { value: "500+", label: "Retail Points", variant: "neutral" },
      { value: "~40%", label: "Faster Market Entry", variant: "positive" },
    ],
  },
  {
    slug: "prohall-professional-india",
    title: "Prohall Professional India",
    category: "CEO-Led Venture",
    description:
      "Leading the Indian arm of Prohall, the Brazilian professional haircare brand, bringing salon-grade treatments and daily-care lines to salons across India.",
    context:
      "As a Cuatro Labs venture, Prohall Professional India imports and scales Brazil's category-leading professional haircare solutions, introducing flagship treatments to professional hair salons nationwide.",
    strategy:
      "Partner directly with top-tier salons, provide intensive hair-technician training, and build strong B2B relationships around Prohall's acclaimed Select One treatment and daily-care ranges.",
    execution: [
      "Importing flagship Select One treatment and professional haircare ranges",
      "Managing operations, marketing, and strategic supply chain across India",
      "Conducting hands-on masterclasses and technical training for salon stylists",
      "Deploying multi-channel B2B salon distribution networks",
    ],
    impact:
      "Successfully driving the Brazil-to-India hair movement, establishing Prohall as a trusted brand name for salon-grade treatments across major Indian cities.",
    metrics: [
      { value: "Select One", label: "Flagship Product", variant: "neutral" },
      { value: "B2B Salon", label: "Distribution Focus", variant: "neutral" },
      { value: "CEO-Led", label: "Executive Oversight", variant: "positive" },
    ],
  },
  {
    slug: "biolume-skin-science",
    title: "Biolume Skin Science",
    category: "Co-Founded Skincare Brand",
    description:
      "Co-founded and scaled a skin science venture based in Noida, focusing on clean, science-backed dermal formulations and advanced biological skin solutions.",
    context:
      "Between 2023 and 2025, Co-founded Biolume Skin Science, marking a transition from corporate purchasing and supply chain management into active venture creation.",
    strategy:
      "Position the brand around clean skin science, developing formulas targeting urban skin challenges (pollution damage, blue light exposure) and selling directly to consumer and salon channels.",
    execution: [
      "Co-founded the skincare startup in Noida",
      "Collaborated with dermatologists and biotech researchers for formulation development",
      "Scales supply chain and vendor partnerships to run operations leanly",
      "Introduced advanced biological skin solutions to the market",
    ],
    impact:
      "Successfully scaled Biolume's early distribution, demonstrating the ability to turn a product thesis into a functioning, recognized skin science brand.",
    metrics: [
      { value: "2023-2025", label: "Co-Founder Tenure", variant: "neutral" },
      { value: "Noida", label: "Headquarters", variant: "neutral" },
      { value: "Skincare", label: "Category Focus", variant: "positive" },
    ],
  },
  {
    slug: "yesmadam",
    title: "YesMadam — Head of Purchase",
    category: "Purchasing & Procurement",
    description:
      "Led purchasing, procurement, and vendor strategy for over four years at YesMadam as Head of Purchase.",
    context:
      "Between 2019 and 2023, served as Head of Purchase for YesMadam, one of India's leading beauty & home services platforms, driving procurement, vendor negotiation, and product sourcing strategy.",
    strategy:
      "Optimize purchasing costs, establish direct vendor partnerships, negotiate commercial terms, and streamline raw material & product procurement.",
    execution: [
      "Led pan-India purchasing operations and procurement strategy for 4+ years",
      "Negotiated large-scale supplier contracts and commercial terms with key vendors",
      "Managed product sourcing and inventory procurement frameworks for service partners",
      "Drove cost efficiency and material procurement standards across beauty & wellness categories",
    ],
    impact:
      "Built deep expertise in purchasing, vendor strategy, and procurement management, establishing the core commercial foundation for future venture leadership.",
    metrics: [
      { value: "4+ Years", label: "Head of Purchase", variant: "neutral" },
      { value: "Procurement", label: "Core Focus", variant: "positive" },
      { value: "Beauty & Wellness", label: "Industry Category", variant: "neutral" },
    ],
  },
  {
    slug: "mansarowar-enterprises",
    title: "Mansarowar Enterprises — Head of Purchase",
    category: "Purchasing & Procurement",
    description:
      "Spent nearly six years as Head of Purchase, building foundational discipline in procurement, supply management, and vendor negotiation.",
    context:
      "Between 2013 and 2019, served as Head of Purchase at Mansarowar Enterprises, managing large-scale material procurement and vendor relationships.",
    strategy:
      "Establish structured purchasing workflows, manage vendor contracting, and optimize material sourcing costs across operations.",
    execution: [
      "Directed purchase and material management operations for nearly 6 years",
      "Built core vendor networks and negotiated procurement contracts",
      "Optimized supply schedules and material cost structures",
      "Established foundational purchasing discipline that grounded future leadership roles",
    ],
    impact:
      "Gained six years of hands-on procurement and supply management mastery, forming the initial operational grounding of my career.",
    metrics: [
      { value: "6 Years", label: "Head of Purchase", variant: "neutral" },
      { value: "Procurement", label: "Core Focus", variant: "positive" },
      { value: "2013–2019", label: "Tenure", variant: "neutral" },
    ],
  },
];
