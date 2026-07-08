import { useState } from 'react';

function TeamRoster() {
  const [expandedTeam, setExpandedTeam] = useState(null);

  const team = {
    executives: [
      { role: 'CEO', name: 'Vallabh Dixit', phone: '6380324734', email: 'vallabh.dixit@universalai.in', image: '/images/C-suites/vallabh.jpeg' },
      { role: 'DCEO', name: 'Rutvi Parekh', phone: '9909076100', email: 'Rutvi.Parekh@universalai.in', image: '/images/C-suites/rutvi.jpeg' },
      { role: 'COO', name: 'Mitanshu Agrawal', phone: '7300411055', email: 'Mitanshu.Agrawal@universalai.in', image: '/images/C-suites/mitanshu.jpeg' },
      { role: 'CMO', name: 'Nupur Kumawat', phone: '6378372542', email: 'nupurkumawat@universalai.in', image: '/images/C-suites/nupur.jpeg' },
      { role: 'CSO', name: 'Jiya Patel', phone: '7045229068', email: 'jiya.patel@universalai.in', image: '/images/C-suites/jiya.jpeg' },
      { role: 'CFO', name: 'Ruchit Bhalodiya', phone: '9979350653', email: 'Ruchit.Bhalodiya@universalai.in', image: '/images/C-suites/ruchit.jpeg' },
      { role: 'CIO', name: 'Mohi Jain', phone: '7470417010', email: 'Mohi.jain@universalai.in', image: '/images/C-suites/mohi.jpeg' },
      { role: 'CHRO', name: 'Mahek Kushwah', phone: '8815352210', email: 'Mahek.kushwah@universalai.in', image: '/images/C-suites/mehek.jpeg' }
    ],
    vicePresidents: [
      { role: 'VP Marketing', name: 'Yash Sharma',image: '/images/VP/yash2.jpeg' },
      { role: 'VP Operations', name: 'Krishna Wagh',image: '/images/VP/krishna.jpeg' },
      { role: 'VP Sales', name: 'Pal Jain',image: '/images/VP/PAL.jpeg' },
      { role: 'VP Finance', name: 'Luvkishan Agrawal',image: '/images/VP/luv.jpeg' },
      { role: 'VP Innovation', name: 'Rudransh Choudhary',image: '/images/VP/rudransh.jpeg' },
      { role: 'VP HR', name: 'Anchal Pandey',image: '/images/VP/anchal.jpeg' },
    ]
  };

  return (
    <section id="team" className="relative overflow-hidden bg-brand-navy py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="space-y-16">
          <div className="text-center">
            <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
              Leadership
            </span>
            <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
              Meet Our Team
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
              Driven by passionate leaders dedicated to transforming student learning through real-world experience.
            </p>
          </div>

          {/* Executive Team */}
          <div>
            <h3 className="text-2xl font-bold text-brand-gold mb-8">Executive Committee</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.executives.map((member, idx) => (
                <div
                  key={idx}
                  onClick={() => setExpandedTeam(expandedTeam === idx ? null : idx)}
                  className="group cursor-pointer rounded-2xl border-2 border-brand-gold/30 bg-brand-navy-light p-6 shadow-card transition hover:border-brand-gold hover:shadow-glow"
                >
                 <div className="aspect-square overflow-hidden rounded-lg mb-4">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover"
  />
</div>
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-gold font-bold">{member.role}</p>
                  <p className="text-lg font-bold text-white mt-2">{member.name}</p>
                  
                  {expandedTeam === idx && (
                    <div className="mt-4 pt-4 border-t border-brand-gold/30 text-sm text-gray-300 space-y-2">
                      <p><span className="text-brand-gold">Phone:</span> {member.phone}</p>
                      <p><span className="text-brand-gold">Email:</span> {member.email}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Vice Presidents */}
          <div>
            <h3 className="text-2xl font-bold text-brand-gold mb-8">Vice Presidents</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.vicePresidents.map((member, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-brand-gold/30 bg-brand-navy-light p-6 shadow-card transition hover:border-brand-gold hover:shadow-glow"
                >
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover"
  />
</div>
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-gold font-bold">{member.role}</p>
                  <p className="text-lg font-bold text-white mt-2">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamRoster;
