import React from "react";
import { Card, CardHeader, CardContent } from "../ui/Card";

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
}

interface RoleCardProps {
  role: Role;
}

const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  return (
    <Card
      variant="white"
      className="group hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/5 h-full flex flex-col"
    >
      <CardHeader className="flex flex-row items-center justify-between border-b border-(--border) bg-linear-to-r from-(--foreground)/5 to-transparent">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shrink-0">
            {role.icon}
          </div>
          <div>
            <h3 className="text-2xl font-black text-(--foreground) tracking-tight uppercase">
              {role.title}
            </h3>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-success/10 text-brand-success rounded-lg text-xs font-black uppercase tracking-wider mt-1 border border-brand-success/10">
              Replaces: {role.replaces} ({role.replacesValue})
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grow flex flex-col justify-between pt-8">
        <div className="space-y-4 mb-8">
          {role.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-3.5 bg-(--muted)/20 rounded-2xl transition-all duration-300 hover:bg-(--muted)/40"
            >
              <span className="text-brand-primary font-black text-xl leading-none">
                ✓
              </span>
              <p className="text-(--foreground) font-medium leading-tight opacity-90">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {role.metrics && (
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-(--border)">
            {role.metrics.map((metric, i) => (
              <div
                key={i}
                className="text-center p-4 bg-(--muted)/10 rounded-2xl border border-(--border)"
              >
                <span className="block text-2xl font-black text-brand-primary mb-0.5">
                  {metric.value}
                </span>
                <span className="text-[10px] text-(--muted-foreground) font-black uppercase tracking-widest">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RoleCard;
