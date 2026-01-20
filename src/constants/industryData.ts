export interface IndustryMetric {
  value: string;
  label: string;
}

export interface IndustryAction {
  title: string;
  time: string;
}

export interface Industry {
  id: string;
  label: string;
  title: string;
  tags: string[];
  metrics: IndustryMetric[];
  action: IndustryAction;
  buttonText: string;
  image: string;
}

export const industries: Industry[] = [
  {
    id: "global",
    label: "Global Stats",
    title: "Real-Time Infrastructure Performance",
    tags: ["Global API Hub", "Multi-Channel Sync", "Live Analytics"],
    metrics: [
      { value: "1.2M+", label: "API Calls/Mo" },
      { value: "99.9%", label: "Uptime Reliability" },
    ],
    action: {
      title: "System Deep Dive",
      time: "03:12 • Infrastructure Overview",
    },
    buttonText: "Explore the Platform",
    image: "/Global Status.png",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    title: "Your Always-On Property Concierge",
    tags: ["Qualified Leads", "FAQ on Listings", "Event Confirmation"],
    metrics: [
      { value: "400%", label: "in CVR" },
      { value: "25–35%", label: "in show-up rate" },
    ],
    action: {
      title: "Hear It In Action",
      time: "01:53 • Real Estate AI Rep",
    },
    buttonText: "Book a Meeting",
    image: "/Real Estate.jpg",
  },
  {
    id: "gaming",
    label: "Gaming & Casinos",
    title: "High-Stakes Player Engagement",
    tags: ["VIP Concierge", "Retention SMS", "Prizing Notifications"],
    metrics: [
      { value: "3.2x", label: "LTV increase" },
      { value: "55%", label: "in reactivation rate" },
    ],
    action: { title: "Hear It In Action", time: "02:15 • Casino VIP Rep" },
    buttonText: "Book a Meeting",
    image: "/Gaming and Casinos.jpg",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Patient Care Coordination",
    tags: ["Pre-Qualification", "Appointment Reminders", "Post-Op Follow-up"],
    metrics: [
      { value: "92%", label: "show-up rate" },
      { value: "60%", label: "reduction in no-shows" },
    ],
    action: {
      title: "Hear It In Action",
      time: "01:42 • Clinic AI Assistant",
    },
    buttonText: "Book a Meeting",
    image: "/Healthcare.png",
  },
  {
    id: "finance",
    label: "Lending & Finance",
    title: "Lending & Finance Velocity",
    tags: ["Credit Pre-Check", "Doc Collection", "Rate Inquiries"],
    metrics: [
      { value: "3x", label: "Faster Underwriting" },
      { value: "$45k", label: "saved in ops cost" },
    ],
    action: { title: "Hear It In Action", time: "02:30 • Finance AI Broker" },
    buttonText: "Book a Meeting",
    image: "https://loremflickr.com/800/600/dashboard,finance,bank",
  },
  {
    id: "logistics",
    label: "Transportation & Logistics",
    title: "Global Logistics Efficiency",
    tags: ["Fleet Updates", "Route Inquiries", "Delivery Alerts"],
    metrics: [
      { value: "24/7", label: "Fleet Coverage" },
      { value: "48%", label: "reduction in dispatch errors" },
    ],
    action: {
      title: "Hear It In Action",
      time: "01:58 • Logistics Dispatch AI",
    },
    buttonText: "Book a Meeting",
    image: "/Transportation and Logistics.png",
  },
];
