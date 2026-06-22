import React from 'react';
import { Project } from '../types';
import { Icons } from '../constants';

interface ProjectCardProps { project: Project; }

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group card-premium rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden rounded-t-2xl">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all"></div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

     <h3 className="font-display font-bold text-3xl text-white mb-4 group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-10 flex-1">
          {project.description}
        </p>
        <div className="mb-8 space-y-3 text-xs text-neutral-300 border-l-2 border-brand-primary/30 pl-4">
  <p>✓ AI Powered Ad Videos</p>
  <p>✓ Digital Marketing</p>
  <p>✓ Branding Systems</p>
  <p>✓ Website Development</p>
  <p>✓ Business Growth Strategy</p>
</div>

        <div className="pt-6 border-t border-brand-border flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
    SEYONIX PROJECT
  </span>
          <a 
            href={project.demoUrl} 
            target="_blank" 
           className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-[0.2em] group-hover:text-brand-primary transition-colors"
          >
          EXPLORE SEYONIX
            <Icons.ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
