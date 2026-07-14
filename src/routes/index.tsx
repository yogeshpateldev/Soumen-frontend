import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Quote, MessageSquare, Newspaper, ThumbsUp, ExternalLink, ArrowRight, CheckCircle, Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, User, Building, AlertCircle } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import portrait from "../assets/profile-photo.jpg";
import { API_BASE_URL } from "../config";
import { projects } from "../data/projects";
import ProjectCard from "../Components/ProjectCard";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "20+", label: "Years building & procurement grounding" },
  { value: "5", label: "Global beauty brands distributed in India" },
  { value: "500+", label: "Retail points reached nationwide" },
  { value: "40", label: "Cities targeted for Atoma salon expansion" },
];

const philosophyQuotes = [
  "A pivot is a decision backed by clarity. Staying on a dead road is a decision backed by ego.",
  "Complacency is silent. It doesn't announce itself. It shows up as 'we'll fix it next quarter' — and by the time you notice it, the gap has already widened.",
  "The best hiring decisions come with a quiet edge of discomfort. When you think 'this person might know more than me in this area' — that's not a red flag. That's the signal.",
  "Companies are not built by ideas alone — they are built by committed people who stand beside you through every milestone."
];

const skills = [
  "Brand Strategy & Positioning",
  "Product Development",
  "Operations & Scaling",
  "Supply Chain Management",
  "Go-to-Market Strategy",
  "Multi-Channel Distribution",
  "Team Building",
  "Partnerships & Growth",
];

const projectTypes = [
  "Beauty brand incubation",
  "Portfolio company operations",
  "Multi-brand strategy",
  "Product launches",
  "Distribution expansion",
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
  mediaUrls?: string[];
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
    authorAvatar: portrait,
    content: "Every great company is built not only on ideas but also on the guidance of experienced leaders.\n\nIt was a privilege for both founders of Cuatro Labs, Jagdish Sutar and me, to meet Mr. Alok Singh, Senior CFO from IIM Ahmedabad, along with Mr. Man Singh Rajora, CEO of IDSR.\n\nWe had an insightful discussion about our vision for Cuatro Labs and ATOMA – India's Salon at Home. We shared our journey, our mission to transform the beauty and wellness ecosystem, and our plans to build a technology-driven, customer-centric platform that empowers professionals across India.\n\nMore importantly, we sought their guidance on scaling sustainably, building a strong financial foundation, creating the right organizational structure, and navigating the challenges of high-growth startups.\n\nAs both founders, we believe that one of the greatest strengths of an entrepreneur is continuously learning from leaders who have already created lasting impact. Every meaningful conversation brings new perspectives, sharper strategies, and renewed confidence to move forward.\n\nA heartfelt thank you to Mr. Alok Singh and Mr. Man Singh Rajora for your valuable time, insights, and encouragement. Your guidance will play an important role in the journey of building Cuatro Labs and ATOMA into organizations that create meaningful impact across India.\n\n#Leadership #Networking #Mentorship #Atoma #CuatroLabs #StartupIndia #Entrepreneurship",
    timestamp: "2026-07-05T09:00:00Z",
    likes: 156,
    commentsCount: 32,
    shares: 14,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_leadership-networking-mentorship-activity-7480902428255666176-xFSv",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI"
    ],
    mediaType: "image",
    tag: "ADVISORY",
    title: "Advisory & Sustainable Scaling",
    readTime: "3 min read"
  },
  {
    _id: "static-2",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "Sometimes, the most powerful moments are the ones you never plan.\n\nOur team member, Disha, recently attended the launch event of Movie \"Alpha\" and got a once-in-a-lifetime opportunity to meet Alia Bhatt. In a heartfelt moment, Disha said, \"I love you!\" and Alia smiled and replied, \"I love you too.\"\n\nIt was more than a celebrity interaction. It was a reminder of what confidence, courage, and women's empowerment truly look like.\n\nAt Cuatro Labs, and through our journey with ATOMA, we believe every woman deserves the confidence to dream bigger, speak fearlessly, and create her own story. Empowerment begins when women inspire women, uplift each other, and celebrate every achievement—big or small.\n\nThis video captures that beautiful moment and the spirit behind it. Here's to every woman who dares to dream, believes in herself, and inspires countless others along the way.\n\n#WomenEmpowerment #Leadership #Inspiration #Atoma #CuatroLabs #AlphaLaunch",
    timestamp: "2026-07-02T10:30:00Z",
    likes: 245,
    commentsCount: 48,
    shares: 19,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_womenempowerment-leadership-inspiration-activity-7478774663356149760-Wv8W",
    mediaUrl: "https://dms.licdn.com/playlist/vid/v2/D4D05AQHiFPA3JAHZfw/thumbnail-with-play-button-overlay-high/B4DZ8nx5MFJ8C0-/0/1783078823878?e=2147483647&v=beta&t=k3DUn6stPLg7-EDL2W1VsfV-zmVKo9kJ5cBZFydvjpk",
    mediaUrls: [
      "https://dms.licdn.com/playlist/vid/v2/D4D05AQHiFPA3JAHZfw/thumbnail-with-play-button-overlay-high/B4DZ8nx5MFJ8C0-/0/1783078823878?e=2147483647&v=beta&t=k3DUn6stPLg7-EDL2W1VsfV-zmVKo9kJ5cBZFydvjpk"
    ],
    mediaType: "image",
    tag: "EMPOWERMENT",
    title: "Women's Empowerment & Inspiration",
    readTime: "2 min read"
  },
  {
    _id: "static-3",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "One Year. One Dream. One Family. ❤️\n\nEvery great organization has a story, and every story begins with someone who believes before the world does.\n\nToday, we celebrate Selva, our very first employee at Cuatro Labs, as he completes one incredible year with us.\n\nWhen Cuatro Labs was just an idea filled with dreams, uncertainty, and endless possibilities, Selva chose to believe in the vision. As our Designer, he has been more than a creative professional—he has been a pillar in building our brand identity, shaping our campaigns, and bringing our imagination to life.\n\nThe photos say it all. This wasn't just a cake-cutting ceremony—it was a celebration of trust, loyalty, and the relationships that make a startup feel like family.\n\nFrom day one to today, we've grown together. We've celebrated wins, overcome challenges, and continued to dream bigger every single day.\n\nAs we now expand across 40 cities and embark on a new chapter for Atoma and Cuatro Labs, it's people like Selva who remind us that companies are not built by ideas alone—they are built by committed people who stand beside you through every milestone.\n\nThank you, Selva, for your dedication, creativity, and unwavering belief in our journey.\n\nHappy 1st Work Anniversary! 🎉\n\n#CuatroLabs #WorkAnniversary #FirstEmployee #StartupJourney #Gratitude #Teamwork #Leadership #Design #Innovation #BuildingTheFuture #OneTeamOneDream",
    timestamp: "2026-06-30T14:20:00Z",
    likes: 184,
    commentsCount: 22,
    shares: 8,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_cuatrolabs-workanniversary-firstemployee-activity-7478116185293639680-C_H2",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D5622AQGWQ5M_O3o2Vw/feedshare-shrink_1280/B56Z8ebCatKUAQ-/0/1782921832421?e=2147483647&v=beta&t=fNPL_3oum4ie2QkaV-HE0zYa7yhTCHLZHmme5LIXeJQ",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQGWQ5M_O3o2Vw/feedshare-shrink_1280/B56Z8ebCatKUAQ-/0/1782921832421?e=2147483647&v=beta&t=fNPL_3oum4ie2QkaV-HE0zYa7yhTCHLZHmme5LIXeJQ"
    ],
    mediaType: "image",
    tag: "CULTURE",
    title: "First Hires & Startup Trust",
    readTime: "3 min read"
  },
  {
    _id: "static-4",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "From Blessings to Beginnings. 🙏🚀\n\n29th June – Snana Purnima.\n\nA day that holds a very special place in my heart.\n\nOn this sacred occasion, as millions seek the blessings of Mahaprabhu Lord Jagannath, our team took the first physical step towards a dream that has lived in our hearts for a long time.\n\nLate last night, while the city slept, our team was out on the streets of Gandhinagar, installing the very first Atoma branding across the city. For many, these may just be advertising boards. For us, they represent years of dreaming, planning, sacrifices, failures, learning, and unwavering belief.\n\nWe consciously chose Snana Purnima to begin this journey because every great beginning deserves divine blessings. May Lord Jagannath guide us with wisdom, humility, and the strength to serve millions of families across India.\n\nAtoma is not just another startup. It is our commitment to transform how India experiences beauty and wellness by bringing trusted salon professionals to every doorstep while creating dignified earning opportunities for thousands of service professionals.\n\nThis is only the first city. Many more cities will follow. Many more dreams will become reality.\n\nTo every member of the Atoma family who worked tirelessly through the night—thank you. Startups are not built in boardrooms alone; they are built on roads, under streetlights, through sleepless nights, and by people who believe in a vision bigger than themselves.\n\nAs we begin this journey, I bow my head in gratitude.\nJai Jagannath. 🙏\n\n#JaiJagannath #SnanaPurnima #Atoma #StartupIndia #FounderJourney #BuildingInPublic #Entrepreneurship #BeautyTech #SalonAtHome #Hyperlocal #Gandhinagar #Ahmedabad #CuatroLabs #DreamBig #TeamWork",
    timestamp: "2026-06-29T09:00:00Z",
    likes: 312,
    commentsCount: 65,
    shares: 42,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_jaijagannath-snanapurnima-atoma-activity-7477253765671342080-4L-l",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw"
    ],
    mediaType: "image",
    tag: "HYPERLOCAL",
    title: "Offline Branding & Hyperlocal Beginnings",
    readTime: "3 min read"
  },
  {
    _id: "static-5",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "We are thrilled to share that ATOMA is launching across 40 Indian cities by the end of June! Our mission is to scale our beauty-tech ecosystem and bring trusted salon professionals directly to consumer doorsteps while creating dignified earning opportunities for service professionals across India.\n\n#Atoma #Ahmedabad #StartupIndia #BeautyTech #Hyperlocal",
    timestamp: "2026-06-15T10:00:00Z",
    likes: 215,
    commentsCount: 38,
    shares: 12,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_atoma-ahmedabad-startupindia-activity-7465663489127362564-ykAb",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI"
    ],
    mediaType: "image",
    tag: "EXPANSION",
    title: "ATOMA Launches in 40 Indian Cities by June End",
    readTime: "1 min read"
  },
  {
    _id: "static-6",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "A pivot is a decision backed by clarity. Staying on a dead road is a decision backed by ego.\n\nAs founders, we must always look at market facts over personal pride. If a model is not scaling, admitting wrong turns and changing direction is not a failure — it's the only path to growth.\n\n#Founder #StartupLife #Entrepreneurship #Pivot #GrowthMindset",
    timestamp: "2026-05-20T11:00:00Z",
    likes: 198,
    commentsCount: 29,
    shares: 9,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_founder-startuplife-entrepreneurship-activity-7446076261745008640-M55_",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw"
    ],
    mediaType: "image",
    tag: "LEADERSHIP",
    title: "Founder Pivot: Admitting Wrong Turns",
    readTime: "2 min read"
  },
  {
    _id: "static-7",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "Execution is everything. You can have the most beautiful business plans and slide decks, but if you cannot execute on the ground, they are worth nothing. Launch fast, iterate based on real feedback, and build momentum.\n\n#Entrepreneurship #StartupMindset #FounderLife #Execution",
    timestamp: "2026-05-05T09:00:00Z",
    likes: 172,
    commentsCount: 18,
    shares: 5,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_entrepreneurship-startupmindset-founderlife-activity-7436998370004471808-1_6w",
    mediaUrl: portrait,
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQGWQ5M_O3o2Vw/feedshare-shrink_1280/B56Z8ebCatKUAQ-/0/1782921832421?e=2147483647&v=beta&t=fNPL_3oum4ie2QkaV-HE0zYa7yhTCHLZHmme5LIXeJQ"
    ],
    mediaType: "image",
    tag: "STRATEGY",
    title: "Execution Trumps Perfection in Business",
    readTime: "2 min read"
  },
  {
    _id: "static-8",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "Most founders fall in love with their vision. But the market doesn't care about your vision; it cares about value. Listen to the customers, look at the purchase signals, and prioritize market results over personal bias.\n\n#Startup #GTM #MarketFit #GrowthArchitecture",
    timestamp: "2026-04-28T14:00:00Z",
    likes: 210,
    commentsCount: 35,
    shares: 11,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_most-founders-fall-in-love-with-their-vision-activity-7435195790798503936--1P-",
    mediaUrl: portrait,
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQH5JEwAACxpvg/feedshare-shrink_800/B4DZ9GBHNyK8Ag-/0/1783586125043?e=2147483647&v=beta&t=mmrZAQzOW4PvZfj8mXoV9XFhqQ0Ng_GiV8d4fWDi9NI"
    ],
    mediaType: "image",
    tag: "STRATEGY",
    title: "Founders: Prioritize Market Results",
    readTime: "2 min read"
  }
];

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
        <span key={index} className="text-primary font-semibold hover:underline cursor-pointer">
          {part}
        </span>
      );
    }
    return part;
  });
}

function ImageCarousel({ mediaUrls, alt }: { mediaUrls: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? mediaUrls.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === mediaUrls.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    // Minimum swipe threshold of 50px
    if (diff > 50) {
      setCurrentIndex((prev) => (prev === mediaUrls.length - 1 ? 0 : prev + 1));
      setTouchStart(null);
    } else if (diff < -50) {
      setCurrentIndex((prev) => (prev === 0 ? mediaUrls.length - 1 : prev - 1));
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <div
      className="relative my-4 overflow-hidden rounded-xl border border-border/20 aspect-video flex items-center justify-center bg-secondary/15 group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full h-full relative">
        {mediaUrls.map((url, index) => (
          <div
            key={url + index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center bg-black/5",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            )}
          >
            <img
              src={url}
              alt={`${alt} - Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {mediaUrls.length > 1 && (
        <>
          {/* Slider Arrow Navigation (Visible on hover on desktop) */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/45 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 cursor-pointer text-sm font-bold shadow-md"
            aria-label="Previous image"
          >
            &#10216;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/45 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 cursor-pointer text-sm font-bold shadow-md"
            aria-label="Next image"
          >
            &#10217;
          </button>

          {/* Dots Indicators Pagination */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-xs">
            {mediaUrls.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-white scale-110" : "bg-white/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
    <div className="glass-card p-6 border border-border/20 shadow-sm relative group hover:border-primary/40 hover:bg-card/40 transition-all duration-300 flex flex-col justify-between text-left">
      <div>
        {/* Meta Header */}
        <div className="flex items-center justify-between gap-3 mb-3 text-[10px] font-semibold tracking-wider font-sans uppercase">
          <span className="text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
            {postTag}
          </span>
          <span className="text-muted-foreground/60">
            {postReadTime}
          </span>
        </div>

        {/* Post Title */}
        <h4 className="text-base sm:text-lg font-display font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
          {postTitle}
        </h4>

        {/* Date */}
        <div className="text-[10px] text-muted-foreground/75 font-mono mb-4">
          Published {formatDate(post.timestamp)}
        </div>

        {/* Content */}
        <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line mb-2 font-sans font-normal">
          {formatContent(displayContent)}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary font-semibold hover:underline text-[11px] cursor-pointer mb-4 block"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}

        {/* Attachment/Image Carousel */}
        {post.mediaType === "image" && (
          post.mediaUrls && post.mediaUrls.length > 0 ? (
            <ImageCarousel mediaUrls={post.mediaUrls} alt={postTitle} />
          ) : post.mediaUrl ? (
            <ImageCarousel mediaUrls={[post.mediaUrl]} alt={postTitle} />
          ) : null
        )}
      </div>

      {/* Action Footer */}
      <div className="border-t border-border/20 pt-4 mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <button
            onClick={() => onLike(post._id)}
            disabled={isLiked}
            className={cn(
              "flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-border/30 bg-secondary/30 transition-all duration-300 hover:bg-secondary/50 hover:text-primary cursor-pointer",
              isLiked && "text-primary border-primary/30 bg-primary/5 scale-105"
            )}
          >
            <ThumbsUp size={12} className={isLiked ? "fill-primary stroke-primary" : ""} />
            <span>{isLiked ? "Liked" : "Like"}</span>
          </button>
          <span className="text-[10px] opacity-75 font-mono ml-1">({post.likes + (isLiked ? 0 : 0)} reactions)</span>
        </div>

        <a
          href={post.postUrl || "https://linkedin.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          Read Original <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

function Index() {
  const queryClient = useQueryClient();

  // Local states
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("liked_posts");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);


  // Queries & Mutations
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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let data: any = {};
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server error (${res.status}): ${text.slice(0, 100) || res.statusText}`);
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err: any) {
      clearTimeout(timeoutId);
      console.error("Form submission error:", err);
      if (err.name === "AbortError") {
        setErrorMsg("Submission timed out. Please check if the server is running and try again.");
      } else {
        setErrorMsg(err.message || "Could not submit your message. Please verify your connection.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayPosts = status === "success" && posts ? posts : STATIC_POSTS;

  return (
    <div className="relative min-h-screen overflow-hidden pt-16 md:pt-20">

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-grid-pattern py-24 md:py-32 border-b border-border/30">
        {/* Background blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="section-container relative">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

            <div className="space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold opacity-0 animate-fade-in stagger-1">
                <Sparkles size={16} className="animate-pulse-soft" />
                Founder &amp; Group CEO, Cuatro Labs
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] opacity-0 animate-fade-in stagger-2">
                Soumen Bhatta
              </h1>

              {/* Subheadline & Tagline */}
              <div className="space-y-4 max-w-2xl opacity-0 animate-fade-in stagger-3">
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-semibold">
                  Founder &amp; Group CEO,{" "}
                  <span className="relative inline-block text-foreground font-bold mx-1">
                    <span className="gradient-text">Cuatro Labs</span>
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-2"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 8C50 2 150 2 198 8"
                        stroke="url(#subhead-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="subhead-gradient" x1="0" y1="0" x2="200" y2="0">
                          <stop offset="0%" stopColor="var(--color-primary)" />
                          <stop offset="100%" stopColor="var(--color-accent)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>{" "}
                  | Entrepreneur | Growth Architect | Industry Innovator
                </p>
                <p className="text-base sm:text-lg text-foreground font-medium">
                  Two decades of building. One mission now: Cuatro Labs.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in stagger-4">
                <a
                  href="#journey"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full",
                    "bg-gradient-blue text-white font-semibold text-sm shadow-lg shadow-primary/25",
                    "transition-all duration-300 hover:shadow-xl hover:shadow-primary/35 hover:scale-105 active:scale-95"
                  )}
                >
                  View My Journey
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#ventures"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full",
                    "bg-background border-2 border-border text-foreground font-semibold text-sm",
                    "transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95"
                  )}
                >
                  Explore Cuatro Labs →
                </a>
              </div>
            </div>

            {/* Photo Card wrapper */}
            <div className="relative mx-auto w-full max-w-xs md:max-w-sm group opacity-0 animate-fade-in stagger-3">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-15 blur-lg group-hover:opacity-25 transition duration-500" />
              <div className="relative glass-card p-3 bg-card/60 border-border/40">
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
        </div>
      </section>

      {/* Stats row */}
      <section className="border-b border-border/30 bg-background/30 backdrop-blur-sm relative z-10">
        <div className="mx-auto grid grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 max-w-6xl">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card p-5 border-border/20 shadow-sm hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 text-left"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                {s.value}
              </div>
              <div className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-wider font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION 2: ABOUT / BIO */}
      <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-20 pointer-events-none" />

        <div className="section-container relative">
          <div className="grid lg:grid-cols-3 gap-12 text-left">

            {/* Bio Narrative */}
            <div className="lg:col-span-2 space-y-6">
              <span className="eyebrow">The Leadership Story</span>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Building systems that empower people.
              </h2>
              <div className="w-12 h-1 bg-gradient-blue rounded-full mt-2" />

              <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed pt-4 font-sans font-normal">
                <p>
                  I didn't start in a boardroom. My career began in supply management and procurement — nearly a decade spent as Head of Purchase, first at Mansarowar Enterprises and later at YesMadam, where I spent over four years mastering the operational backbone of consumer service businesses.
                </p>
                <p>
                  That foundation — understanding cost, supply chains, vendor relationships, and how to run lean — became the launchpad for my shift into entrepreneurship. In 2023, I stepped in as Co-Founder of Biolume Skin Science, my first real leap from operator to builder.
                </p>
                <p>
                  In June 2025, I founded Cuatro Labs — India's exclusive distributor for four international beauty brands, bringing world-class formulations to the Indian market through pan-India retail and B2B partnerships. Under its umbrella sits <a href="https://www.atoma.in/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Atoma</a>, which is reimagining beauty and wellness by bringing trusted salon professionals directly to customers' doorsteps while giving thousands of service professionals dignified, protected work from day one, and Prohall Professional India, the Brazilian haircare brand I lead as CEO, bringing salon-grade treatments like Select One to Indian salons.
                </p>
                <p>
                  I hold an MBA in Material Management & Purchase Management from Xavier Institute of Business Management, Bangalore, and a Doctorate in Management Studies (Purchasing, Procurement & Contracts Management) — completed with an A+ grade.
                </p>
                <p className="text-foreground font-semibold">
                  Today, I call myself a builder first: someone who believes companies aren't built by ideas alone, but by the people who show up for them — on the streets, at 2 a.m., installing the first branding boards by hand.
                </p>
              </div>
            </div>

            {/* Sidebar for Skills / Competencies */}
            <aside className="lg:col-span-1 space-y-6">

              {/* Skills Card */}
              <div className="group relative p-6 rounded-2xl overflow-hidden bg-card border border-border/60 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Core Competencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Types Card */}
              <div className="group relative p-6 rounded-2xl overflow-hidden bg-card border border-border/60 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Types of Initiatives
                  </h3>
                  <ul className="space-y-3">
                    {projectTypes.map((type) => (
                      <li
                        key={type}
                        className="flex items-center gap-3 text-sm text-muted-foreground group/item transition-all duration-300 hover:translate-x-1"
                      >
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        <span className="group-hover/item:text-foreground transition-colors">
                          {type}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* SECTION: LEADERSHIP PHILOSOPHY */}
      <section className="bg-background py-20 border-t border-border/20 relative z-10 text-left">
        <div className="section-container">
          <span className="eyebrow text-primary">Leadership Philosophy</span>
          <h2 className="mt-4 max-w-2xl text-2xl sm:text-3xl font-bold text-foreground leading-tight">
            In My Words: Convictions that shape how I build.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {philosophyQuotes.map((quote, i) => (
              <div
                key={i}
                className="glass-card p-6 shadow-sm hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 relative"
              >
                <Quote className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" size={32} />
                <p className="text-sm sm:text-base text-foreground leading-relaxed italic pr-8">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VENTURES (PORTFOLIO) */}
      <section id="ventures" className="relative py-24 md:py-32 overflow-hidden bg-background-alt border-t border-b border-border/30">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-lg opacity-15 pointer-events-none" />

        <div className="section-container relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <span className="eyebrow">Venture Builder Portfolio</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-3">
                What I'm Building
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Ventures built, scaled, and stewarded across beauty distribution, professional haircare, D2C science, and hyperlocal services.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                Holding Company &amp; Subsidiaries
              </span>
            </div>
          </div>

          {/* Subsection 1: Active Ventures & Operations */}
          <div className="text-left mb-8">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Active Ventures &amp; Operations
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Active operating brands, distribution channels, and subsidiaries under Cuatro Labs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {projects
              .filter((p) => ["atoma", "cuatro-labs", "prohall-professional-india"].includes(p.slug))
              .map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  metrics={project.metrics}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                />
              ))}
          </div>

          {/* Subsection 2: Previous Ventures & Foundations */}
          <div className="text-left mb-8 pt-6 border-t border-border/20">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-muted-foreground/60" />
              Previous Ventures &amp; Foundations
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Past co-founded companies and operational leadership roles that built the groundwork for my career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects
              .filter((p) => ["biolume-skin-science", "yesmadam"].includes(p.slug))
              .map((project, idx) => (
                <div
                  key={project.slug}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300 h-full"
                >
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    metrics={project.metrics}
                    className="opacity-0 animate-fade-in h-full"
                    style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                  />
                </div>
              ))}
          </div>

          {/* Board Seats */}
          <div className="mt-20 border-t border-border/40 pt-16 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-8">
              Board Seats &amp; Advisory
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {boards.map((b) => (
                <div
                  key={b}
                  className="glass-card p-6 shadow-sm border-border/20 hover:border-primary/45 transition-all duration-300"
                >
                  <p className="text-base text-foreground font-semibold leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4: JOURNEY TIMELINE */}
      <section id="journey" className="relative py-24 md:py-32 bg-background border-b border-border/30">
        <div className="section-container">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="eyebrow mx-auto">Career Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">A journey measured in decisions.</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Key operational posts, entrepreneurial milestones, and the grounding built along the way.
            </p>
          </div>

          <div className="mx-auto max-w-3xl text-left">
            <ol className="relative border-l border-border/50 ml-4 md:ml-8">
              {milestones.map((m) => (
                <li key={m.year + m.title} className="mb-12 ml-8 last:mb-0 relative group">
                  <span className="absolute -left-[42px] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary group-hover:scale-110 transition-transform duration-300 shadow-md ring-2 ring-primary/20" />
                  <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="font-display text-xl text-primary font-bold tracking-tight mb-1">{m.year}</div>
                    <h3 className="text-lg text-foreground font-semibold mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>


      {/* SECTION 5: INSIGHTS & ACTIVITY */}
      <section id="insights" className="relative py-24 md:py-32 bg-background-alt border-b border-border/30">
        <div className="section-container">

          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="eyebrow">Insights &amp; Activity</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sharing lessons from the startup journey.</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Raw reflections from company logs, company anniversaries, and press coverages about scale, team building, and worker empowerment.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">

            {/* Startup Journal */}
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-3 border-b border-border/30 pb-4">
                <MessageSquare className="text-primary" size={20} />
                <h3 className="text-xl font-bold text-foreground">Startup Journal</h3>
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

            {/* Press Clippings */}
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-3 border-b border-border/30 pb-4">
                <Newspaper className="text-primary" size={20} />
                <h3 className="text-xl font-bold text-foreground">Press &amp; Publications</h3>
              </div>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-3 scroll-container">
                {press.map((p, index) => (
                  <a
                    key={p.title}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 border border-border/20 shadow-sm relative group hover:border-primary/40 hover:bg-card/40 transition-all duration-300 flex flex-col justify-between cursor-pointer block text-left"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase mb-3">
                        <span className="text-primary border border-primary/25 bg-primary/5 px-2 py-0.5 rounded-full">
                          {p.outlet}
                        </span>
                        <span className="text-muted-foreground/60 font-mono">
                          Ref 0{index + 1}
                        </span>
                      </div>
                      <p className="text-base text-foreground leading-snug font-semibold mb-4">
                        "{p.title}"
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
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


      {/* SECTION 6: CONTACT FORM */}
      <section id="contact" className="relative py-24 md:py-32 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-blue opacity-5 blur-3xl rounded-full pointer-events-none" />

        <div className="section-container relative">

          <div className="max-w-3xl mb-12 text-left">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Let's build something <span className="gradient-text">together.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a service professional, a potential B2B partner, or an investor who believes in sustainable scale — I'd love to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-[1.2fr_0.8fr]">

            {/* Interactive Form */}
            <div className="glass-card p-8 sm:p-10 shadow-lg border border-border/40 bg-card/45 backdrop-blur-md relative overflow-hidden">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <CheckCircle2 className="text-emerald-500 animate-bounce" size={48} />
                  <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                    Thank you for reaching out. Soumen or someone from the Cuatro Labs team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-blue text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6 text-left">
                  <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>

                  {errorMsg && (
                    <div className="flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive animate-fade-in">
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 text-muted-foreground/50" size={16} />
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 text-muted-foreground/50" size={16} />
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-3.5 text-muted-foreground/50" size={16} />
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-4 text-muted-foreground/50" size={16} />
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Soumen, I would like to connect regarding..."
                        className="w-full rounded-xl border border-border/30 bg-secondary/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary/20 resize-y min-h-[120px]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-blue py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/15 hover:shadow-primary/25 disabled:opacity-50 transform active:scale-[0.98] cursor-pointer transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Details */}
            <div className="flex flex-col gap-8 justify-between py-2 text-left">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                  Cuatro Labs Contact
                </h4>

                <div className="space-y-3">
                  <a
                    href="mailto:tech@cuatrolabs.com"
                    className="group flex items-center gap-4 rounded-xl border border-border/35 bg-card/45 p-4 hover:border-primary/40 hover:bg-secondary/25 transition-all duration-300 w-full shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground/80 font-bold uppercase tracking-wider font-sans">
                        Email Address
                      </span>
                      <span className="text-sm font-semibold text-foreground tracking-wide">
                        tech@cuatrolabs.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:+918349963744"
                    className="group flex items-center gap-4 rounded-xl border border-border/35 bg-card/45 p-4 hover:border-primary/40 hover:bg-secondary/25 transition-all duration-300 w-full shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground/80 font-bold uppercase tracking-wider font-sans">
                        Phone Number
                      </span>
                      <span className="text-sm font-semibold text-foreground tracking-wide">
                        +91 83499 63744
                      </span>
                    </div>
                  </a>

                  <div className="group flex items-center gap-4 rounded-xl border border-border/35 bg-card/45 p-4 transition-all duration-300 w-full shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-muted-foreground/80 font-bold uppercase tracking-wider font-sans">
                        Head Office
                      </span>
                      <span className="text-sm font-semibold text-foreground tracking-wide">
                        Chennai, Tamil Nadu – 600002, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Principles */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
                  Operating Principles
                </h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Build in Public:</strong> Every partnership is approached with clarity, transparency, and data-backed strategies.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Worker-First:</strong> Supporting ideas that respect the value of labor and build structural opportunity.
                    </span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Pull-quote banner */}
      <section className="border-t border-border/30 mx-auto max-w-4xl px-6 py-24 text-center relative z-10">
        <Quote className="mx-auto text-primary/15 mb-6" size={48} />
        <blockquote className="font-display text-2xl leading-relaxed text-foreground md:text-3xl italic">
          "Companies are not built by ideas alone — they are built by committed people who show up for them on the streets, at 2 a.m., installing the first branding boards by hand."
        </blockquote>
        <cite className="mt-6 block text-sm not-italic text-muted-foreground font-semibold uppercase tracking-wider">
          — Soumen Bhatta
        </cite>
      </section>

    </div>
  );
}
export default Index;
