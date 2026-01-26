import React from "react";

export interface WorkforceMetric {
  value: string;
  label: string;
}

export interface WorkforceRole {
  id: string;
  title: string;
  replaces: string;
  replacesValue: string;
  features: string[];
  metrics?: WorkforceMetric[];
  icon: React.ReactNode;
  image?: string;
}

export const workforceRoles: WorkforceRole[] = [
  {
    id: "influencer",
    title: "AI Social Media Influencer",
    replaces: "Ad Agency",
    replacesValue: "$5k/mo",
    image:
      "https://vite-react-kkfb43u6q-abhijeets-projects-1922facd.vercel.app/assets/Social media influencer.png",
    features: [
      "Creates & posts viral content daily",
      "Manages paid ad campaigns 24/7",
      "Generates high-intent inbound leads",
    ],
    metrics: [
      { value: "10k+", label: "Views/Day" },
      { value: "3.5%", label: "CTR" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "sales-rep",
    title: "AI Sales Representative",
    replaces: "3 SDRs",
    replacesValue: "$15k/mo",
    image:
      "https://vite-react-kkfb43u6q-abhijeets-projects-1922facd.vercel.app/assets/Sales representative.png",
    features: [
      "Calls leads within 3 minutes",
      "Qualifies prospects via SMS/Call",
      "Books appointments on your calendar",
    ],
    metrics: [
      { value: "24/7", label: "Availability" },
      { value: "3m", label: "Response Time" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: "receptionist",
    title: "AI Receptionist",
    replaces: "Front Desk",
    replacesValue: "$4k/mo",
    image:
      "https://vite-react-kkfb43u6q-abhijeets-projects-1922facd.vercel.app/assets/Receptionist.png",
    features: [
      "Answers inbound calls instantly",
      "Routes calls to appropriate staff",
      "Handles scheduling & inquiries",
    ],
    metrics: [
      { value: "Instant", label: "Inbound Pickup" },
      { value: "0", label: "Dropped Calls" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "customer-service",
    title: "AI Customer Service",
    replaces: "Support Rep",
    replacesValue: "$4k/mo",
    image:
      "https://vite-react-kkfb43u6q-abhijeets-projects-1922facd.vercel.app/assets/Customer service.png",
    features: [
      "Resolves common issues instantly",
      "Available across Chat, SMS, Email",
      "Escalates complex issues to humans",
    ],
    metrics: [
      { value: "85%", label: "Resolution Rate" },
      { value: "Real-Time", label: "Support" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "content-strategist",
    title: "AI Content Strategist",
    replaces: "Marketing Team",
    replacesValue: "$6k/mo",
    image:
      "https://vite-react-knv2dkr5t-abhijeets-projects-1922facd.vercel.app/assets/Content Strategist.png",
    features: [
      "Plans content calendars end-to-end",
      "Analyzes trends & competitors",
      "Optimizes hooks, captions & CTAs",
    ],
    metrics: [
      { value: "100%", label: "Data-Driven" },
      { value: "Weekly", label: "Planning" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M4 9h16" />
        <path d="M9 4v16" />
      </svg>
    ),
  },
  {
    id: "lead-nurturer",
    title: "AI Lead Nurturer",
    replaces: "Email + WhatsApp Rep",
    replacesValue: "$5k/mo",
    image:
      "https://vite-react-knv2dkr5t-abhijeets-projects-1922facd.vercel.app/assets/Lead Nurturer.png",
    features: [
      "Runs multi-step follow-up sequences",
      "Warms cold & semi-warm leads",
      "Hands off only sales-ready prospects",
    ],
    metrics: [
      { value: "45%", label: "Conv. Uplift" },
      { value: "60d", label: "Follow-up" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "appointment-setter",
    title: "AI Appointment Setter",
    replaces: "Admin + SDR",
    replacesValue: "$8k/mo",
    image:
      "https://vite-react-knv2dkr5t-abhijeets-projects-1922facd.vercel.app/assets/Sales representative.png",
    features: [
      "Confirms, reschedules & follows up",
      "Reduces no-shows automatically",
      "Handles timezone & availability logic",
    ],
    metrics: [
      { value: "-40%", label: "No-Show Rate" },
      { value: "Smart", label: "Scheduling" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "funnel-optimizer",
    title: "AI Funnel Optimizer",
    replaces: "CRO Specialist",
    replacesValue: "$10k/mo",
    image:
      "https://vite-react-knv2dkr5t-abhijeets-projects-1922facd.vercel.app/assets/AB tester.png",
    features: [
      "Analyzes drop-offs across funnel",
      "Suggests copy & flow improvements",
      "Runs continuous A/B testing",
    ],
    metrics: [
      { value: "12x", label: "Faster Testing" },
      { value: "Auto", label: "Experiments" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 7h-9L9 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
      </svg>
    ),
  },
  {
    id: "community-manager",
    title: "AI Community Manager",
    replaces: "Social Manager",
    replacesValue: "$4k/mo",
    image:
      "https://vite-react-knv2dkr5t-abhijeets-projects-1922facd.vercel.app/assets/Customer service.png",
    features: [
      "Replies to comments & DMs instantly",
      "Moderates spam & negativity",
      "Turns engagement into leads",
    ],
    metrics: [
      { value: "24/7", label: "Engagement" },
      { value: "100%", label: "Brand Safe" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "onboarding-specialist",
    title: "AI Onboarding Specialist",
    replaces: "Customer Success Rep",
    replacesValue: "$6k/mo",
    image:
      "https://vite-react-knv2dkr5t-abhijeets-projects-1922facd.vercel.app/assets/Onboarding specialist.png",
    features: [
      "Guides new users step-by-step",
      "Explains features contextually",
      "Reduces churn in first 14 days",
    ],
    metrics: [
      { value: "-25%", label: "Churn Rate" },
      { value: "Rapid", label: "Activation" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "kb-builder",
    title: "AI Knowledge Base Builder",
    replaces: "Technical Writer",
    replacesValue: "$5k/mo",
    image:
      "https://vite-react-knv2dkr5t-abhijeets-projects-1922facd.vercel.app/assets/Content Strategist.png",
    features: [
      "Auto-creates FAQs from conversations",
      "Keeps docs updated in real time",
      "Improves self-serve resolution",
    ],
    metrics: [
      { value: "85%", label: "Self-Serve" },
      { value: "Real-Time", label: "Updates" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: "outbound-prospector",
    title: "AI Outbound Prospector",
    replaces: "Cold Outreach Team",
    replacesValue: "$12k/mo",
    image:
      "https://vite-react-knv2dkr5t-abhijeets-projects-1922facd.vercel.app/assets/Lead Nurturer.png",
    features: [
      "Finds & enriches leads",
      "Personalizes cold emails & messages",
      "Runs outreach at scale",
    ],
    metrics: [
      { value: "1k+", label: "Leads/Mo" },
      { value: "99%", label: "Deliverability" },
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];
