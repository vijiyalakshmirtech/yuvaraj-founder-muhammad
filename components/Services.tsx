import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Website Development',
      description:
        'Premium business websites, landing pages, portfolio websites and custom web applications built to generate leads and drive growth.',
      icon: '💻'
    },
    {
      title: 'AI Powered Ad Videos',
      description:
        'High-converting AI generated advertisement videos designed for brands, local businesses, products and social media campaigns.',
      icon: '🤖'
    },
    {
      title: 'Branding & Creative Design',
      description:
        'Brand identity systems, logo design, AI posters, marketing creatives and premium visual communication assets.',
      icon: '🎨'
    },
    {
      title: 'Digital Marketing & Growth',
      description:
        'SEO, Social Media Marketing, Google Business Profile optimization, lead generation and business growth systems.',
      icon: '📈'
    }
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 bg-brand-surface/20 border-y border-brand-border/50"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold tracking-[0.25em] uppercase mb-6">
            SEYONIX SERVICES
          </div>

          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight">
            Growth Systems We Build.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-neutral-400 leading-relaxed text-lg">
            SEYONIX combines AI, creativity, technology and execution to help
            businesses build stronger brands, generate leads and accelerate
            growth in the digital era.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group card-premium p-10 rounded-3xl border border-brand-border hover:border-brand-primary/30 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500 inline-block">
                {s.icon}
              </div>

              <h3 className="text-white font-display font-bold text-2xl mb-4 group-hover:text-brand-primary transition-colors">
                {s.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed">
                {s.description}
              </p>

              <div className="mt-6 text-xs text-neutral-400 space-y-2 border-l-2 border-brand-primary/30 pl-4">
                <p>✓ Strategy Driven</p>
                <p>✓ Premium Execution</p>
                <p>✓ Growth Focused</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Founder Thesis */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="p-8 rounded-3xl border border-brand-border bg-brand-surface/30">
            <p className="text-neutral-300 italic text-lg">
              "Technology creates opportunities. Creativity attracts attention.
              Strategy creates direction. Execution creates results."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
