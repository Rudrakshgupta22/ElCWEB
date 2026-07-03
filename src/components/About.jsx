function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-light-gray py-24 sm:py-28">
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="space-y-8">
          <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
            About ELC
          </span>
          <h2 className="text-4xl font-black text-brand-navy sm:text-5xl">
            Who We Are
          </h2>
          <p className="max-w-xl text-lg leading-8 text-brand-navy">
            The Experiential Learning Corporation (ELC) is a premier student-led private limited company dedicated to transforming academic learning into real-world professional excellence. We bridge the gap between theory and practice through immersive programs, industry collaborations, and hands-on initiatives.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-brand-navy/20 bg-white p-6 shadow-card transition hover:border-brand-gold hover:shadow-glow">
              <h3 className="text-lg font-bold text-brand-gold"> Our Vision</h3>
              <p className="mt-3 text-sm leading-7 text-brand-navy">
                To become the most impactful student-led organization — fostering innovation, entrepreneurial thinking, and professional excellence across all disciplines.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-brand-navy/20 bg-white p-6 shadow-card transition hover:border-brand-gold hover:shadow-glow">
              <h3 className="text-lg font-bold text-brand-gold"> Our Mission</h3>
              <p className="mt-3 text-sm leading-7 text-brand-navy">
                To deliver transformative experiential learning opportunities that equip students with practical skills, industry networks, equity holdings, and a growth mindset.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-brand-navy bg-brand-navy p-8 shadow-card text-center">
            <div className="text-5xl font-black text-brand-gold">50+</div>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-gray-300">Events Hosted</p>
          </div>
          <div className="rounded-2xl border-2 border-brand-navy bg-brand-navy p-8 shadow-card text-center">
            <div className="text-5xl font-black text-brand-gold">300+</div>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-gray-300">Active Members</p>
          </div>
          <div className="rounded-2xl border-2 border-brand-navy bg-brand-navy p-8 shadow-card text-center">
            <div className="text-5xl font-black text-brand-gold">40+</div>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-gray-300">Industry Partners</p>
          </div>
          <div className="rounded-2xl border-2 border-brand-navy bg-brand-navy p-8 shadow-card text-center">
            <div className="text-5xl font-black text-brand-gold">12</div>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-gray-300">Departments</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
