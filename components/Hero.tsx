
import React, { useState, useEffect } from 'react';


const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Path to CV file exactly as requested

const roles = [
"Founder of SEYONIX",
"AI Growth Architect",
"Entrepreneur",
"Digital Growth Strategist",
"Brand Builder",
"Business Growth Consultant",
"AI Creative Specialist",
"Digital Transformation Leader"
];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden w-full px-6">
      <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <img
  src="/seyonix-logo.png"
  alt="SEYONIX"
  className="h-24 w-auto mb-8 object-contain"
/>
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-surface/50 text-[11px] font-semibold tracking-wide text-brand-primary mb-10 animate-premium">
  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>

  ✦ AI GROWTH ARCHITECT • FOUNDER OF SEYONIX

</div>

        <div className="min-h-[160px] md:min-h-[200px] lg:min-h-[250px] flex flex-col items-center justify-center">
          <h1 className="font-display font-bold text-[clamp(2.5rem,10vw,7rem)] text-[#F4FEFF] text-glow mb-4 tracking-tight leading-[1.1] animate-premium">
            <span className="accent-gradient inline-block min-h-[1.2em]">
              {text}
              <span className="inline-block w-[4px] h-[0.8em] bg-brand-primary ml-2 animate-pulse align-middle"></span>
            </span>
          </h1>
        </div>
        
      <p className="max-w-3xl text-lg md:text-xl text-[#A9C0E0] text-[#A9C0E0] font-medium mb-12 leading-relaxed animate-premium">
        I'm <span className="text-white">YUVARAJ RAMALINGAM</span>, Founder of <span className="text-[#F4FEFF] font-bold">SEYONIX</span>. I help businesses leverage AI, branding, digital marketing and technology to build stronger brands, generate leads and accelerate growth.
        </p>
<div className="mb-12 px-4 py-2 border border-brand-primary/20 rounded-full text-brand-primary text-[10px] font-bold tracking-[0.25em] uppercase animate-premium">
  CURRENT THESIS • AI + CREATIVITY + EXECUTION = BUSINESS GROWTH
</div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg animate-premium">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
            className="w-full py-4 bg-white text-black font-bold text-sm rounded-xl hover:bg-brand-primary hover:text-white transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
          >
           Explore SEYONIX
          </button>
            <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
           className="w-full py-4 border border-brand-border text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-all"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-700 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>
  );
};

export default Hero;
