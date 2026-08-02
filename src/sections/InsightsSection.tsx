import { MessageSquare, Newspaper, ThumbsUp, ExternalLink, ArrowUpRight } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import portrait from "../assets/profile-photo.jpg";
import { API_BASE_URL } from "../config";
import { cn } from "../lib/utils";

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
    _id: "static-new-1",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "🇮🇳 A New Mission After the Uniform.\n\nHave you taken VRS or recently retired from the Indian Army, Indian Navy, Indian Air Force, CAPF, or other Defence Services?\n\nYour leadership journey doesn't have to end with retirement—it can begin again.\n\nATOMA – India's Salon at Home is building one of India's fastest-growing hyperlocal service platforms, and we are looking for disciplined, mission-driven leaders to spearhead operations across multiple cities.\n\nWe are hiring for:\n🎯 City Managers\n🎯 City Operations Heads\n🎯 Regional Operations Leaders\n\nLocations: Delhi NCR and 40+ cities across India.\n\nWe are particularly looking for:\n- Retired or VRS Defence Personnel\n- Officers from the rank of Captain, Major, Lieutenant Colonel, Colonel (or equivalent ranks in the Navy and Air Force)\n- Professionals with strong leadership, operational planning, people management, and execution capabilities\n\nWhy Defence Veterans?\nBecause building a national organisation requires discipline, integrity, accountability, and the ability to lead teams under pressure—qualities that define our Armed Forces.\n\nIf you are ready for a second innings and want to help build a company with the ambition of becoming India's No. 1 Salon-at-Home platform, we would love to connect with you.\n\n#Hiring #DefenceVeterans #Army #Navy #AirForce #Veterans #VRS #CityManager #Operations #Leadership #Startup #ATOMA #SalonAtHome",
    timestamp: "2026-07-28T09:00:00Z",
    likes: 194,
    commentsCount: 26,
    shares: 15,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_activity-7487591273718210560",
    mediaUrl: portrait,
    mediaUrls: [portrait],
    mediaType: "image",
    tag: "HIRING",
    title: "A New Mission After the Uniform — Defence Veterans Hiring",
    readTime: "3 min read"
  },
  {
    _id: "static-new-2",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "🚀 Ahmedabad, We're Looking for Leaders Who Want to Build Something Meaningful.\n\nAt ATOMA – India's Salon at Home, we are entering an exciting phase of growth and are looking to strengthen our leadership team with experienced professionals who want to create a lasting impact.\n\nWe are inviting applications from:\n✅ Retired IAS, IPS, IFS, Defence Personnel, PSU Executives, Banking Professionals, and other senior leaders with 30–35+ years of experience as:\n- Advisory Board Members\n- Strategic Mentors\n- Technical Consultants\n\nWe are also looking for professionals who wish to join us full-time in leadership roles across:\n- Marketing & Brand | Technology & IT | Operations & Administration\n- Human Resources | Finance & Accounts | Legal & Compliance\n- Business Expansion & Growth | Supply Chain & Procurement\n\n📍 Location: Ahmedabad (preferred)\n🇮🇳 Mission: Build and scale ATOMA – India's Salon at Home.\n\n#Ahmedabad #Leadership #Hiring #Startup #AdvisoryBoard #Consultant #RetiredProfessionals #Operations #ATOMA #SalonAtHome",
    timestamp: "2026-07-28T08:30:00Z",
    likes: 142,
    commentsCount: 19,
    shares: 11,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_activity-7487589906190401538",
    mediaUrl: portrait,
    mediaUrls: [portrait],
    mediaType: "image",
    tag: "LEADERSHIP",
    title: "Hiring Advisory & Executive Leaders in Ahmedabad",
    readTime: "3 min read"
  },
  {
    _id: "static-new-3",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "🚀 One Year. Countless Challenges. Unshakable Belief.\n\nToday marks one official year since the beginning of our journey. What started as a vision has grown into a mission—to build a platform that empowers beauty professionals, creates opportunities, and transforms the salon-at-home industry across India.\n\nThere were delays. There were obstacles. There were moments that tested our patience. But every challenge strengthened our resolve.\n\nOn this sacred and auspicious occasion of Bahuda Yatra, with the divine blessings of Lord Jagannath, Lord Balabhadra, and Devi Subhadra, we are humbled and grateful to announce that ATOMA is officially LIVE from today. 🙏✨\n\nThis is not just the launch of an app. It is the beginning of a movement where service professionals earn with dignity and customers experience premium beauty services at home.\n\nWelcome to the future of beauty.\n\n#ATOMA #BahudaYatra #LordJagannath #StartupIndia #BeautyTech #SalonAtHome #Innovation #CuatroLabs #OfficialLaunch",
    timestamp: "2026-07-25T10:00:00Z",
    likes: 278,
    commentsCount: 54,
    shares: 29,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_activity-7486345541086334976",
    mediaUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw",
    mediaUrls: [
      "https://media.licdn.com/dms/image/v2/D4D22AQFnp1VCZnK12w/feedshare-shrink_800/B4DZ8SKrIGI0Ac-/0/1782716216239?e=2147483647&v=beta&t=Xvqzu12QjhR2GjM68BV9yXB-hiJD7uFbs-NVdva8zYw"
    ],
    mediaType: "image",
    tag: "LAUNCH",
    title: "ATOMA Officially LIVE — One Year Journey & Bahuda Yatra",
    readTime: "3 min read"
  },
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
    _id: "static-new-4",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "Not every father is called \"Dad.\"\n\nSome are grandfathers. Some are uncles. Some are brothers who stepped up. Some are mentors who believed in us before we believed in ourselves. Some are single mothers carrying both roles. And some are the silent protectors who stood behind us, never asking for recognition.\n\nToday is not just about celebrating fathers by birth. It's about celebrating every person who chose responsibility over comfort, guidance over convenience, and love over obligation.\n\nThe people who taught us resilience. The people who picked us up when we failed. The people who stood guard over our dreams while we were busy chasing them.\n\nFatherhood is not defined by biology. It is defined by presence, sacrifice, and unwavering support.\n\nTo every father, father figure, mentor, guardian, and silent hero—thank you for showing us that strength can be gentle, leadership can be compassionate, and love can be unconditional.\n\nHappy Father's Day ❤️\n\n#FathersDay #FatherFigures #Leadership #Mentorship #Family #Gratitude #Inspiration #InclusiveLeadership",
    timestamp: "2026-06-21T10:00:00Z",
    likes: 164,
    commentsCount: 28,
    shares: 7,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_activity-7474181423248175104",
    mediaUrl: portrait,
    mediaUrls: [portrait],
    mediaType: "image",
    tag: "CULTURE",
    title: "Father's Day & Inclusive Leadership",
    readTime: "2 min read"
  },
  {
    _id: "static-5",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "AHMEDABAD WAS JUST THE TRAILER. 🔥\n\nIndia… tighten your seat belts. What you are seeing today is only the beginning of something massive.\n\nATOMA is gearing up to go LIVE across the next 40 cities by June end / July — building one of India’s fastest-growing worker-first beauty service ecosystems.\n\nThis is not a normal startup launch. This is a movement to empower thousands of service professionals, create financial independence, and redefine hyperlocal beauty services in India.\n\nWe are coming stronger. We are coming faster. And we are just getting started.\n\n#Atoma #Ahmedabad #StartupIndia #BeautyTech #Hyperlocal #WorkerFirst #CuatroLabs",
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
    _id: "static-new-5",
    author: "Soumen Bhatta",
    authorTitle: "Founder & Group CEO, Cuatro Labs | Entrepreneur | Growth Architect | Industry Innovator",
    authorAvatar: portrait,
    content: "Building ATOMA – India's Salon at Home with Trust Intelligence.\n\nIn the hyperlocal home services ecosystem, technology alone isn't enough; trust is the core foundation. We are disrupting the status quo by combining AI-driven demand matching with rigorous partner protection and customer safety standards.\n\nAs India's growth story unfolds, scaling a marketplace across Bharat requires category creation, digital transformation, and an obsession with customer experience.\n\nWe are building the future of services in India—city by city, professional by professional.\n\n#Atoma #IndiasSalonAtHome #TrustIntelligence #HomeServices #SalonAtHome #FutureOfServices #Bharat #IndiaGrowthStory #BusinessGrowth #DisruptingTheStatusQuo #AI",
    timestamp: "2026-06-12T11:00:00Z",
    likes: 185,
    commentsCount: 22,
    shares: 10,
    postUrl: "https://www.linkedin.com/posts/soumen-bhatta-370122198_activity-7471842623524331520",
    mediaUrl: portrait,
    mediaUrls: [portrait],
    mediaType: "image",
    tag: "VISION",
    title: "Trust Intelligence & Future of Services in Bharat",
    readTime: "2 min read"
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

function IndiaFlag() {
  return (
    <span className="inline-flex items-center gap-1.5 align-middle mx-1 font-sans select-none" title="India (IN)">
      <svg width="22" height="15" viewBox="0 0 30 20" className="rounded-xs shadow-xs border border-white/20 inline-block align-middle overflow-hidden">
        <rect width="30" height="6.67" fill="#FF9933" />
        <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
        <rect y="13.33" width="30" height="6.67" fill="#138808" />
        <circle cx="15" cy="10" r="2.8" fill="none" stroke="#000080" strokeWidth="0.6" />
        <circle cx="15" cy="10" r="0.5" fill="#000080" />
      </svg>
      <span className="text-[11px] font-bold px-1.5 py-0.2 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">IN</span>
    </span>
  );
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
    if (part.includes("🇮🇳") || part.includes("\uFFFD")) {
      const subParts = part.split(/(🇮🇳|\uFFFD)/g);
      return (
        <span key={index}>
          {subParts.map((sub, i) => {
            if (sub === "🇮🇳" || sub === "\uFFFD") {
              return <IndiaFlag key={i} />;
            }
            return sub;
          })}
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
              src={url.includes("licdn.com") ? `${API_BASE_URL}/api/posts/media-proxy?url=${encodeURIComponent(url)}` : url}
              alt={`${alt} - Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {mediaUrls.length > 1 && (
        <>
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
    <div className="glass-card p-4 sm:p-6 border border-border/20 shadow-sm relative group hover:border-primary/40 hover:bg-card/40 transition-all duration-300 flex flex-col justify-between text-left">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3 text-[10px] font-semibold tracking-wider font-sans uppercase">
          <span className="text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
            {postTag}
          </span>
          <span className="text-muted-foreground/60">
            {postReadTime}
          </span>
        </div>

        <h4 className="text-base sm:text-lg font-display font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
          {postTitle}
        </h4>

        <div className="text-[10px] text-muted-foreground/75 font-mono mb-3 sm:mb-4">
          Published {formatDate(post.timestamp)}
        </div>

        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed whitespace-pre-line mb-2 font-sans font-normal">
          {formatContent(displayContent)}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary font-semibold hover:underline text-[11px] cursor-pointer mb-3 block"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}

        {post.mediaType === "image" && (
          post.mediaUrls && post.mediaUrls.length > 0 ? (
            <ImageCarousel mediaUrls={post.mediaUrls} alt={postTitle} />
          ) : post.mediaUrl ? (
            <ImageCarousel mediaUrls={[post.mediaUrl]} alt={postTitle} />
          ) : null
        )}
      </div>

      <div className="border-t border-border/20 pt-3 sm:pt-4 mt-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <button
            onClick={() => onLike(post._id)}
            disabled={isLiked}
            className={cn(
              "flex items-center gap-1.5 py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full border border-border/30 bg-secondary/30 transition-all duration-300 hover:bg-secondary/50 hover:text-primary cursor-pointer",
              isLiked && "text-primary border-primary/30 bg-primary/5 scale-105"
            )}
          >
            <ThumbsUp size={12} className={isLiked ? "fill-primary stroke-primary" : ""} />
            <span>{isLiked ? "Liked" : "Like"}</span>
          </button>
          <span className="text-[10px] opacity-75 font-mono ml-0.5">({post.likes + (isLiked ? 0 : 0)})</span>
        </div>

        <a
          href={post.postUrl || "https://linkedin.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors duration-300 ml-auto"
        >
          Read Original <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

export function InsightsSection() {
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
    <section id="insights" className="relative py-16 md:py-20 bg-background-alt border-b border-border/30">
      <div className="section-container">
        <div className="max-w-3xl mb-8 sm:mb-16 space-y-3 sm:space-y-4 text-left">
          <span className="eyebrow">Insights &amp; Activity</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sharing lessons from the startup journey.</h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Raw reflections from company logs, company anniversaries, and press coverages about scale, team building, and worker empowerment.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
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
  );
}

export default InsightsSection;
