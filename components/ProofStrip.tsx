
import React from 'react';
import { Building2, Layers, PackageCheck, ShieldCheck, Clock } from 'lucide-react';

const ProofStrip: React.FC = () => {
  const metrics = [
    { label: "Major Projects", value: "12+", icon: <Building2 className="w-5 h-5" /> },
    { label: "BIM Level", value: "LOD 400", icon: <Layers className="w-5 h-5" /> },
    { label: "Tender Packages", value: "8 Delivered", icon: <PackageCheck className="w-5 h-5" /> },
    { label: "Permits Secured", value: "100%", icon: <ShieldCheck className="w-5 h-5" /> },
    { label: "Fast-Tracked", value: "4 Projects", icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 border-l-0 md:border-l border-white/10 md:pl-6 first:border-0">
              <div className="bg-white/10 p-2 rounded-lg inline-block">
                {metric.icon}
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-serif font-bold">{metric.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">{metric.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProofStrip;
