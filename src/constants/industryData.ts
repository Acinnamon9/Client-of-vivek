export interface IndustryMetric {
  value: string;
  label: string;
  mechanism?: string;
}

export interface Industry {
  id: string;
  label: string;
  title: string;
  tags: string[];
  metrics: IndustryMetric[];
  buttonText: string;
  image: string;
}

export const UNIVERSAL_BASELINE: Industry = {
  id: "global",
  label: "Universal Baseline",
  title: "Universal Infrastructure Gains",
  tags: ["Cross-Industry Native", "Immediate Deployment", "Baseline ROI"],
  metrics: [
    {
      value: "+25%",
      label: "Contact Rate",
      mechanism: "via <2min response time",
    },
    {
      value: "–40%",
      label: "Missed Opportunities",
      mechanism: "via 24/7 overflow capture",
    },
    {
      value: "–30%",
      label: "Labor Overhead",
      mechanism: "via automated screening",
    },
    {
      value: "+15%",
      label: "Baseline Conversion",
      mechanism: "via consistent follow-up",
    },
  ],
  buttonText: "See Universal Impact",
  image:
    "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Global Status.png",
};

export const industries: Industry[] = [
  {
    id: "real-estate",
    label: "Real Estate",
    title: "Speed-to-Lead Mastery",
    tags: ["Instant <2m Response", "CRM Auto-Sync", "20 hrs saved/week"],
    metrics: [
      {
        value: "+30–60%",
        label: "Lead Contact Rate",
        mechanism: "via <2m auto-dialer",
      },
      {
        value: "+20–35%",
        label: "Appointments Booked",
        mechanism: "via recursive calendar sync",
      },
    ],
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Real Estate.png",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Patient Care Optimization",
    tags: ["Swift Scheduling", "Auto-Reminders", "Front-Desk Relief"],
    metrics: [
      {
        value: "–20–35%",
        label: "No-Show Rate",
        mechanism: "via multi-channel logic",
      },
      {
        value: "2–4x",
        label: "Booking Speed",
        mechanism: "via instant slot-selection",
      },
    ],
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Healthcare.png",
  },
  {
    id: "finance",
    label: "Financial Services",
    title: "Seamless Application Handling",
    tags: ["Document Collection", "Live Transcription", "Compliance-Ready"],
    metrics: [
      {
        value: "+25–45%",
        label: "Completion Rate",
        mechanism: "via OCR document assist",
      },
      {
        value: "–40–60%",
        label: "Handling Cost",
        mechanism: "via automated screening",
      },
    ],
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Lending and Finance.png",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    title: "High-Ticket Recovery & COD",
    tags: ["Cart Recovery Calls", "COD Confirmation", "RTO Reduction"],
    metrics: [
      {
        value: "+10–25%",
        label: "Recovery Rate",
        mechanism: "via abandonment triggers",
      },
      {
        value: "–20–40%",
        label: "RTO Rate",
        mechanism: "via COD verification IVR",
      },
    ],
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Global Status.png",
  },
  {
    id: "supply-chain",
    label: "Supply Chain & Delivery",
    title: "Last-Mile Communication",
    tags: ["Delivery Alerts", "Address Resolution", "Dispatch Efficiency"],
    metrics: [
      {
        value: "+10–25%",
        label: "First-Attempt Success",
        mechanism: "via ETA-sync notifications",
      },
      {
        value: "–30–50%",
        label: "Resolution Time",
        mechanism: "via smart routing rules",
      },
    ],
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Transportation and Logistics.png",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    title: "24/7 Booking Intelligence",
    tags: ["Capture Missed Calls", "Upsell Attach", "Review Generation"],
    metrics: [
      {
        value: "+15–30%",
        label: "Capture Rate",
        mechanism: "via 24/7 AI attendant",
      },
      {
        value: "–40–70%",
        label: "Missed-Call Loss",
        mechanism: "via overflow automation",
      },
    ],
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Global Status.png",
  },
  {
    id: "automotive",
    label: "Automotive",
    title: "Service & Sales Continuity",
    tags: ["Service Reminders", "Maintenance Sync", "Sales Follow-up"],
    metrics: [
      {
        value: "+20–40%",
        label: "Service Bookings",
        mechanism: "via DMS-sync alerts",
      },
      {
        value: "8–15 hrs",
        label: "Saved Weekly",
        mechanism: "via auto-followup cycles",
      },
    ],
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Global Status.png",
  },
  {
    id: "pro-services",
    label: "Professional Services",
    title: "Inbound Lead Capture",
    tags: ["Lead Qualification", "Auto-Summarized", "Missed-Call Loss Zero"],
    metrics: [
      {
        value: "+25–50%",
        label: "Inbound Capture",
        mechanism: "via live lead-scoring",
      },
      {
        value: "–50–80%",
        label: "Missed-Call Loss",
        mechanism: "via instant response API",
      },
    ],
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Global Status.png",
  },
];
