const sponsors = [
  'Luv Bite Waffles',
  'Orange cafe',
  'Rushabh Super Market',
  'BookMyShow',
  'The Waffle Bistro',
  'MTV-VH1',
  'Radisson',
  'Sula Vines'
];

function Sponsorship() {
  return (
    <section id="sponsors" className="py-24 sm:py-28 bg-brand-light-gray">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
            Our Past Partners
          </span>
          <h2 className="mt-6 text-4xl font-black text-brand-navy sm:text-5xl">
            Trusted by leading organisations
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy/70">
            ELC has partnered with brands and institutions that value structured student engagement and measurable partnership outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((brand) => (
            <div
              key={brand}
              className="rounded-2xl border-2 border-brand-navy/20 bg-white p-8 text-center shadow-card transition hover:border-brand-gold hover:shadow-glow"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-brand-navy text-lg font-black text-brand-gold border-2 border-brand-gold">
                {brand[0]}
              </div>
              <p className="mt-6 text-sm font-bold text-brand-navy">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsorship;
