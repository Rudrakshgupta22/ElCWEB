const socials = [
  { label: 'LinkedIn', icon: '💼', href: '#' },
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'Twitter', icon: '🐦', href: '#' }
];

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Thank you! Your message has been submitted.');
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-brand-light-gray">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
            Contact
          </span>
          <h2 className="mt-6 text-4xl font-black text-brand-navy sm:text-5xl">
            Get in Touch with ELC
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy/70">
            Have a partnership idea, event enquiry, or media request? Send a message and our leadership team will respond promptly.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border-2 border-brand-navy/20 bg-white p-10 shadow-card">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Contact Details</h3>
                <p className="mt-3 text-brand-navy/70 leading-7">
                  Experiential Learning Corporation
                  <br />
                  Universal AI University, Karjat, Maharashtra, India
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">Email</h4>
                <p className="mt-2 text-brand-navy">elc.hr@universalai.in</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">Phone</h4>
                <p className="mt-2 text-brand-navy">+91 6380324734</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">Follow Us</h4>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border-2 border-brand-navy bg-white text-brand-navy transition hover:border-brand-gold hover:text-brand-gold"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border-2 border-brand-navy/20 bg-white p-10 shadow-card">
            <label className="block space-y-3 text-sm">
              <span className="font-bold text-brand-navy">Name</span>
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-lg border-2 border-brand-navy/20 bg-white px-4 py-3 text-brand-navy outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
              />
            </label>
            <label className="block space-y-3 text-sm">
              <span className="font-bold text-brand-navy">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border-2 border-brand-navy/20 bg-white px-4 py-3 text-brand-navy outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
              />
            </label>
            <label className="block space-y-3 text-sm">
              <span className="font-bold text-brand-navy">Message</span>
              <textarea
                rows="5"
                placeholder="What would you like to discuss?"
                required
                className="w-full rounded-lg border-2 border-brand-navy/20 bg-white px-4 py-3 text-brand-navy outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-brand-gold px-6 py-4 text-base font-bold text-brand-navy shadow-glow transition hover:bg-brand-gold/90 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
