/**
 * @file journeyData.ts
 * @description Constants and interfaces for the multi-narrative Journey section.
 */

export interface NarrativeStep {
    label: string; // e.g. "01 / SITUATION"
    time?: string; // Optional time marker
    event: string;
    result: string;
    type: "won" | "lost";
    image: string;
}

export interface Narrative {
    id: string;
    tabLabel: string;
    title: string;
    subtitle: string;
    metricLabel: string;
    metricValue: string;
    heroImage: string;
    steps: NarrativeStep[];
}

export const JOURNEY_NARRATIVES: Narrative[] = [
    {
        id: "desire-decay",
        tabLabel: "⏱ Lead Goes Cold",
        title: "The Decay of Desire",
        subtitle: "Interest is perishable. Every second without response rewrites the buyer's intent.",
        metricLabel: "Optimal Outcome",
        metricValue: "< 5s",
        heroImage: "/assets/Lead submits form.jpg",
        steps: [
            {
                label: "01 / PEAK",
                time: "3 min",
                event: "Peak Interest Window",
                result: "Your SDR hasn't seen it yet",
                type: "lost",
                image: "/assets/Peak Interest Window.jpg",
            },
            {
                label: "02 / SPOILAGE",
                time: "1 hour",
                event: "Lead Goes Cold",
                result: "21x less likely to convert",
                type: "lost",
                image: "/assets/Lead Goes Cold.jpg",
            },
            {
                label: "03 / FAILURE",
                time: "24 hours",
                event: "First Contact Attempt",
                result: "Already bought from competitor",
                type: "lost",
                image: "/assets/First Contact Attempt.jpg",
            },
        ],
    },
    {
        id: "human-bottleneck",
        tabLabel: "🧠 Human Bottleneck",
        title: "The Hidden Bottleneck",
        subtitle: "Leads don't die because companies don't care. They die because humans forget, hesitate, or misplace them.",
        metricLabel: "Operational Impact",
        metricValue: "42%",
        heroImage: "/assets/Sales representative.png",
        steps: [
            {
                label: "01 / HESITATION",
                event: "Rep Freezes",
                result: "Unsure of the right pitch",
                type: "lost",
                image: "/assets/Guy.png",
            },
            {
                label: "02 / OVERSIGHT",
                event: "The 'Later' List",
                result: "Lead buried in inbox",
                type: "lost",
                image: "/assets/Lead Nurturer.png",
            },
            {
                label: "03 / SILENCE",
                event: "Broken Follow-up",
                result: "No single owner identified",
                type: "lost",
                image: "/assets/Woman.png",
            },
        ],
    },
    {
        id: "trust-erosion",
        tabLabel: "🔁 Trust Erosion",
        title: "The Friction Trap",
        subtitle: "Every handoff degrades trust. Every repeated question feels like incompetence to the caller.",
        metricLabel: "Trust Integrity",
        metricValue: "-60%",
        heroImage: "/assets/Customer service.png",
        steps: [
            {
                label: "01 / REPETITION",
                event: "The Repeat Question",
                result: "Caller explains problem again",
                type: "lost",
                image: "/assets/Receptionist.png",
            },
            {
                label: "02 / FRAGMENTATION",
                event: "Broken Context",
                result: "Rep has zero shared history",
                type: "lost",
                image: "/assets/Onboarding specialist.png",
            },
            {
                label: "03 / ABANDONMENT",
                event: "Friction Exit",
                result: "Caller feels unsafe buying",
                type: "lost",
                image: "/assets/Customer service.png",
            },
        ],
    },
];
