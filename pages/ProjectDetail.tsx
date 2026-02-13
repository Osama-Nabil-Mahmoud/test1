
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  User, 
  Building, 
  Box, 
  ShieldCheck, 
  Settings, 
  Layers, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/projects" className="text-primary underline">Return to Projects</Link>
      </div>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Header */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img 
          src={project.heroUrl} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-12 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 space-y-4">
             <Link to="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Projects
             </Link>
             <div>
               <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                 <MapPin className="w-4 h-4" />
                 <span>{project.location}</span>
               </div>
               <h1 className="text-4xl md:text-7xl font-serif text-white font-medium">{project.title}</h1>
             </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Deep Dive */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* 1. Overview */}
          <section className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-4">Overview</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-700">
              {project.description}
            </p>
          </section>

          {/* 2. Responsibilities */}
          <section className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-4">Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.responsibilities.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Deliverables */}
          <section className="bg-slate-50 p-8 rounded-2xl space-y-6">
             <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Key Deliverables</h2>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
               {project.deliverables.map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                 </li>
               ))}
             </ul>
          </section>

          {/* 4. Technical Highlights */}
          <section className="space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-4">Technical Specs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-slate-100 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Layers className="w-4 h-4" /> <span className="text-[10px] uppercase font-bold tracking-widest">LOD Level</span>
                </div>
                <p className="font-serif text-lg">{project.technicalHighlights.lod}</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Settings className="w-4 h-4" /> <span className="text-[10px] uppercase font-bold tracking-widest">Coordination Software</span>
                </div>
                <p className="font-serif text-lg">{project.technicalHighlights.coordination}</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="w-4 h-4" /> <span className="text-[10px] uppercase font-bold tracking-widest">Compliance</span>
                </div>
                <p className="font-serif text-lg">{project.technicalHighlights.compliance}</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Box className="w-4 h-4" /> <span className="text-[10px] uppercase font-bold tracking-widest">Workflows</span>
                </div>
                <p className="font-serif text-lg">{project.technicalHighlights.workflows}</p>
              </div>
            </div>
          </section>

          {/* 5. Outcome */}
          <section className="bg-primary text-primary-foreground p-10 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -skew-x-12 transform translate-x-10 -translate-y-10"></div>
             <div className="space-y-4 relative z-10">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Outcome & Impact</h2>
                <p className="text-2xl font-serif italic leading-relaxed">
                  "{project.outcome}"
                </p>
             </div>
          </section>

          {/* 6. Gallery */}
          <section className="space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-l-4 border-primary pl-4">Image Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className={`overflow-hidden rounded-xl ${i === 0 && project.gallery.length % 2 !== 0 ? 'md:col-span-2' : ''}`}>
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Snapshot Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary border-b border-slate-100 pb-4">Project Snapshot</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <User className="w-5 h-5 text-slate-300 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Role</span>
                    <span className="text-sm font-semibold">{project.snapshot.role}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Building className="w-5 h-5 text-slate-300 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Client</span>
                    <span className="text-sm font-semibold">{project.snapshot.client}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Box className="w-5 h-5 text-slate-300 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Scope</span>
                    <span className="text-sm font-semibold">{project.snapshot.scope}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calendar className="w-5 h-5 text-slate-300 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Status</span>
                    <span className="text-sm font-semibold">{project.snapshot.status}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-3">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-600 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.snapshot.achievement && (
                <div className="pt-6 border-t border-slate-100">
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <span className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Key Achievement</span>
                    <p className="text-xs font-semibold text-primary/80">{project.snapshot.achievement}</p>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to={`/projects/${nextProject.slug}`}
              className="group block bg-slate-900 text-white p-8 rounded-2xl hover:bg-slate-800 transition-all relative overflow-hidden"
            >
               <div className="relative z-10 space-y-4">
                  <span className="text-[10px] uppercase tracking-widest opacity-60 flex items-center gap-2">
                    Next Project <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <h4 className="text-2xl font-serif">{nextProject.title}</h4>
               </div>
               <div className="absolute top-0 right-0 h-full w-1/2 opacity-20 -z-0">
                  <img src={nextProject.thumbnailUrl} alt="Next" className="w-full h-full object-cover grayscale" />
               </div>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetail;
