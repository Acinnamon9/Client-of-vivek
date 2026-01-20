/**
 * @file leadProblemData.tsx
 * @description Constants and interfaces defining the data for the "Lead Problem" section.
 * This includes comparison stats between manual and AI systems, timeline events, failure metrics, and funnel data.
 */

import React from "react";

/**
 * Represents a single statistic with a label and its corresponding value.
 */
export interface LeadProblemStat {
  label: string;
  value: string;
}

/**
 * Defines the structure for comparing different lead management systems (e.g., Manual vs AI).
 */
export interface LeadProblemSystem {
  id: string;
  title: string;
  stats: LeadProblemStat[];
  costPerShow: string;
  colorClass: string;
}

/**
 * Represents an event in the lead conversion timeline, used to illustrate 'won' or 'lost' opportunities.
 */
export interface LeadProblemTimelineEvent {
  time: string;
  event: string;
  result: string;
  type: "won" | "lost";
  image?: string;
}

/**
 * Structure for cards highlighting specific failures in traditional lead management.
 */
export interface LeadProblemFailureCard {
  title: string;
  desc: string;
  metric: string;
  label: string;
  icon: React.ReactNode;
  image?: string;
}

/**
 * Defines a stage within a lead funnel visualization.
 */
export interface LeadProblemFunnelStage {
  width: string;
  top: number;
  text: string;
  subText: string;
  badge?: string;
}

/**
 * Data for comparing the current manual system against the AI sales system.
 */
export const mathComparison: LeadProblemSystem[] = [
  {
    id: "current",
    title: "YOUR CURRENT SYSTEM",
    costPerShow: "$166",
    colorClass: "text-[#ff0000]",
    stats: [
      { label: "5 SDRs Salary", value: "$25,000/mo" },
      { label: "Appointments Booked", value: "250/mo" },
      { label: "Show Rate", value: "60%" },
      { label: "Actual Shows", value: "150/mo" },
    ],
  },
  {
    id: "ai",
    title: "AI SALES SYSTEM",
    costPerShow: "$1.14",
    colorClass: "text-[#00aa00]",
    stats: [
      { label: "AI Team Cost", value: "$497/mo" },
      { label: "Appointments Booked", value: "500+/mo" },
      { label: "Show Rate", value: "87%" },
      { label: "Actual Shows", value: "435/mo" },
    ],
  },
];

/**
 * Sequential events demonstrating typical failures in speed-to-lead for manual systems.
 */
export const timelineEvents: LeadProblemTimelineEvent[] = [
  {
    time: "0 min",
    event: "Lead Submits Form",
    result: "AI calls immediately",
    type: "won",
    image: "/Lead submits form.jpg",
  },
  {
    time: "3 min",
    event: "Peak Interest Window",
    result: "Your SDR hasn't seen it yet",
    type: "lost",
    image: "/Peak Interest Window.jpg",
  },
  {
    time: "1 hour",
    event: "Lead Goes Cold",
    result: "21x less likely to convert",
    type: "lost",
    image: "/Lead Goes Cold.jpg",
  },
  {
    time: "24 hours",
    event: "First Contact Attempt",
    result: "Already bought from competitor",
    type: "lost",
    image: "/First Contact Attempt.jpg",
  },
];

/**
 * Highlight metrics for specific failure points in the current sales process.
 */
export const failureCards: LeadProblemFailureCard[] = [
  {
    title: "Speed to Lead Failure",
    desc: "MIT research: Contact within 5 minutes = 21x more likely to convert. Your average: 3+ hours.",
    metric: "78%",
    label: "NEVER CONTACTED",
    image: "/Woman.png",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Follow-Up Failure",
    desc: "80% of sales require 12+ touches. Your team averages 2 before giving up.",
    metric: "12x",
    label: "MORE TOUCHES NEEDED",
    image: "/Guy.png",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
  },
  {
    title: "Cost Per Appointment",
    desc: "You're paying $166 per show while AI delivers them for $1.14. That's 145x overpayment.",
    metric: "$166",
    label: "YOUR COST PER SHOW",
    image: "/Guy and woman.png",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

/**
 * Conversion funnel stages for the manual/traditional sales process.
 */
export const manualFunnel: LeadProblemFunnelStage[] = [
  { width: "90%", top: 0, text: "1000 Leads", subText: "$50K spent" },
  { width: "50%", top: 80, text: "350 Contacted", subText: "3+ hours delay" },
  {
    width: "35%",
    top: 160,
    text: "200 Qualified",
    subText: "2 follow-ups only",
  },
  { width: "20%", top: 240, text: "100 Booked", subText: "" },
  { width: "15%", top: 320, text: "60 Shows", subText: "" },
];

/**
 * Conversion funnel stages for the AI-driven sales process, showing improved efficiency.
 */
export const aiFunnel: LeadProblemFunnelStage[] = [
  {
    width: "100%",
    top: 0,
    text: "3000 Leads",
    subText: "$50K spent",
    badge: "AI Influencer Ads",
  },
  { width: "85%", top: 80, text: "2850 Contacted", subText: "3 minutes" },
  { width: "70%", top: 160, text: "600 Qualified", subText: "12+ touches" },
  { width: "55%", top: 240, text: "300 Booked", subText: "Automated" },
  { width: "40%", top: 320, text: "261 Shows", subText: "87% attend" },
];
