function ValueProposition() {
  const benefits = [
    {
      icon: '🌍',
      title: 'Global CEO Interaction',
      description: 'Network with renowned business leaders and executives across industries through our exclusive CXO series.'
    },
    {
      icon: '📈',
      title: 'Capital Appreciation',
      description: 'As a member of this private limited company,participate in the organization\'s growth and profitability.'
    },
    {
      icon: '💼',
      title: 'Industry Exposure & Real-World Skills',
      description: 'Develop practical expertise through immersive projects, events, and collaborations with leading organizations and clubs.'
    },
    {
      icon: '🚀',
      title: 'Innovation & Entrepreneurship',
      description: 'Lead initiatives that drive innovation while gaining hands-on experience in business development and strategic planning.'
    },
    {
      icon: '🤝',
      title: 'Professional Network',
      description: 'Build lasting relationships with corporate leaders, peers, and mentors that extend far beyond your university years.'
    },
    {
      icon: '🏆',
      title: 'Leadership Development',
      description: 'Accelerate your professional growth through structured mentorship, leadership training, and career advancement opportunities.'
    }
  ];

  return (
    <section id="value" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="space-y-12">
          <div className="text-center">
            <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
              Benefits
            </span>
            <h2 className="mt-6 text-4xl font-black text-brand-navy sm:text-5xl">
              Why Join the Enterprise
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-navy">
              ELC offers unparalleled opportunities for growth, learning, and professional development in a dynamic, innovative environment.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border-2 border-brand-navy/20 bg-white p-8 shadow-card transition hover:border-brand-gold hover:shadow-glow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{benefit.title}</h3>
                <p className="text-sm leading-6 text-brand-navy/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;
