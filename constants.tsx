import React from 'react';
import { Project, Experience, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'SEYONIX',
description: 'Helping businesses grow through AI Powered Ad Videos, Website Development, Branding, Digital Marketing, SEO and Business Growth Systems.',
longDescription: 'SEYONIX is an AI-powered creative and growth company helping businesses attract customers, strengthen brands, generate leads and accelerate growth through AI, technology and strategic execution.',
tags: [
'AI Powered Ad Videos',
'Website Development',
'Branding',
'Digital Marketing',
'Business Growth'
],
 imageUrl: "/seyonix-project.jpg",
    featured: true,
githubUrl:'https://github.com/vijiyalakshmirtech',
    demoUrl: 'https://www.seyonix.in'
  },
 ];
export const EXPERIENCES: Experience[] = [
{
id:'e1',
company:'SEYONIX',
role:'Founder & AI Growth Architect',
period:'2025 - Present',
  
description:[
'Founded SEYONIX to help businesses grow through AI-powered marketing.',
'Building AI Ad Videos, AI Posters and Digital Branding solutions.',
'Helping local businesses improve visibility and customer acquisition.',
'Leading business strategy, creative direction and technology integration.'
],
technologies:[
'AI Ad Videos',
'Website Development',
'Digital Marketing',
'Brand Strategy',
'Business Growth',
'Leadership'
]
},

{
id:'e2',
company:'Digital Marketing',
role:'Growth Strategist',
period:'2024 - Present',
description:[
'Creating digital growth strategies.',
'Managing social media campaigns.',
'Building lead generation systems.',
'Helping businesses increase visibility.'
],
technologies:['Marketing','SEO','Lead Generation']
},

{
id:'e3',
company:'AI Ad Production',
role:'Creative Director',
period:'2024 - Present',
description:[
'Creating AI Powered Ad Videos.',
'Developing AI visual campaigns.',
'Building promotional content.',
'Designing high conversion creatives.'
],
technologies:['AI Videos','Creative Direction']
},

{
id:'e4',
company:'Website Development',
role:'Full Stack Consultant',
period:'2023 - Present',
description:[
'Building websites for businesses.',
'Creating responsive web experiences.',
'Providing technical consulting.',
'Developing scalable digital solutions.'
],
technologies:['Web Development','Technology']
}
 
];
export const CERTIFICATIONS: Certification[] = [
{
id:'c1',
title:'Bachelor of Technology (IT)',
issuer:'Academic Qualification',
date:'Completed',
description:'Information Technology background with focus on business technology.',
status:'completed'
},

{
id:'c2',
title:'AI Marketing Specialist',
issuer:'SEYONIX',
date:'2026',
description:'AI Ad Videos, AI Posters and Digital Marketing.',
status:'completed'
},

{
id:'c3',
title:'Business Growth Strategy',
issuer:'Professional Development',
date:'2026',
description:'Business growth through branding and digital systems.',
status:'completed'
},

{
id:'c4',
title:'Digital Growth & Branding',
issuer:'SEYONIX',
date:'2026',
description:'Brand positioning, growth systems and digital marketing strategy.',
status:'completed'
},

{
id:'c5',
title:'AI Business Growth Systems',
issuer:'SEYONIX',
date:'2026',
description:'AI-powered growth systems, automation and digital business transformation.',
status:'completed'
}
];

export const SKILLS: Skill[] = [
  // Languages
  
  { name: 'English', category: 'languages' },
  { name:'Tamil', category:'languages' },
{ name:'AI Ad Videos', category:'marketing' },
{ name:'AI Posters', category:'marketing' },
{ name:'Digital Marketing', category:'marketing' },
{ name:'Brand Strategy', category:'marketing' },
{ name:'Business Growth', category:'marketing' },
{ name:'Lead Generation', category:'marketing' },
{ name:'SEO', category:'marketing' },
{ name:'Meta Ads', category:'marketing' },
{ name:'Google Ads', category:'marketing' },
{ name:'Content Marketing', category:'marketing' },
{ name:'Conversion Optimization', category:'marketing' },
{ name:'Local Business Marketing', category:'marketing' },
  { name:'Google Business Profile', category:'marketing' },
{ name:'Instagram Growth Strategy', category:'marketing' },
{ name:'Lead Funnel Design', category:'marketing' },
{ name:'Brand Positioning', category:'marketing' },
  { name:'AI Automation', category:'ai' },
  { name:'AI Growth Systems', category:'ai' },
{ name:'Prompt Engineering', category:'ai' },
{ name:'AI Content Strategy', category:'ai' },
  { name:'Generative AI', category:'ai' },
{ name:'AI Marketing Automation', category:'ai' },
  { name:'VEO 3 Video Creation', category:'ai' },
{ name:'AI Visual Storytelling', category:'ai' },

  // Web Development
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Responsive Web Design', category: 'frontend' },
  { name: 'JavaScript (ES6+)', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'MERN Stack', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'Laravel (Basics)', category: 'backend' },
  { name: '.NET Core / C# (Basics)', category: 'backend' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'Authentication (JWT)', category: 'backend' },

  // Databases
  { name: 'MySQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'SQL Server', category: 'database' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'npm', category: 'tools' },
  { name: 'API Integration', category: 'tools' },
  { name: 'Deployment Concepts', category: 'tools' },

  // AI & Programming
  { name: 'Python Programming', category: 'ai' },
  { name: 'Data Science', category: 'ai' },
  { name: 'Machine Learning', category: 'ai' },
  { name: 'Deep Learning', category: 'ai' },
   { name: 'AI Model Integration', category: 'ai' },

  // Digital Marketing
  { name: 'Social Media Marketing', category: 'marketing' },
  { name: 'Branding', category: 'marketing' },
  { name: 'Content Strategy', category: 'marketing' },
  { name: 'Meta Ads (Basics)', category: 'marketing' },
   { name: 'Digital Growth Strategies', category: 'marketing' },

  // Creative Skills
  { name: 'Graphic Design', category: 'creative' },
  { name: 'Video Editing', category: 'creative' },
  { name: 'Short-form (Reels/Shorts)', category: 'creative' },
  { name: 'Social Post Design', category: 'creative' },
  { name: 'Motion Visual Effects', category: 'creative' },
  { name: 'UI-focused Graphics', category: 'creative' },

  // Professional Mindset
  { name: 'Self-taught Learner', category: 'personal' },
  { name: 'Problem-Solving', category: 'personal' },
  { name: 'Project-Based Learning', category: 'personal' },
  { name: 'Time Management', category: 'personal' },
  { name: 'Growth Mindset', category: 'personal' },
  { name: 'Continuous Learner', category: 'personal' },
  { name:'Founder Leadership', category:'personal' },
{ name:'Business Strategy', category:'personal' },
{ name:'Creative Thinking', category:'personal' },
{ name:'Execution Excellence', category:'personal' },
];

export const Icons = {
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
  ),
  Youtube: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  ),
  Award: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  Bot: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  ),
  Fiverr: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 13h-2.1c-.2 0-.3.1-.3.3v2.4c0 .2.1.3.3.3h2.1c.2 0 .3-.1.3-.3v-2.4c0-.2-.1-.3-.3-.3z"/><path d="M11 13h-2.1c-.2 0-.3.1-.3.3v2.4c0 .2.1.3.3.3h2.1c.2 0 .3-.1.3-.3v-2.4c0-.2-.1-.3-.3-.3z"/><path d="M2.5 13h2.1c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.1c-.2 0-.3-.1-.3-.3v-2.4c0-.2.1-.3.3-.3z"/><path d="M11 6h-2.1c-.2 0-.3.1-.3.3v2.4c0 .2.1.3.3.3h2.1c.2 0 .3-.1.3-.3v-2.4c0-.2-.1-.3-.3-.3z"/><path d="M2.5 6h2.1c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.1c-.2 0-.3-.1-.3-.3v-2.4c0-.2.1-.3.3-.3z"/></svg>
  ),
  Upwork: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.5 6c-2.5 0-4.5 2-4.5 4.5v3.5c0 1.1-.9 2-2 2s-2-.9-2-2v-3.5c0-1.1-.9-2-2-2S6 9.4 6 10.5v3.5c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5v-3.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v3.5c0 .3.2.5.5.5s.5-.2.5-.5v-3.5C21 8 19.9 6 18.5 6z"/></svg>
  ),
  Scrimba: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 0 1 8 0"/><path d="M12 12v4"/></svg>
  ),
  FileText: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
  )
};
