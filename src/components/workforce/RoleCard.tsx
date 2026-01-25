import React from "react";
import { Card, CardContent } from "../ui/Card";
import InteractiveTilt from "../ui/InteractiveTilt";
import RoleCardPortrait from "./RoleCardPortrait";
import RoleCardInfo from "./RoleCardInfo";
import RoleCardMetrics from "./RoleCardMetrics";

interface Metric {
  value: string;
  label: string;
}

interface Role {
  id: string;
  title: string;
  icon: React.ReactNode;
  replaces: string;
  replacesValue: string;
  features: string[];
  metrics?: Metric[];
  image?: string;
}

interface RoleCardProps {
  role: Role;
}

/**
 * RoleCard Component
 * Redesigned into a high-end "AI Agent Dossier".
 */
const RoleCard: React.FC<RoleCardProps> = React.memo(({ role }) => {
  return (
    <InteractiveTilt className="h-full">
      <Card
        variant="white"
        className="group relative overflow-hidden bg-(--card)/40 backdrop-blur-2xl border border-(--border) hover:border-brand-primary/40 transition-all duration-700 h-full p-px rounded-[24px]"
      >
        {/* Iridescent Outer Border Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-brand-primary/20 via-transparent to-brand-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

        <div className="relative bg-(--card)/80 rounded-[23px] h-full flex flex-col overflow-hidden">
          <div className="relative h-32 md:h-40 shrink-0">
            <RoleCardPortrait
              image={role.image}
              title={role.title}
              icon={role.icon}
            />
          </div>

          <CardContent className="flex-1 p-4 md:p-6 flex flex-col">
            <RoleCardInfo
              title={role.title}
              replaces={role.replaces}
              features={role.features}
            />
            <div className="mt-auto">
              <RoleCardMetrics metrics={role.metrics} />
            </div>
          </CardContent>
        </div>
      </Card>
    </InteractiveTilt>
  );
});

export default RoleCard;
