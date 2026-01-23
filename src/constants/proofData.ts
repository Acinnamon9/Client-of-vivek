export interface ProofMetric {
  value: string;
  label: string;
}

export interface ProofCaseStudy {
  logo: string;
  sourceLogo?: string;
  title: string;
  metrics: ProofMetric[];
  challenge: string;
  solution: string;
  solutionPoints: string[];
  testimonial: string;
  author: string;
  role: string;
}

export const caseStudy: ProofCaseStudy = {
  logo: "DANUBE",
  sourceLogo:
    "https://yt3.googleusercontent.com/ytc/AIdro_n-x-MUm9n5dl840F716JA1WeMMDgRtqwCxj98hfxchN1I=s900-c-k-c0x00ffffff-no-rj",
  title: "How Danube Properties Accelerated Sales by $5.2 Million in 30 Days",
  metrics: [
    { value: "$5.2M", label: "Monthly Revenue Increase" },
    { value: "1,240", label: "Qualified Prospects" },
    { value: "480", label: "Meeting Booked (AI)" },
  ],
  challenge:
    "Danube was processing thousands of raw leads but struggled with slow response times. Their manual outreach team couldn't keep up, leading to qualified prospects cooling off and massive budget leakage.",
  solution:
    "They integrated the Ravan.ai Unified Workforce to handle 100% of incoming lead qualification and instantaneous booking.",
  solutionPoints: [
    "Average response time dropped from 4 hours to sub-120 seconds",
    "24/7 autonomous engagement across multiple timezones",
    "Deep CRM integration for automated deal routing",
  ],
  testimonial:
    "Ravan.ai transformed our sales efficiency. By removing the bottleneck of initial manual qualification, our senior closers can now focus exclusively on high-value interactions. It's significantly more effective than our previous outbound team.",
  author: "Adel Sajan",
  role: "Managing Director, Danube Properties",
};

export const trustedLogos = ["DANUBE", "EMAAR", "DAMAC", "SOBHA", "NAKHEEL"];
