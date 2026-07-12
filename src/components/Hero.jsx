function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-24 sm:pb-32"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 23, 45, 0.7), rgba(11, 23, 45, 0.7)), url('/images/homepage.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d4a574" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="fade" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="m">
              <rect width="1400" height="900" fill="url(#fade)" />
            </mask>
          </defs>
          <rect width="1400" height="900" fill="url(#grid)" mask="url(#m)" />
          <g fill="#d4a574" opacity="0.6">
            <circle cx="200" cy="150" r="3" />
            <circle cx="480" cy="80" r="2" opacity="0.4" />
            <circle cx="750" cy="220" r="3" opacity="0.5" />
            <circle cx="1100" cy="140" r="2.5" opacity="0.5" />
            <circle cx="1280" cy="350" r="3" opacity="0.4" />
            <circle cx="900" cy="420" r="2" opacity="0.6" />
            <circle cx="340" cy="400" r="2.5" opacity="0.4" />
            <circle cx="620" cy="520" r="3" opacity="0.3" />
          </g>
          <g stroke="#d4a574" strokeWidth="0.6" opacity="0.25">
            <line x1="200" y1="150" x2="480" y2="80" />
            <line x1="480" y1="80" x2="750" y2="220" />
            <line x1="750" y1="220" x2="1100" y2="140" />
            <line x1="1100" y1="140" x2="1280" y2="350" />
            <line x1="1280" y1="350" x2="900" y2="420" />
            <line x1="900" y1="420" x2="620" y2="520" />
            <line x1="620" y1="520" x2="340" y2="400" />
            <line x1="340" y1="400" x2="200" y2="150" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold text-brand-gold">
            🎓 Welcome to ELC
          </div>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Building leaders <span className="block text-brand-gold">through experience</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-200 sm:text-xl">
            Experiential Learning Corporation (ELC) is a premier student-led private limited company dedicated to empowering leaders through immersive, real-world learning experiences and industry collaboration.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#join"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-gold px-8 py-4 text-base font-bold text-brand-navy shadow-glow transition hover:bg-brand-gold/90 hover:-translate-y-0.5 sm:w-auto"
            >
              Join the Enterprise
              <span>→</span>
            </a>
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-4 text-base font-bold text-white transition hover:bg-white hover:text-brand-navy sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center sm:flex">
        <div className="flex flex-col items-center gap-3 text-xs uppercase tracking-[0.24em] text-gray-400">
          <span>Scroll to explore</span>
          <div className="h-16 w-px bg-gradient-to-b from-brand-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
