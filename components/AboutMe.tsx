import React from 'react';
import { Icons } from '../constants';

const AboutMe: React.FC = () => {
  const scrimbaUrl = "https://scrimba.com/?via=u432d432";
  
  // User can replace this URL with their own hosted profile picture
  const profilePicUrl = "./yuvaraj.png";

  return (
    <section id="about" className="py-24 md:py-40 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-8 space-y-10">
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="text-brand-primary text-[10px] font-bold tracking-widest uppercase">Founder of Seyonix</span>
            </div>
          </div>
          
<h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-[1.1]">
 Founder Profile.<br/>
 <span className="text-neutral-500 text-4xl md:text-5xl">
 Building Businesses Through AI & Digital Growth
 </span>
</h2>

          {/* Profile Spotlight (Mobile and Inline) */}
          <div className="lg:hidden w-full mb-10">
            <div className="relative group mx-auto max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-emerald-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-brand-border bg-brand-surface">
                <img 
                  src={profilePicUrl} 
                  alt="Yuvaraj Ramalingam" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 text-neutral-400 text-lg leading-relaxed max-w-3xl">
            <p>
<p>
Yuvaraj Ramalingam is the Founder of SEYONIX, an AI-powered creative and digital growth company helping businesses scale through AI Ad Videos, Branding, Websites and Digital Marketing.
</p>
</p>

<p>
With a Bachelor of Technology (B.Tech) in Information Technology, he combines technical understanding with modern marketing principles to help businesses establish stronger digital identities, attract customers, and scale growth.
</p>

<p>
His work sits at the intersection of technology, branding, marketing, and innovation. Rather than treating marketing as advertising alone, he views business growth as a combination of strategy, systems, creativity, customer psychology, and digital transformation.
</p>

<p>
Today, his focus remains on creating practical, high-impact solutions that bridge the gap between business challenges and digital opportunities through SEYONIX.
</p>

            <div className="p-6 bg-brand-surface border border-brand-border rounded-2xl border-l-4 border-l-brand-primary">
              <p className="text-neutral-300 italic text-base">
              "The future belongs to businesses that combine creativity, technology and execution."
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Picture & Pillars */}
        <div className="lg:col-span-4 space-y-10">
          
          {/* Desktop Profile Picture Spotlight */}
          <div className="hidden lg:block relative group">
            {/* Background Aura */}
            <div className="absolute -inset-4 bg-brand-primary/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Main Picture Frame */}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-brand-border group-hover:border-brand-primary/50 transition-all duration-500 bg-brand-surface shadow-[0_0_40px_rgba(14,47,118,0.35)]"
              <img 
                src={profilePicUrl} 
                alt="Yuvaraj Ramalingam" 
               className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Name Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-dark/40 backdrop-blur-md border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-display font-bold text-lg">Yuvaraj Ramalingam</p>
                <p className="text-brand-primary text-[10px] font-bold uppercase tracking-widest">Founder • AI Growth Architect • Entrepreneur</p>
              </div>
            </div>
          </div>

          {/* Agency Link Card */}
          <div className="relative group overflow-hidden card-premium p-8 rounded-2xl border-brand-primary/50 bg-gradient-to-br from-brand-primary/20 to-transparent">
             <div className="relative z-10 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#0E2F76] flex items-center justify-center font-bold text-xl shadow-lg">
YR
</div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight">SEYONIX</h4>
                    <span className="text-[10px] text-brand-primary font-bold tracking-widest uppercase">WHERE CREATIVITY MEETS TECHNOLOGY</span>
                  </div>
                </div>
                
                <p className="text-neutral-400 text-xs leading-relaxed">
                 Helping businesses grow through AI Powered Ad Videos, Digital Marketing, Branding, Website Development and Business Growth Systems.
                </p>

                <a 
                  href="https://www.seyonix.in"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-black text-center font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-brand-primary hover:text-white transition-all shadow-xl flex items-center justify-center gap-2"
                >
                 Explore SEYONIX
                  <Icons.ExternalLink />
                </a>
             </div>
          </div>
</div>
  </div>                 
        
    </section>
  );
};

export default AboutMe;
