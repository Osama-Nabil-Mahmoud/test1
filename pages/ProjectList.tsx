
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { ProjectCategory } from '../types';

const categories: ProjectCategory[] = ['All', 'Commercial', 'Infrastructure', 'Residential', 'Consultancy', 'BIM/Academic'];

const ProjectList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen animate-in fade-in duration-500 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight">Projects Index</h1>
          <p className="text-lg text-muted-foreground">
            A selection of projects demonstrating technical precision, BIM leadership, and cross-sector architectural delivery.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-slate-100">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <p className="text-muted-foreground italic">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
