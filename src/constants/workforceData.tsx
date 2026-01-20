import React from 'react';

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
}

export const workforceRoles: WorkforceRole[] = [
  {
    id: "influencer",
    title: "AI Social Media Influencer",
    replaces: "Ad Agency",
    replacesValue: "$5k/mo",
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
    features: [
      "Calls leads within 3 minutes",
      "Qualifies prospects via SMS/Call",
      "Books appointments on your calendar",
    ],
    metrics: [
      { value: "24/7", label: "Availability" },
      { value: "5m", label: "Response Time" },
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
    features: [
      "Answers inbound calls instantly",
      "Routes calls to appropriate staff",
      "Handles scheduling & inquiries",
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
    features: [
      "Resolves common issues instantly",
      "Available across Chat, SMS, Email",
      "Escalates complex issues to humans",
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
];
