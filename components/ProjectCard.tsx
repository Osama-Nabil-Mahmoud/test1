
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowUpRight, MapPin, Ruler, Cpu } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link 
      to={`/projects/${project.slug}`} 
      className="group bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
               <ArrowUpRight className="w-6 h-6 text-primary" />
            </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center text-muted-foreground gap-1 mb-1">
            <MapPin className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-widest">{project.location}</span>
          </div>
          <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">{project.title}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
          <div className="space-y-1">
             <span className="block text-[10px] text-muted-foreground uppercase">Role</span>
             <span className="block text-xs font-semibold">{project.snapshot.role}</span>
          </div>
          <div className="space-y-1">
             <span className="block text-[10px] text-muted-foreground uppercase">Scope</span>
             <span className="block text-xs font-semibold">{project.snapshot.scope}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
           {project.techStack.slice(0, 3).map(tech => (
             <span key={tech} className="text-[9px] uppercase tracking-tighter bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-100 flex items-center gap-1">
                <Cpu className="w-2.5 h-2.5" /> {tech}
             </span>
           ))}
           {project.techStack.length > 3 && (
             <span className="text-[9px] uppercase bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-100">+{project.techStack.length - 3}</span>
           )}
        </div>

        <div className="flex justify-between items-center pt-2">
           <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${
             project.snapshot.status === 'Built & Operational' ? 'bg-green-50 text-green-700' : 
             project.snapshot.status === 'Ongoing' ? 'bg-blue-50 text-blue-700' : 'bg-orange-50 text-orange-700'
           }`}>
             {project.snapshot.status}
           </span>
           <span className="text-sm font-semibold flex items-center gap-1 text-primary">
              View Case Study <ArrowUpRight className="w-3 h-3" />
           </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
