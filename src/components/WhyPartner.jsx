const partnerBenefits = [
  {
    title: 'Campus Reach',
    description: 'Engage with a broad student audience through immersive programs, flagship events, and campus activations.'
  },
  {
    title: 'Brand Visibility',
    description: 'Position your organisation within a premium talent ecosystem through sponsorships, speaker sessions, and media assets.'
  },
  {
    title: 'Engagement Opportunities',
    description: 'Collaborate on workshops, recruitment drives, and hands-on projects that surface top talent and brand advocates.'
  }
];

function WhyPartner() {
  return (
    <section id="why-partner" className="py-24 sm:py-28 bg-brand-light-gray">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
            Why Partner With ELC
          </span>
          <h2 className="mt-6 text-4xl font-black text-brand-navy sm:text-5xl">
            Strategic Value for Your Organisation
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy/70">
            ELC blends corporate structure with student-led energy, delivering scalable engagement, measurable visibility, and partnership outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {partnerBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border-2 border-brand-navy/20 bg-white p-8 shadow-card transition hover:border-brand-gold hover:shadow-glow"
            >
              <h3 className="text-xl font-bold text-brand-navy">{benefit.title}</h3>
              <p className="mt-4 text-brand-navy/70 leading-7">{benefit.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-7 py-4 text-base font-bold text-brand-navy shadow-glow transition hover:bg-brand-gold/90 hover:-translate-y-0.5"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyPartner;
