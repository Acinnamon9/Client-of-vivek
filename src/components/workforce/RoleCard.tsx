import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/Card";

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
 * Features a horizontal profile layout with HUD elements and technical status readouts.
 */
const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  return (
    <Card
      variant="white"
      className="group relative overflow-hidden bg-(--card)/40 backdrop-blur-3xl border border-(--border)/50 hover:border-brand-primary/30 transition-all duration-700 h-full p-px rounded-[40px]"
    >
      {/* Iridescent Outer Border Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-primary/10 via-transparent to-brand-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

      <div className="relative bg-(--card)/80 rounded-[39px] h-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Agent Profile Portrait */}
        <div className="md:w-[42%] relative overflow-hidden bg-black/20 border-b md:border-b-0 md:border-r border-(--border)/30">
          {role.image ? (
            <div className="h-full aspect-square md:aspect-auto">
              <motion.img
                src={role.image}
                alt={role.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-80 group-hover:opacity-100"
              />
              {/* Scanline / Technical Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-primary/5 to-transparent h-20 -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-brand-primary/5">
              <div className="text-brand-primary opacity-20 transform scale-[3]">
                {role.icon}
              </div>
            </div>
          )}

          {/* HUD Corner Accents on Portrait */}
          <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-brand-primary/30 group-hover:border-brand-primary/60 transition-colors"></div>
          <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-brand-primary/30 group-hover:border-brand-primary/60 transition-colors"></div>

          {/* Role Icon Badge */}
          <div className="absolute top-6 right-6 w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            {role.icon}
          </div>
        </div>

        {/* Right Side: Agent Capabilities & Status */}
        <CardContent className="flex-1 p-8 md:p-10 flex flex-col">
          {/* Header Area */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-success animate-pulse"></span>
              <span className="text-[10px] font-black tracking-[0.4em] text-brand-success uppercase">
                Agent Active
              </span>
            </div>
            <h3 className="text-3xl font-black text-(--foreground) tracking-tighter uppercase leading-none mb-4 group-hover:text-brand-primary transition-colors duration-500">
              {role.title}
            </h3>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl">
              <span className="text-[9px] font-black text-(--muted-foreground) uppercase tracking-widest">
                Efficiency Gain:
              </span>
              <span className="text-xs font-black text-brand-primary uppercase">
                Replaces {role.replaces} ({role.replacesValue})
              </span>
            </div>
          </div>

          {/* Capabilities Manifest */}
          <div className="space-y-3.5 mb-10 flex-1">
            {role.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group/feat transition-all duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/30 group-hover/feat:bg-brand-primary transition-colors"></div>
                <p className="text-sm md:text-base text-(--muted-foreground) font-bold group-hover/feat:text-(--foreground) transition-colors">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Operational Metrics */}
          {role.metrics && (
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-(--border)/50">
              {role.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="relative p-4 rounded-2xl bg-black/10 border border-(--border)/50 group-hover:border-brand-primary/20 transition-all overflow-hidden"
                >
                  <div className="relative z-10">
                    <span className="block text-2xl font-black text-brand-primary tracking-tighter">
                      {metric.value}
                    </span>
                    <span className="text-[9px] text-(--muted-foreground) font-black uppercase tracking-[0.2em]">
                      {metric.label}
                    </span>
                  </div>
                  {/* Subtle Metric Glow */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-brand-primary/5 rounded-bl-[20px]"></div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default RoleCard;
