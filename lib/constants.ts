import { Atom, Briefcase, Home, Layout, Sun, TrendingUp } from "lucide-react";

export const navLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How it Works",
    href: "#how-it-works",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "About Us",
    href: "#about-us",
  },
];

export const headerButtons = [
  {
    name: "Log In",
    href: "#log-in",
  },
  {
    name: "Get Started Free",
    href: "#get-started",
    active: true,
  },
];

export const brandItems = [
  {
    name: "Emma Wilson",
    image:
      "https://framerusercontent.com/images/cfSJHUQRgFAVs3zTaVy62dAZx8E.png?scale-down-to=512&width=4566&height=720",
  },
  {
    name: "Lucas Chen",
    image:
      "https://framerusercontent.com/images/kTfYQPl28QKU6RYEaFd5GhtVYsw.png?scale-down-to=512&width=3534&height=720",
  },
  {
    name: "Sophia Martinez",
    image:
      "https://framerusercontent.com/images/CSApnTSZP9VHNIdtysenCAnG9g.png?scale-down-to=512&width=3660&height=720",
  },
  {
    name: "Oliver Thompson",
    image:
      "https://framerusercontent.com/images/ABzEn9OGaMTJEAANp7ydsxuZK5Y.png?scale-down-to=512&width=2340&height=720",
  },
  {
    name: "Oliver Thompson",
    image:
      "https://framerusercontent.com/images/JYoOjFViIOLCJoHu467COK4Gyak.png?width=298&height=116",
  },
];

export const testimonialItems = [
  {
    name: "Han Gu",
    designation: "Co-Founder & CTO, Palate Insights",
    description:
      "Astra completely changed how I view my finances. I finally have a budget that works without feeling restrictive. The automated savings feature is a game-changer!",
    image:
      "https://framerusercontent.com/images/tNEKcdPrvkd4TZnPaOM3FCgGYxA.png?width=176&height=176",
  },
  {
    name: "Joseph Helmy",
    designation: "Founder & CEO, Haulvana",
    description:
      "I used to be overwhelmed by debt. Astra's personalized payoff plan helped me see the light at the end of the tunnel. I'm on track to be debt-free in two years.",
    image:
      "https://framerusercontent.com/images/wu3SES9XRDdyt2gz0b5h3PpcSkc.png?width=176&height=176",
  },
  {
    name: "Conor Brennan-Burke",
    designation: "Founder & CEO, Hyperspell",
    description:
      "The investment insights are incredible. Astra helped me understand my portfolio and make smarter decisions. My net worth has grown significantly since I started.",
    image:
      "https://framerusercontent.com/images/Wlg9BXR0Vv9qa5GUgP5E34nd7H8.png?width=176&height=176",
  },
];

export type Feature = {
  id: string;
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  duration: number;
};

export type Outcome = {
  id: string;
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  duration: number;
};

export type HowItWork = {
  id: string;
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  duration: number;
};

export const features: Feature[] = [
  {
    id: "1",
    title: "Unifies Your Financial Ecosystem",
    description:
      "Astra begins by aggregating every account—banking, crypto, investments, and liabilities—into a single, sovereign view. This creates the baseline for AI analysis.",
    mediaType: "video",
    mediaSrc: "/img/features/1.mp4",
    duration: 5,
  },
  {
    id: "2",
    title: "Predicts Cash Flow Anomalies",
    description:
      "Stop reacting to expenses. Astra's predictive engine forecasts your cash flow 90 days out, highlighting potential deficits or surplus opportunities before they happen.",
    mediaType: "video",
    mediaSrc: "/img/features/2.mp4",
    duration: 6,
  },
  {
    id: "3",
    title: "Executes Micro-Savings Automatically",
    description:
      "When the market dips or your spending slows, Astra silently moves capital into high-yield allocations. You grow wealth without lifting a finger.",
    mediaType: "video",
    mediaSrc: "/img/features/3.mp4",
    duration: 7,
  },
];

export const outcomes: Outcome[] = [
  {
    id: "1",
    title: "Wealth That Compounds",
    description:
      "Your idle cash is automatically swept into high-yield allocations the moment it hits your account. No stagnant money.",
    mediaType: "video",
    mediaSrc: "/img/outcomes/1.mp4",
    duration: 5,
  },
  {
    id: "2",
    title: "Decisions Without Doubt",
    description:
      "Know exactly how a purchase impacts your 5-year plan before you swipe. Replace financial anxiety with data-driven confidence.",
    mediaType: "video",
    mediaSrc: "/img/outcomes/2.mp4",
    duration: 6,
  },
  {
    id: "3",
    title: "Years Saved, Not Just Dollars",
    description:
      "Astra users reach financial independence an average of 7 years faster than traditional manual budgeters.",
    mediaType: "video",
    mediaSrc: "/img/outcomes/3.mp4",
    duration: 7,
  },
];

export const howItWorks: HowItWork[] = [
  {
    id: "1",
    title: "Link",
    description:
      "Securely connect your bank accounts, credit cards, and investment portfolios via our encrypted gateway.",
    mediaType: "video",
    mediaSrc: "/img/features/1.mp4",
    duration: 5,
  },
  {
    id: "2",
    title: "X-Ray",
    description:
      "Astra scans 24 months of transaction history to identify subscriptions, hidden fees, and income patterns.",
    mediaType: "video",
    mediaSrc: "/img/features/2.mp4",
    duration: 6,
  },
  {
    id: "3",
    title: "Structure",
    description:
      "The AI automatically builds a custom budget and savings allocation plan based on your actual lifestyle.",
    mediaType: "video",
    mediaSrc: "/img/features/3.mp4",
    duration: 7,
  },
  {
    id: "4",
    title: "Auto-Pilot",
    description:
      "Astra takes over daily operations—automatically sweeping excess cash into investments and paying bills before they're due.",
    mediaType: "video",
    mediaSrc: "/img/features/3.mp4",
    duration: 7,
  },
];

export const useCases = [
  {
    id: "1",
    title: "Stabilize Irregular Income",
    description:
      "Perfect for the gig economy. Astra automatically sets aside taxes and 'runway' funds during high-earning months, so you can cover expenses seamlessly during low-earning months.",
    icon: Briefcase,
    iconTitle: "Freelancers & Creators",
  },
  {
    id: "2",
    title: "Zero-Drag Investing",
    description:
      "Don't let capital sit idle. Astra identifies 'lazy money' in your checking account and instantly sweeps it into your brokerage or high-yield savings based on your risk profile.",
    icon: TrendingUp,
    iconTitle: "High-Growth Investors",
  },
  {
    id: "3",
    title: "Accelerate Major Purchases",
    description:
      "Buying a home or planning a wedding? Astra reverse-engineers your deadline, creating a daily dynamic budget that ensures you hit your down payment target on time.",
    icon: Home,
    iconTitle: "Goal Achievers",
  },
];

export const pricing = [
  {
    id: "1",
    title: "Basis",
    icon: Layout,
    subtitle: "Best for individuals mastering their monthly cash flow.",
    ctaButton: "Start for Free",
    price: "$0",
    isPopular: false,
    subtext: "Starter features:",
    features: [
      "Connect up to 3 Accounts",
      "Basic AI Budgeting",
      "3-Month Cash Flow Forecast",
      "Standard Bank-Level Security",
      "Weekly Email Digest",
    ],
  },
  {
    id: "2",
    title: "Sovereign",
    icon: Atom,
    subtitle: "Best for automated wealth building and investing.",
    ctaButton: "Start 14-Day Trial",
    price: "$10",
    isPopular: true,
    subtext: "All features from Basis, plus:",
    features: [
      "Unlimited Account Connections",
      "Auto-Sweep Savings Automation",
      "AI Investment Rebalancing",
      "Tax-Loss Harvesting Alerts",
      "Custom 'What-If' Scenarios",
      "Priority Concierge Support",
    ],
  },
  {
    id: "3",
    title: "Legacy",
    icon: Sun,
    subtitle: "Best for complex portfolios and multi-generational planning.",
    ctaButton: "Contact Private Client",
    price: "$20",
    isPopular: false,
    subtext: "All the benefits of Sovereign, plus:",
    features: [
      "Estate & Trust Mapping",
      "Private Equity Asset Tracking",
      "Dedicated Human Wealth Strategist",
      "API Access for Family Offices",
      "Custom Tax Reporting",
    ],
  },
];
