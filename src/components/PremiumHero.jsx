function PremiumHero() {
  return (
    <section id="hero" className="relative min-h-[90vh] bg-brand-navy flex items-center overflow-hidden pt-20">
      {/* Decorative clean background line accent */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-gold/10 to-transparent pointer-events-none" />
      
      {/* Subtle Grid Pattern for Corporate Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 w-full sm:px-8 lg:px-10 z-10">
        <div className="max-w-3xl space-y-10">
          
          <div className="space-y-4">
            <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-brand-gold">
              <span className="h-[1px] w-8 bg-brand-gold"></span>
              Universal AI University
            </span>
            <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl leading-[1.1]">
              Bridging Theory <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-brand-gold">
                With Real Enterprise.
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed border-l-2 border-brand-gold/50 pl-6">
            Operating India's first student-driven private limited company to foster next-generation executive leadership through hands-on business execution.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-6 items-center">
            <a href="#about" className="group relative inline-flex items-center gap-3 bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-brand-navy transition-all hover:bg-brand-gold hover:text-black">
              Explore Our Ventures
              <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a href="#metrics" className="text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-brand-gold flex items-center gap-2">
              View Impact Report
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PremiumHero;