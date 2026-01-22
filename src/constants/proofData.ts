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
  title: "How Danube Properties Generated $5 Million+ in Sales in 30 Days",
  metrics: [
    { value: "$5.2M", label: "Revenue Generated" },
    { value: "1,240", label: "Qualified Leads" },
    { value: "480", label: "Appointments Booked" },
  ],
  challenge:
    "Danube was drowning in leads but converting poorly. Their sales team couldn't follow up fast enough, resulting in wasted ad spend and lost opportunities.",
  solution:
    "They deployed Ravan.ai's AI Sales Rep to handle initial outreach and qualification.",
  solutionPoints: [
    "Instant lead response (under 2 mins)",
    "24/7 qualification of prospects",
    "Automated booking directly to sales calendars",
  ],
  testimonial:
    "We were skeptical at first, but the results are undeniable. Ravan.ai didn't just replace our SDRs, it outperformed them by a factor of 10. Our sales team now only talks to qualified leads.",
  author: "Sarah J.",
  role: "VP of Sales, Danube Properties",
};

export const trustedLogos = ["DANUBE", "EMAAR", "DAMAC", "SOBHA", "NAKHEEL"];
