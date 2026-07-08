function MediaKit() {
  return (
    <section id="mediakit" className="py-24 sm:py-28 bg-brand-navy">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
            Media Kit
          </span>
          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Explore Our Media Kit
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Access polished assets designed for sponsors, partners, and stakeholders, with an executive brochure and stakeholder whitebook.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border-2 border-brand-gold/30 bg-brand-navy-light p-8 shadow-card transition hover:border-brand-gold">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-navy border-2 border-brand-gold text-2xl text-brand-gold">
              📘
            </div>
            <h3 className="mt-8 text-2xl font-bold text-white">Executive Brochure</h3>
            <p className="mt-4 text-gray-300">
              A comprehensive document covering our partnership packages, engagement metrics, sponsorship tiers, and delivery capabilities.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
             <a
  href="/documents/brouchure.pdf"
  download
  className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-gold/90 hover:-translate-y-0.5"
>
  Download Brochure
</a>
              <a
  href="/documents/brouchure.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-lg border-2 border-brand-gold px-6 py-3 text-sm font-bold text-brand-gold transition hover:bg-brand-gold/10"
>
  View Overview
</a>
            </div>
          </article>

          <article className="rounded-2xl border-2 border-brand-gold/30 bg-brand-navy-light p-8 shadow-card transition hover:border-brand-gold">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-navy border-2 border-brand-gold text-2xl text-brand-gold">
              📄
            </div>
            <h3 className="mt-8 text-2xl font-bold text-white">Stakeholder Whitebook</h3>
            <p className="mt-4 text-gray-300">
              A concise overview of ELC's corporate vision, service pillars, event portfolio, and strategic value proposition for partners.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-gold/90 hover:-translate-y-0.5"
              >
                Download Whitebook
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border-2 border-brand-gold px-6 py-3 text-sm font-bold text-brand-gold transition hover:bg-brand-gold/10"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MediaKit;
