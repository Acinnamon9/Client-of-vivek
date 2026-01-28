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
    id: "sales-rep",
    title: "AI Sales Representative",
    replaces: "Outbound SDR Team",
    replacesValue: "$15k/mo",
    image: "/assets/Sales representative.png",
    features: [
      "Calls inbound leads in under 3 minutes",
      "Qualifies prospects via logic-based voice",
      "Books appointments directly to calendar",
    ],
    metrics: [
      { value: "3m", label: "Response Speed" },
      { value: "24/7", label: "Outbound Ops" },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: "receptionist",
    title: "AI Receptionist",
    replaces: "Front Desk & Admin",
    replacesValue: "$4k/mo",
    image: "/assets/Receptionist.png",
    features: [
      "Answers every inbound call instantly",
      "Routes inquiries with zero hold time",
      "Handles scheduling & complex FAQs",
    ],
    metrics: [
      { value: "100%", label: "Pickup Rate" },
      { value: "0s", label: "Wait Time" },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "customer-service",
    title: "AI Support Agent",
    replaces: "Tier 1 Support Staff",
    replacesValue: "$4k/mo",
    image: "/assets/Customer service.png",
    features: [
      "Resolves common issues 24/7/365",
      "Available via Chat, SMS, and Email",
      "Instant handoff for complex tickets",
    ],
    metrics: [
      { value: "85%", label: "Self-Resolution" },
      { value: "Real-Time", label: "Availability" },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "influencer",
    title: "AI Social Media Influencer",
    replaces: "Marketing & Ad Agency",
    replacesValue: "$5k/mo",
    image: "/assets/Social media influencer.png",
    features: [
      "Creates & posts viral content daily",
      "Manages paid ad campaigns 24/7",
      "Generates high-intent inbound leads",
    ],
    metrics: [
      { value: "10k+", label: "Daily Views" },
      { value: "3.5%", label: "Direct CTR" },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "lead-nurturer",
    title: "AI Lead Nurturer",
    replaces: "Email & WhatsApp SDR",
    replacesValue: "$5k/mo",
    image: "/assets/Lead Nurturer.png",
    features: [
      "Runs 60-day follow-up sequences",
      "Warms cold leads with context",
      "Hands off only sales-ready prospects",
    ],
    metrics: [
      { value: "45%", label: "Conv. Uplift" },
      { value: "60d", label: "Max Sequence" },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "appointment-setter",
    title: "AI Appointment Setter",
    replaces: "Administrative SDR",
    replacesValue: "$8k/mo",
    image: "/assets/Sales representative.png",
    features: [
      "Eliminates no-shows via smart follow-up",
      "Syncs availability across team",
      "Handles reschedules automatically",
    ],
    metrics: [
      { value: "-40%", label: "No-Show Rate" },
      { value: "Instant", label: "Sync" },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    replaces: "CRO Specialist Staff",
    replacesValue: "$10k/mo",
    image: "/assets/AB tester.png",
    features: [
      "Identifies friction in buyers journey",
      "Suggests copy & flow improvements",
      "Runs continuous A/B testing cycles",
    ],
    metrics: [
      { value: "12x", label: "Faster Testing" },
      { value: "Auto", label: "Iteration" },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 7h-9L9 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
      </svg>
    ),
  },
  {
    id: "onboarding-specialist",
    title: "AI Onboarding Expert",
    replaces: "Customer Success Team",
    replacesValue: "$6k/mo",
    image: "/assets/Onboarding specialist.png",
    features: [
      "Guides new users step-by-step 24/7",
      "Reduces day-0 churn via education",
      "Auto-resolves integration friction",
    ],
    metrics: [
      { value: "-25%", label: "Early Churn" },
      { value: "Rapid", label: "Activation" },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];
