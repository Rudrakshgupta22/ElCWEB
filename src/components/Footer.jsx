const footerLinks = [
  { title: 'Company', links: ['About', 'Leadership', 'Careers', 'Contact'] },
  { title: 'Programs', links: ['Events', 'Workshops', 'Partnerships', 'Media Kit'] },
  { title: 'Support', links: ['FAQ', 'Privacy', 'Terms', 'Press'] }
];

function Footer() {
  return (
    <footer className="bg-brand-navy border-t-2 border-brand-gold/30 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div>
            <a href="#hero" className="inline-flex items-center gap-3 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy border-2 border-brand-gold text-lg font-black text-brand-gold shadow-glow">
                ELC
              </div>
              <div>
                <p className="text-lg font-bold">Experiential Learning Corporation</p>
                <p className="mt-2 max-w-xs text-sm text-gray-300">
                  A premier student-led private limited company delivering experiential learning and industry partnerships.
                </p>
              </div>
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">{group.title}</h4>
              <ul className="mt-6 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-300 transition hover:text-brand-gold">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-brand-gold/30 pt-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Experiential Learning Corporation (ELC). All rights reserved.</p>
          <p>A corporate-grade student organisation for future-ready partnerships.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
