function PatronsMessage() {
  return (
    <section id="patrons" className="relative overflow-hidden bg-brand-navy py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          
          {/* Text Content Side */}
          <div className="space-y-6">
            <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
              Leadership
            </span>
            <h2 className="text-4xl font-black text-white sm:text-5xl">
              Patron's Message
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              "The Experiential Learning Corporation represents the future of student-led enterprise and innovation. I am proud to see our young leaders taking initiative to bridge the gap between academics and industry practice. This organization embodies the vision of creating responsible, visionary leaders for tomorrow."
            </p>
            <div>
              <p className="text-lg font-bold text-brand-gold">Prof. Inderpal Singh</p>
              <p className="text-sm text-gray-400">Patron & Visionary</p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            {/* The container keeps the square shape and border */}
            <div className="aspect-square overflow-hidden rounded-2xl border-2 border-brand-gold/30 bg-brand-navy-lighter">
              
              {/* Insert the image here */}
              <img 
                src="../patron.png"
                alt="Prof. Inderpal Singh - Patron" 
                className="h-full w-full object-cover object-center"
              />
              
            </div>
            {/* Decorative overlay border */}
            <div className="absolute inset-0 rounded-2xl border border-brand-gold/20 opacity-50 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PatronsMessage;