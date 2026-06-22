import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 space-y-24">
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className="relative pl-10 border-l border-brand-border">
          <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] bg-brand-primary rounded-full shadow-[0_0_12px_rgba(14,47,118,0.8)]"></div>
          
          <div className="space-y-4">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">{exp.period}</span>
            <div>
              <h3 className="text-3xl font-display font-bold text-white">
  {exp.role}
</h3>
              <p className="text-brand-primary font-semibold uppercase tracking-wider">
  {exp.company}
</p>
            </div>
            
            <ul className="space-y-4 pt-4">
              {exp.description.map((item, i) => (
                <li key={i} className="text-neutral-400 text-sm leading-relaxed flex gap-3">
                  <span className="text-brand-primary font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-6">
              {exp.technologies.map(tech => (
                <span
  key={tech}
  className="text-[10px] font-bold px-3 py-1 bg-neutral-900 text-brand-primary rounded border border-brand-primary/20 uppercase tracking-wider"
>
  {tech}
</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
