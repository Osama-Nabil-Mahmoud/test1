
import React from 'react';
import { ArrowRight, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const proofChips = [
    "BIM Management",
    "Tender Packages",
    "Code Compliance",
    "Multi-disciplinary Coordination"
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 overflow-hidden pt-20">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 transform translate-x-20 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/5 inline-block px-3 py-1 rounded">
              Available for Hire • UK Right-to-Work
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight">
              Technical Architect <br />
              <span className="text-muted-foreground italic">& BIM Specialist</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              7+ years delivering complex commercial and infrastructure projects across MENA and the UK. 
              Specializing in <span className="text-foreground font-normal underline decoration-slate-300 underline-offset-4">high-LOD modeling</span>, technical detailing, and digital delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {proofChips.map((chip) => (
              <span key={chip} className="text-[11px] font-semibold uppercase tracking-wider border border-slate-200 px-3 py-1.5 rounded-full text-slate-600 bg-white">
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/projects" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold hover:gap-4 transition-all">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-200 px-8 py-4 rounded font-bold hover:bg-slate-50 transition-all">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a href="mailto:alex@example.com" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
              alex@example.com
            </a>
            <a href="https://linkedin.com" target="_blank" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
              LinkedIn
            </a>
          </div>
        </div>

        {/* Visual proof element for large screens */}
        <div className="hidden lg:block lg:col-span-4 relative h-[600px] border border-slate-100 bg-white shadow-2xl overflow-hidden rounded-2xl group">
           <img 
              src="https://picsum.photos/seed/archi-hero/800/1200" 
              alt="Technical Drawing Showcase" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
           <div className="absolute bottom-8 left-8 text-white">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">Selected Project</p>
              <h3 className="text-2xl font-serif">Central Business Tower</h3>
              <p className="text-sm opacity-80">65-Story BIM Coordination</p>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
