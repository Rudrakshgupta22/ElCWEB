function Join() {
  return (
    <section id="join" className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-2xl border-2 border-brand-gold/30 bg-brand-navy-light p-10 text-center shadow-card sm:p-14">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">For Freshers</p>
          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl">
            Start Your Journey with ELC
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Join a structured experiential organisation that offers leadership development, professional growth, and impactful industry exposure with equity ownership.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-brand-gold px-8 py-4 text-base font-bold text-brand-navy shadow-glow transition hover:bg-brand-gold/90 hover:-translate-y-0.5"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Join;
