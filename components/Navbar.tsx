import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const agencyUrl = "https://www.seyonix.in";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      const offset = 100;

      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[110] w-[95%] max-w-6xl px-5 sm:px-8 py-4 flex justify-between items-center transition-all duration-300 rounded-2xl border ${
          scrolled
            ? 'bg-brand-surface/80 border-brand-border backdrop-blur-xl shadow-2xl'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-4 cursor-pointer shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/logo1.png"
            alt="SEYONIX"
            className="h-14 w-auto object-contain"
          />

          <div className="hidden md:block">
            <h4 className="text-white font-display font-bold text-lg leading-none">
              SEYONIX
            </h4>
            <p className="text-brand-primary text-[10px] tracking-[0.25em] uppercase mt-1">
              Where Creativity Meets Technology
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href={agencyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold tracking-widest text-brand-primary uppercase px-4 py-2 bg-brand-primary/10 rounded-full border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-all"
          >
            SEYONIX • AI GROWTH COMPANY
          </a>

          {['About', 'Projects', 'Services', 'Experience'].map((item) => (
            <button
              key={item}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-xs font-semibold tracking-wide text-neutral-400 hover:text-white transition-all"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-5 py-2.5 bg-brand-primary text-white font-bold text-xs rounded-xl hover:bg-brand-secondary transition-all active:scale-95 shadow-lg shadow-brand-primary/20"
          >
            Start a Conversation
          </button>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[105] bg-brand-dark lg:hidden transition-all duration-300 flex flex-col items-center justify-center gap-8 ${
          mobileMenuOpen
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <img
          src="/seyonix-logo.png"
          alt="SEYONIX"
          className="h-20 w-auto object-contain"
        />

        {['About', 'Projects', 'Services', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={(e) => scrollToSection(e, item.toLowerCase())}
            className="text-3xl font-display font-bold text-neutral-400 hover:text-white transition-all"
          >
            {item}
          </button>
        ))}

        <a
          href={agencyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-brand-primary text-brand-primary rounded-xl font-bold uppercase tracking-widest text-sm"
        >
          Visit SEYONIX
        </a>
      </div>
    </>
  );
};

export default Navbar;
