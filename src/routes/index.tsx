import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote, MessageSquare, Newspaper, ThumbsUp, ExternalLink } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import portrait from "../assets/profile-photo.jpg";
import { API_BASE_URL } from "../config";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "20+", label: "Years of building & operations grounding" },
  { value: "4", label: "Global beauty brands distributed in India" },
  { value: "500+", label: "Retail points reached nationwide" },
  { value: "40", label: "Cities targeted for Atoma salon expansion" },
];

const philosophyQuotes = [
  "A pivot is a decision backed by clarity. Staying on a dead road is a decision backed by ego.",
  "Complacency is silent. It doesn't announce itself. It shows up as 'we'll fix it next quarter' — and by the time you notice it, the gap has already widened.",
  "The best hiring decisions come with a quiet edge of discomfort. When you think 'this person might know more than me in this area' — that's not a red flag. That's the signal.",
  "Companies are not built by ideas alone — they are built by committed people who stand beside you through every milestone."
];

const ventures = [
  {
    name: "Cuatro Labs",
    role: "Founder & Group CEO",
    years: "2025 — Present",
    sector: "Parent Group / Venture Builder",
    websiteUrl: "https://cuatrolabs.com/",
    body: (
      <div className="space-y-4 text-left">
        <p>
          I founded Cuatro Labs in June 2025 as India's exclusive gateway for world-class international beauty brands — managing end-to-end distribution, retail partnerships, CDSCO compliance, warehousing, logistics, and brand growth.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-primary text-sm">Exclusive Indian Distribution Portfolio:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Prohall India</strong> — Brazilian professional haircare, including the acclaimed Select One treatment and daily-care ranges</li>
            <li><strong>Arveni</strong> — Spanish luxe skincare, biotech-driven formulas for pollution, blue light, and premature aging protection</li>
            <li><strong>Epilise</strong> — Advanced medical aesthetics for skin rejuvenation and pigmentation management</li>
            <li><strong>Troplise</strong> — Professional-grade analytical and diagnostic tools for the beauty industry</li>
          </ul>
        </div>
        <p className="text-xs text-muted-foreground/80 font-sans">
          We handle direct importing, CDSCO compliance, pan-India warehousing, and logistics — reducing typical market entry time by around 40%.
        </p>
      </div>
    ),
    outcome: "Parent Company",
    highlight: true,
  },
  {
    name: "Atoma",
    role: "Founder & Group CEO",
    years: "2025 — Present",
    sector: "Hyperlocal Services (Cuatro Labs Brand)",
    websiteUrl: "https://www.atoma.in/",
    body: (
      <div className="space-y-4 text-left">
        <p>
          Atoma is a hyperlocal beauty & wellness platform bringing trusted salon professionals directly to customers' homes. What sets it apart is its worker-first model:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>Insurance protection from Day 1</li>
          <li>Health & accidental coverage for service professionals</li>
          <li>Skill empowerment and earning growth pathways</li>
          <li>Dignified, respected, long-term work — not gig-economy churn</li>
        </ul>
        <p className="text-xs text-muted-foreground/80 font-sans">
          Launched in Gandhinagar and Ahmedabad, expanding rapidly with a goal of reaching 40 cities and building India's fastest-growing worker-first service ecosystem.
        </p>
      </div>
    ),
    outcome: "Salon at Home",
  },
  {
    name: "Prohall Professional India",
    role: "Chief Executive Officer",
    years: "2025 — Present",
    sector: "Cosmetics & Haircare (Cuatro Labs Venture)",
    body: (
      <div className="space-y-3 text-left">
        <p>
          I personally lead Prohall Professional India as CEO. We manage the Indian operations, marketing, and strategic supply chain of Brazil's category-leading professional haircare brand.
        </p>
        <p className="text-xs text-muted-foreground/80 font-sans">
          From the flagship Select One treatment to daily-care lines, we're driving the Brazil-to-India hair movement across professional salons nationwide.
        </p>
      </div>
    ),
    outcome: "Active CEO",
  },
  {
    name: "Biolume Skin Science",
    role: "Co-Founder",
    years: "2023 — 2025",
    sector: "Skincare / Biotech",
    body: (
      <div className="space-y-2 text-left">
        <p>
          Co-founded and scaled a skin science venture based in Noida, marking my transition from operations leadership into entrepreneurship.
        </p>
        <p className="text-xs text-muted-foreground/80 font-sans">
          Focused on clean, science-backed dermal formulations and advanced biological skin solutions.
        </p>
      </div>
    ),
    outcome: "Co-Founded Skincare Brand",
  },
  {
    name: "YesMadam",
    role: "Head of Purchase",
    years: "2019 — 2023",
    sector: "Hyperlocal Home Services",
    body: (
      <div className="space-y-2 text-left">
        <p>
          Led purchasing, procurement, and vendor strategy for over four years at one of India's prominent beauty & home services platforms.
        </p>
        <p className="text-xs text-muted-foreground/80 font-sans">
          Gained deep operational exposure to the salon services category that inspired Atoma's worker-first model.
        </p>
      </div>
    ),
    outcome: "Scaled Supply Chain",
  },
];

const boards = [
  "Cuatro Labs Board of Directors (Chairman)",
  "XIBM Material Management Advisory Panel",
  "Startup India BeautyTech Advisor",
];

const milestones = [
  {
    year: "2025 — Present",
    title: "Founder & Group CEO, Cuatro Labs",
    body: "Founded and lead Cuatro Labs, a venture builder headquartered in Chennai. Built the company from an idea into a multi-city operation in its first year, launching Atoma and growing the team from a single first hire into a multi-functional organization."
  },
  {
    year: "2025 — Present",
    title: "Chief Executive Officer, Prohall Professional India",
    body: "Lead the Indian arm of Prohall, the Brazilian professional haircare brand — bringing salon-grade treatments like Select One and daily-care ranges to salons across India."
  },
  {
    year: "2023 — 2025",
    title: "Co-Founder, Biolume Skin Science",
    body: "Co-founded and helped scale a skin science venture based in Noida, marking my transition from operations leadership into entrepreneurship."
  },
  {
    year: "2021 — 2023",
    title: "Doctorate in Management Studies (Grade A+)",
    body: "Completed Doctorate in Management Studies focusing on Purchasing, Procurement/Acquisitions & Contracts Management from Xavier Institute of Business Management."
  },
  {
    year: "2019 — 2023",
    title: "Head of Purchase, YesMadam",
    body: "Led purchasing and vendor strategy for over four years at one of India's prominent beauty & home services platforms, mastering procurement operations."
  },
  {
    year: "2013 — 2019",
    title: "Head of Purchase, Mansarowar Enterprises",
    body: "Spent nearly six years building procurement and supply management discipline, establishing the operational grounding for future ventures."
  },
  {
    year: "2010 — 2011",
    title: "MBA, Material & Purchase Management",
    body: "Earned an MBA in Material Management and Purchase Management from Xavier Institute of Business Management, Bangalore."
  },
];

interface PostData {
  _id: string;
  author: string;
  authorTitle: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  commentsCount: number;
  shares: number;
  postUrl?: string;
  mediaUrl?: string;
  mediaType: "image" | "none";
  tag?: string;
  title?: string;
  readTime?: string;
}

const STATIC_POSTS: PostData[] = [
  {
    _id: "static-1",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "Every great company is built not only on ideas but also on the guidance of experienced leaders.\n\nIt was a privilege for both founders of Cuatro Labs, Jagdish Sutar and me, to meet Mr. Alok Singh, Senior CFO from IIM Ahmedabad, along with Mr. Man Singh Rajora, CEO of IDSR.\n\nWe had an insightful discussion about our vision for Cuatro Labs and ATOMA – India's Salon at Home. We shared our journey, our mission to transform the beauty and wellness ecosystem, and our plans to build a technology-driven, customer-centric platform that empowers professionals across India.\n\nMore importantly, we sought their guidance on scaling sustainably, building a strong financial foundation, creating the right organizational structure, and navigating the challenges of high-growth startups.\n\nAs both founders, we believe that one of the greatest strengths of an entrepreneur is continuously learning from leaders who have already created lasting impact. Every meaningful conversation brings new perspectives, sharper strategies, and renewed confidence to move forward.\n\nA heartfelt thank you to Mr. Alok Singh and Mr. Man Singh Rajora for your valuable time, insights, and encouragement. Your guidance will play an important role in the journey of building Cuatro Labs and ATOMA into organizations that create meaningful impact across India.\n\n#Leadership #Networking #Mentorship #Atoma #CuatroLabs #StartupIndia #Entrepreneurship",
    timestamp: "2026-07-05T09:00:00Z",
    likes: 156,
    commentsCount: 32,
    shares: 14,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_leadership-networking-mentorship-activity-7480902428255666176-xFSv",
    mediaType: "none",
    tag: "ADVISORY",
    title: "Advisory & Sustainable Scaling",
    readTime: "3 min read"
  },
  {
    _id: "static-2",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "Sometimes, the most powerful moments are the ones you never plan.\n\nOur team member, Disha, recently attended the launch event of Movie \"Alpha\" and got a once-in-a-lifetime opportunity to meet Alia Bhatt. In a heartfelt moment, Disha said, \"I love you!\" and Alia smiled and replied, \"I love you too.\"\n\nIt was more than a celebrity interaction. It was a reminder of what confidence, courage, and women's empowerment truly look like.\n\nAt Cuatro Labs, and through our journey with ATOMA, we believe every woman deserves the confidence to dream bigger, speak fearlessly, and create her own story. Empowerment begins when women inspire women, uplift each other, and celebrate every achievement—big or small.\n\nThis video captures that beautiful moment and the spirit behind it. Here's to every woman who dares to dream, believes in herself, and inspires countless others along the way.\n\n#WomenEmpowerment #Leadership #Inspiration #Atoma #CuatroLabs #AlphaLaunch",
    timestamp: "2026-07-02T10:30:00Z",
    likes: 245,
    commentsCount: 48,
    shares: 19,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_womenempowerment-leadership-inspiration-activity-7478774663356149760-Wv8W",
    mediaType: "none",
    tag: "EMPOWERMENT",
    title: "Women's Empowerment & Inspiration",
    readTime: "2 min read"
  },
  {
    _id: "static-3",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "One Year. One Dream. One Family. ❤️\n\nEvery great organization has a story, and every story begins with someone who believes before the world does.\n\nToday, we celebrate Selva, our very first employee at Cuatro Labs, as he completes one incredible year with us.\n\nWhen Cuatro Labs was just an idea filled with dreams, uncertainty, and endless possibilities, Selva chose to believe in the vision. As our Designer, he has been more than a creative professional—he has been a pillar in building our brand identity, shaping our campaigns, and bringing our imagination to life.\n\nThe photos say it all. This wasn't just a cake-cutting ceremony—it was a celebration of trust, loyalty, and the relationships that make a startup feel like family.\n\nFrom day one to today, we've grown together. We've celebrated wins, overcome challenges, and continued to dream bigger every single day.\n\nAs we now expand across 40 cities and embark on a new chapter for Atoma and Cuatro Labs, it's people like Selva who remind us that companies are not built by ideas alone—they are built by committed people who stand beside you through every milestone.\n\nThank you, Selva, for your dedication, creativity, and unwavering belief in our journey.\n\nHappy 1st Work Anniversary! 🎉\n\n#CuatroLabs #WorkAnniversary #FirstEmployee #StartupJourney #Gratitude #Teamwork #Leadership #Design #Innovation #BuildingTheFuture #OneTeamOneDream",
    timestamp: "2026-06-30T14:20:00Z",
    likes: 184,
    commentsCount: 22,
    shares: 8,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_cuatrolabs-workanniversary-firstemployee-activity-7478116185293639680-C_H2",
    mediaType: "image",
    tag: "CULTURE",
    title: "First Hires & Startup Trust",
    readTime: "3 min read"
  },
  {
    _id: "static-4",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: "/src/assets/profile-photo.jpg",
    content: "From Blessings to Beginnings. 🙏🚀\n\n29th June – Snana Purnima.\n\nA day that holds a very special place in my heart.\n\nOn this sacred occasion, as millions seek the blessings of Mahaprabhu Lord Jagannath, our team took the first physical step towards a dream that has lived in our hearts for a long time.\n\nLate last night, while the city slept, our team was out on the streets of Gandhinagar, installing the very first Atoma branding across the city. For many, these may just be advertising boards. For us, they represent years of dreaming, planning, sacrifices, failures, learning, and unwavering belief.\n\nWe consciously chose Snana Purnima to begin this journey because every great beginning deserves divine blessings. May Lord Jagannath guide us with wisdom, humility, and the strength to serve millions of families across India.\n\nAtoma is not just another startup. It is our commitment to transform how India experiences beauty and wellness by bringing trusted salon professionals to every doorstep while creating dignified earning opportunities for thousands of service professionals.\n\nThis is only the first city. Many more cities will follow. Many more dreams will become reality.\n\nTo every member of the Atoma family who worked tirelessly through the night—thank you. Startups are not built in boardrooms alone; they are built on roads, under streetlights, through sleepless nights, and by people who believe in a vision bigger than themselves.\n\nAs we begin this journey, I bow my head in gratitude.\nJai Jagannath. 🙏\n\n#JaiJagannath #SnanaPurnima #Atoma #StartupIndia #FounderJourney #BuildingInPublic #Entrepreneurship #BeautyTech #SalonAtHome #Hyperlocal #Gandhinagar #Ahmedabad #CuatroLabs #DreamBig #TeamWork",
    timestamp: "2026-06-29T09:00:00Z",
    likes: 312,
    commentsCount: 65,
    shares: 42,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_jaijagannath-snanapurnima-atoma-activity-7477253765671342080-4L-l",
    mediaType: "image",
    tag: "HYPERLOCAL",
    title: "Offline Branding & Hyperlocal Beginnings",
    readTime: "3 min read"
  }
];

function formatDate(dateString: string) {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  } catch (e) {
    return dateString;
  }
}

function formatContent(text: string) {
  const parts = text.split(/(\s+|\n)/);
  return parts.map((part, index) => {
    if (part.startsWith("#")) {
      return (
        <span key={index} className="text-accent font-semibold hover:underline cursor-pointer">
          {part}
        </span>
      );
    }
    return part;
  });
}

// const AtomaBrandingSVG = () => (
//   <svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="600" height="300" fill="url(#bg-grad-1)" />
//     <rect x="30" y="30" width="540" height="240" rx="8" fill="#141519" stroke="#f99c00" strokeWidth="1" strokeOpacity="0.25" />
//     <path d="M 30 80 L 570 80 M 30 140 L 570 140 M 30 200 L 570 200" stroke="#1f2025" strokeWidth="1" />
//     <circle cx="300" cy="110" r="40" fill="#1c1d24" stroke="#f99c00" strokeWidth="2" />
//     <path d="M290 100 C290 95, 310 95, 310 100 C310 110, 290 115, 300 128" stroke="#f99c00" strokeWidth="2.5" strokeLinecap="round" />
//     <circle cx="300" cy="138" r="2.5" fill="#f99c00" />
//     <text x="300" y="195" fontFamily="var(--font-serif)" fontSize="26" fill="#ffffff" fontWeight="bold" textAnchor="middle" letterSpacing="1">ATOMA</text>
//     <text x="300" y="217" fontFamily="var(--font-sans)" fontSize="10" fill="#f99c00" fontWeight="600" textAnchor="middle" letterSpacing="4">SALON-AT-HOME</text>
//     <text x="300" y="238" fontFamily="var(--font-sans)" fontSize="9" fill="#71717a" textAnchor="middle">LAUNCHING IN 40+ CITIES</text>
//     <defs>
//       <linearGradient id="bg-grad-1" x1="0" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#18181b" />
//         <stop offset="1" stopColor="#09090b" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const AnniversarySVG = () => (
//   <svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="600" height="300" fill="url(#bg-grad-2)" />
//     <rect x="30" y="30" width="540" height="240" rx="8" fill="#0b0f19" stroke="#3080ff" strokeWidth="1" strokeOpacity="0.2" />
//     <circle cx="180" cy="150" r="50" fill="#1e1b4b" stroke="#3080ff" strokeWidth="1.5" />
//     <rect x="155" y="125" width="50" height="50" rx="4" fill="#312e81" stroke="#3080ff" strokeWidth="1.5" transform="rotate(15 180 150)" />
//     <text x="380" y="120" fontFamily="var(--font-sans)" fontSize="20" fill="#ffffff" fontWeight="bold">1st Anniversary</text>
//     <text x="380" y="145" fontFamily="var(--font-sans)" fontSize="13" fill="#f99c00" fontWeight="600">CUATRO LABS DESIGN</text>
//     <text x="380" y="175" fontFamily="var(--font-sans)" fontSize="11" fill="#a1a1aa">Celebrating our very first hire,</text>
//     <text x="380" y="195" fontFamily="var(--font-sans)" fontSize="11" fill="#a1a1aa">building a startup on trust &amp; values.</text>
//     <circle cx="120" cy="90" r="3" fill="#f99c00" />
//     <circle cx="250" cy="100" r="2.5" fill="#3080ff" />
//     <circle cx="110" cy="200" r="3.5" fill="#10b981" />
//     <circle cx="240" cy="210" r="2" fill="#ef4444" />
//     <defs>
//       <linearGradient id="bg-grad-2" x1="0" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#0f172a" />
//         <stop offset="1" stopColor="#020617" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const WorkerFirstSVG = () => (
//   <svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="600" height="300" fill="url(#bg-grad-3)"/>
//     <rect x="30" y="30" width="540" height="240" rx="8" fill="#021c15" stroke="#10b981" strokeWidth="1" strokeOpacity="0.2"/>
//     <path d="M 220 100 L 220 80 L 300 65 L 380 80 L 380 130 C 380 190, 300 230, 300 230 C 300 230, 220 190, 220 130 Z" fill="#064e3b" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.8"/>
//     <path d="M 285 130 L 315 130 M 300 115 L 300 145" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>
//     <text x="300" y="178" fontFamily="var(--font-sans)" fontSize="14" fill="#ffffff" fontWeight="bold" textAnchor="middle">DAY 1 INSURANCE</text>
//     <text x="300" y="198" fontFamily="var(--font-sans)" fontSize="10" fill="#10b981" fontWeight="600" textAnchor="middle" letterSpacing="1">WORKER-FIRST ECOSYSTEM</text>
//     <defs>
//       <linearGradient id="bg-grad-3" x1="0" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#022c22"/>
//         <stop offset="1" stopColor="#064e3b"/>
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const LeadershipSVG = () => (
//   <svg viewBox="0 0 600 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="600" height="300" fill="url(#bg-grad-4)"/>
//     <rect x="30" y="30" width="540" height="240" rx="8" fill="#18151f" stroke="#f99c00" strokeWidth="1" strokeOpacity="0.2"/>
//     <circle cx="300" cy="110" r="30" fill="#78350f" stroke="#f99c00" strokeWidth="2"/>
//     <path d="M 285 135 L 315 135 M 290 143 L 310 143" stroke="#f99c00" strokeWidth="2"/>
//     <line x1="300" y1="65" x2="300" y2="50" stroke="#f99c00" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="255" y1="110" x2="240" y2="110" stroke="#f99c00" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="345" y1="110" x2="360" y2="110" stroke="#f99c00" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="268" y1="78" x2="258" y2="68" stroke="#f99c00" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="332" y1="78" x2="342" y2="68" stroke="#f99c00" strokeWidth="2" strokeLinecap="round"/>
//     <text x="300" y="185" fontFamily="var(--font-sans)" fontSize="15" fill="#ffffff" fontWeight="bold" textAnchor="middle">HIRE BEYOND COMFORT</text>
//     <text x="300" y="208" fontFamily="var(--font-sans)" fontSize="11" fill="#f99c00" fontWeight="600" textAnchor="middle" letterSpacing="1">SECURE LEADERSHIP &amp; EXCEPTIONAL TEAMS</text>
//     <defs>
//       <linearGradient id="bg-grad-4" x1="0" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#1b122c"/>
//         <stop offset="1" stopColor="#2c1404"/>
//       </linearGradient>
//     </defs>
//   </svg>
// );

// function PostMedia({ content }: { content: string }) {
//   if (content.includes("branding")) {
//     return <AtomaBrandingSVG />;
//   } else if (content.includes("Selva")) {
//     return <AnniversarySVG />;
//   } else if (content.includes("Worker-First")) {
//     return <WorkerFirstSVG />;
//   } else if (content.includes("secure leader")) {
//     return <LeadershipSVG />;
//   }
//   return null;
// }

function JournalCard({
  post,
  isLiked,
  onLike,
}: {
  post: PostData;
  isLiked: boolean;
  onLike: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const contentThreshold = 220;
  const isLong = post.content.length > contentThreshold;

  const displayContent = expanded
    ? post.content
    : `${post.content.slice(0, contentThreshold)}${isLong ? "..." : ""}`;

  const postTag = post.tag || "REFLECTIONS";
  const postTitle = post.title || "Startup Journal Entry";
  const postReadTime = post.readTime || "3 min read";

  return (
    <div className="glass-card p-6 border border-border/20 shadow-sm relative group hover:border-accent/40 hover:bg-card/30 transition-all duration-300 flex flex-col justify-between text-left">
      <div>
        {/* Meta Header */}
        <div className="flex items-center justify-between gap-3 mb-3 text-[10px] font-semibold tracking-wider font-sans uppercase">
          <span className="text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
            {postTag}
          </span>
          <span className="text-muted-foreground/60">
            {postReadTime}
          </span>
        </div>

        {/* Post Title */}
        <h4 className="text-base sm:text-lg font-serif font-semibold text-primary mb-2 leading-snug group-hover:text-accent transition-colors duration-300">
          {postTitle}
        </h4>

        {/* Date / Author brief */}
        <div className="text-[10px] text-muted-foreground/75 font-mono mb-4">
          Published {formatDate(post.timestamp)}
        </div>

        {/* Content */}
        <p className="text-xs text-primary leading-relaxed whitespace-pre-line mb-2 font-sans font-normal opacity-90">
          {formatContent(displayContent)}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-accent font-semibold hover:underline text-[11px] cursor-pointer mb-4 block"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}

        {/* Shared Image Attachment */}
        {/* {post.mediaType === "image" && (
          <div className="mt-3 mb-4 rounded-lg overflow-hidden border border-border/45 bg-secondary/10 relative group-hover:border-accent/35 transition-all duration-300">
            <PostMedia content={post.content} />
          </div>
        )} */}
      </div>

      {/* Action Footer */}
      <div className="border-t border-border/20 pt-4 mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <button
            onClick={() => onLike(post._id)}
            disabled={isLiked}
            className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg border border-border/30 bg-secondary/15 transition-all duration-300 hover:bg-secondary/30 cursor-pointer ${isLiked ? "text-accent border-accent/30 bg-accent/5 scale-105" : "hover:text-accent hover:border-accent/25"
              }`}
          >
            <ThumbsUp size={12} className={isLiked ? "fill-accent stroke-accent" : ""} />
            <span>{isLiked ? "Liked" : "Like"}</span>
          </button>
          <span className="text-[10px] opacity-75 font-mono ml-1">({post.likes + (isLiked ? 0 : 0)} reactions)</span>
        </div>

        <a
          href={post.postUrl || "https://linkedin.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          Read Original <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

const press = [
  {
    outlet: "Republic News India",
    title: "Biolume Skin Science Ushers in a New Era of Salon-Centric Skincare.",
    url: "https://republicnewsindia.com/biolume-skin-science-ushers-in-a-new-era-of-salon-centric-skincare/",
    desc: "Reflections on skincare disruption"
  },
  {
    outlet: "Atoma Launch",
    title: "Atoma: Reimagining India's Salon-at-Home Marketplace with Day 1 Worker Protection.",
    url: "https://www.atoma.in/",
    desc: "Reflections on worker-first ecosystem"
  },
  {
    outlet: "Cuatro Labs Board",
    title: "Strategic Advisory: Scaling sustainably, building structure, and data over ego.",
    url: "https://www.linkedin.com/posts/soumen-bhatta-370122198_leadership-networking-mentorship-activity-7480902428255666176-xFSv",
    desc: "Reflections on mentorship and growth"
  },
];

function Index() {
  const queryClient = useQueryClient();
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("liked_posts");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const { data: posts, status } = useQuery<PostData[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/api/posts`);
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json();
    },
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const likeMutation = useMutation({
    mutationFn: async (postId: string) => {
      const res = await fetch(`${API_BASE_URL}/api/posts/like/${postId}`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Failed to like post");
      return res.json();
    },
    onMutate: async (postId) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueryData<PostData[]>(["posts"]);

      if (previousPosts) {
        queryClient.setQueryData<PostData[]>(
          ["posts"],
          previousPosts.map((p) =>
            p._id === postId ? { ...p, likes: p.likes + 1 } : p
          )
        );
      }

      const newLiked = { ...likedPosts, [postId]: true };
      setLikedPosts(newLiked);
      localStorage.setItem("liked_posts", JSON.stringify(newLiked));

      return { previousPosts };
    },
    onError: (_err, postId, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts"], context.previousPosts);
      }
      const newLiked = { ...likedPosts };
      delete newLiked[postId];
      setLikedPosts(newLiked);
      localStorage.setItem("liked_posts", JSON.stringify(newLiked));
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleLike = (postId: string) => {
    if (likedPosts[postId]) return;
    likeMutation.mutate(postId);
  };

  const displayPosts = status === "success" && posts ? posts : STATIC_POSTS;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Decorative Glowing Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute top-[40%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-accent/30 blur-[130px] opacity-10 pointer-events-none" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/30 bg-grid-pattern py-20 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="space-y-6">
            <span className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-semibold text-accent">
              Founder &amp; Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator
            </span>
            <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-primary">
              Soumen Bhatta
            </h1>
            <p className="max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
              Two decades of building. One mission now: Cuatro Labs.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 hover:shadow-accent/25 hover:bg-accent/90 transition-all duration-300 transform active:scale-[0.98]"
              >
                View My Journey <ArrowUpRight size={16} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/20 px-6 py-3.5 text-sm font-semibold text-primary hover:bg-secondary/50 hover:border-accent/40 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <a
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/20 px-6 py-3.5 text-sm font-semibold text-primary hover:bg-secondary/50 hover:border-accent/40 transition-all duration-300"
              >
                Explore Cuatro Labs →
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md group">
            {/* Soft lighting card wrap */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-accent to-accent/30 opacity-15 blur-lg group-hover:opacity-25 transition duration-500" />
            <div className="relative glass-card p-2.5 rounded-2xl border border-border/40 bg-card/45">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={portrait}
                  alt="Portrait of Soumen Bhatta"
                  className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/30 bg-background/30 backdrop-blur-sm relative z-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card p-6 border-border/20 shadow-sm hover:border-accent/35 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="font-serif text-3xl font-semibold text-accent mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                {s.value}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio / leadership story */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28 relative z-10">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <span className="eyebrow">The leadership story</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary leading-tight">
              Building systems that empower people.
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full mt-2" />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground text-left">
            <p>
              I didn't start in a boardroom. My career began in supply management and procurement — nearly a decade spent as Head of Purchase, first at Mansarowar Enterprises and later at YesMadam, where I spent over four years mastering the operational backbone of consumer service businesses.
            </p>
            <p>
              That foundation — understanding cost, supply chains, vendor relationships, and how to run lean — became the launchpad for my shift into entrepreneurship. In 2023, I stepped in as Co-Founder of Biolume Skin Science, my first real leap from operator to builder.
            </p>
            <p>
              In June 2025, I founded Cuatro Labs — India's exclusive distributor for four international beauty brands, bringing world-class formulations to the Indian market through pan-India retail and B2B partnerships. Under its umbrella sit Atoma, which is reimagining beauty and wellness by bringing trusted salon professionals directly to customers' doorsteps while giving service professionals dignified, protected work from day one, and Prohall Professional India, the Brazilian haircare brand I lead as CEO, bringing salon-grade treatments like Select One to Indian salons.
            </p>
            <p>
              Today, I call myself a builder first: someone who believes companies aren't built by ideas alone, but by the people who show up for them — on the streets, at 2 a.m., installing the first branding boards by hand.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="bg-secondary/20 border-t border-b border-border/30 relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="eyebrow">Leadership Philosophy</span>
          <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl font-serif font-semibold text-primary leading-tight">
            In His Words: Convictions that shape how I build.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {philosophyQuotes.map((quote, i) => (
              <div
                key={i}
                className="glass-card p-8 shadow-sm hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1 relative"
              >
                <Quote className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors duration-300" size={32} />
                <p className="text-base text-primary leading-relaxed italic font-serif pr-8 text-left">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="bg-background py-20 md:py-28 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <span className="eyebrow">Portfolio</span>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl font-serif font-semibold text-primary">
            Ventures built, scaled and stewarded.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
            Multiple ventures across hyperlocal services, premium cosmetics, and D2C skincare — each a different lesson in execution, operations, and scale.
          </p>

          <div className="mt-12 space-y-8">
            {ventures.map((v) => {
              const isCuatro = v.name === "Cuatro Labs";
              const isMainBrand = v.name === "Atoma" || v.name === "Prohall Professional India";
              const borderClass = isCuatro
                ? "border-accent/40 bg-accent/[0.01] hover:border-accent/60 shadow-md ring-1 ring-accent/10"
                : isMainBrand
                  ? "border-blue/30 bg-card hover:border-blue/50 shadow-sm"
                  : "border-border/60 bg-card hover:border-accent/30 shadow-sm";

              const sectorBadgeClass = isCuatro
                ? "bg-accent/10 border border-accent/25 text-accent"
                : isMainBrand
                  ? "bg-blue/10 border border-blue/25 text-blue"
                  : "bg-secondary border border-border text-muted-foreground";

              const outcomeBadgeClass = isCuatro
                ? "bg-accent/10 border border-accent/20 text-accent font-bold"
                : isMainBrand
                  ? "bg-blue/10 border border-blue/20 text-blue font-bold"
                  : "bg-secondary border border-border text-primary font-semibold";

              return (
                <div
                  key={v.name}
                  className={`grid gap-6 rounded-2xl border p-8 md:grid-cols-[1fr_2fr] md:p-10 transition-all duration-300 relative overflow-hidden ${borderClass}`}
                >
                  {isCuatro && (
                    <div className="absolute top-0 right-0 bg-accent px-4 py-1 text-[10px] font-bold tracking-wider text-accent-foreground uppercase rounded-bl-xl">
                      Parent Group
                    </div>
                  )}
                  <div className="space-y-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${sectorBadgeClass}`}>
                      {v.sector}
                    </span>
                    <h3 className="text-3xl text-primary font-serif font-semibold">
                      {"websiteUrl" in v && v.websiteUrl ? (
                        <a href={v.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent transition-colors duration-300 group/link">
                          {v.name}
                          <ArrowUpRight size={18} className="opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
                        </a>
                      ) : (
                        v.name
                      )}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-primary">{v.role}</p>
                      <p className="text-xs text-muted-foreground/80">{v.years}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-5">
                    <div className="text-base sm:text-lg leading-relaxed text-muted-foreground">{v.body}</div>
                    <div>
                      <span className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs ${outcomeBadgeClass}`}>
                        {v.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Board Seats */}
          <div className="mt-20 border-t border-border/30 pt-16">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-8">Board Seats &amp; Advisory</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {boards.map((b) => (
                <div key={b} className="glass-card p-6 shadow-sm hover:border-accent/35 transition-all duration-300">
                  <p className="text-base text-primary font-semibold leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="border-t border-border/30 bg-secondary/15 py-20 md:py-28 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="eyebrow">Career milestones</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary">A journey measured in decisions.</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Key steps taken, lessons learned, and the milestones built along the way.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <ol className="relative border-l border-border/40 ml-4">
              {milestones.map((m) => (
                <li key={m.year + m.title} className="mb-12 ml-8 last:mb-0 relative group">
                  <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-background bg-accent group-hover:scale-110 transition-transform duration-300 shadow-md ring-2 ring-accent/20" />
                  <div className="glass-card p-6 hover:border-accent/30 transition-all duration-300">
                    <div className="font-serif text-2xl text-accent font-semibold tracking-tight mb-1">{m.year}</div>
                    <h3 className="text-lg text-primary font-semibold mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="border-t border-border/30 bg-background py-20 md:py-28 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="eyebrow">Insights &amp; activity</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary">Sharing lessons from the startup journey.</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Key milestones, raw reflections, and thoughts on scale, team building, and hyperlocal category creation.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-3 border-b border-border/30 pb-4">
                <MessageSquare className="text-accent" size={20} />
                <h3 className="text-xl text-primary font-serif font-semibold">Startup Journal</h3>
              </div>
              <div className="space-y-6 max-h-[600px] overflow-y-auto pr-3 scroll-container">
                {status === "pending" ? (
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="glass-card p-6 border-border/20 animate-pulse">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-secondary rounded-full" />
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-secondary rounded w-1/3" />
                            <div className="h-3 bg-secondary rounded w-1/2" />
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="h-4 bg-secondary rounded w-full" />
                          <div className="h-4 bg-secondary rounded w-5/6" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  displayPosts.map((post) => (
                    <JournalCard
                      key={post._id}
                      post={post}
                      isLiked={!!likedPosts[post._id]}
                      onLike={handleLike}
                    />
                  ))
                )}
              </div>
            </div>

            <div className="space-y-6 text-left">
              <div className="flex items-center gap-3 border-b border-border/30 pb-4">
                <Newspaper className="text-accent" size={20} />
                <h3 className="text-xl text-primary font-serif font-semibold">Press &amp; Publications</h3>
              </div>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-3 scroll-container">
                {press.map((p, index) => (
                  <a
                    key={p.title}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 border border-border/20 shadow-sm relative group hover:border-accent/40 hover:bg-card/25 transition-all duration-300 flex flex-col justify-between cursor-pointer block text-left"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase mb-3">
                        <span className="text-accent border border-accent/25 bg-accent/5 px-2 py-0.5 rounded">
                          {p.outlet}
                        </span>
                        <span className="text-muted-foreground/60 font-mono">
                          Ref 0{index + 1}
                        </span>
                      </div>
                      <p className="text-base text-primary leading-snug font-serif font-semibold mb-4">
                        "{p.title}"
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground group-hover:text-accent transition-colors duration-300">
                      <span>{p.desc}</span>
                      <span className="flex items-center gap-1 font-sans">
                        Read Clipping <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-border/30 mx-auto max-w-4xl px-6 py-24 text-center relative z-10">
        <Quote className="mx-auto text-accent/40 mb-6" size={36} />
        <blockquote className="font-serif text-2xl leading-relaxed text-primary md:text-3xl italic">
          "Companies are not built by ideas alone — they are built by committed people who show up for them on the streets, at 2 a.m., installing the first branding boards by hand."
        </blockquote>
        <cite className="mt-6 block text-sm not-italic text-muted-foreground font-semibold uppercase tracking-wider">
          — Soumen Bhatta
        </cite>
      </section>

      {/* CTA */}
      <section className="border-t border-border/30 bg-secondary/10 relative overflow-hidden z-10 py-16 md:py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 relative z-10 md:flex-row md:items-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-semibold text-primary">Let's build the future together.</h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Interested in beauty tech, worker-first marketplaces, or strategic growth? Let's connect.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 hover:shadow-accent/25 hover:bg-accent/90 transition-all duration-300 transform active:scale-[0.98] shrink-0"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
