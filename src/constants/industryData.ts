export interface IndustryMetric {
  value: string;
  label: string;
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
    buttonText: "Explore the Platform",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Global Status.png",
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
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Real Estate.png",
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
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Gaming and Casinos.jpg",
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
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Healthcare.png",
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
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Lending and Finance.png",
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
    buttonText: "Book a Meeting",
    image:
      "https://vite-react-88wqhw1cu-abhijeets-projects-1922facd.vercel.app/Transportation and Logistics.png",
  },
];
