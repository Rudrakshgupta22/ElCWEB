const leadership = [
  {
    role: 'Chief Executive Officer',
    name: 'Vallabh Dixit',
    title: 'Chief Executive Officer'
  },
  {
    role: 'Deputy Chief Executive Officer',
    name: 'Rutvi Parekh',
    title: 'Deputy Chief Executive Officer'
  }
];

const departments = [
  {
    icon: '.',
    title: 'Marketing',
    description:
      'Aligns strategic positioning, campaigns, and brand messaging to elevate ELC’s corporate presence across campus and external stakeholders.',
    cSuite: ['Nupur Kumawat'],
    vp: 'Yash Sharma',
    leads: ['Shubh (Team Leader)', 'Ramanpreet', 'Surbhi Priya','Ishika Vaswani','Ayush Chowdhary','Shrayaskar']
  },
  {
    icon: '.',
    title: 'Digital Marketing',
    description:
      'Executes digital growth initiatives, content strategy, media planning, and performance measurement for all ELC programs.',
    cSuite: ['Mohi Jain'],
    vp: 'Rudransh Choudhary',
    leads: ['Rudraksh gupta (Team Leader)', 'Vaishali Mehta', 'Vivaan Kashyap']
  },
  {
    icon: '.',
    title: 'Business Development',
    description:
      'Builds partner relationships, secures collaborations, and develops revenue-aligned sponsorship programs for ELC.',
    cSuite: ['Jiya Patel'],
    vp: 'Pal Jain',
    leads: ['Shreya Anand (Team Leader)', 'Adtiya Tank', 'Khushi Bhatiya','Hiren Jurani']
  },
  {
    icon: '.',
    title: 'Human Resources',
    description:
      'Owns talent acquisition, leadership development, and internal culture for a structured student-corporate organisation.',
    cSuite: ['Mahek Kushwah'],
    vp: 'Anchal Pandey',
    leads: ['Divya Chaturvedi (Team Leader)', 'Saloni Wagh', 'Ankita','Shikha','Mandvi']
  },
  {
    icon: '.',
    title: 'Operations',
    description:
      'Delivers end-to-end execution, process governance, event logistics, and quality delivery for all ELC initiatives.',
    cSuite: ['Mitanshu Agrawal'],
    vp: 'Krishna Wagh',
    leads: ['Yash Pardesi (Team Leader)', 'Aditya Kundaliya', 'Aditya Pandey','Sapna','Anvesha']
  },
{
    icon: '.',
    title: 'Finance',
      description:
        'Manages financial planning, budgeting, and resource allocation to ensure sustainable growth and operational efficiency for ELC.',
    cSuite: ['Ruchit Bhalodiya'],
    vp: 'Luvkishan Agrawal',
    leads: ['Khushi Jain (Team Leader)', 'Prakash']
  }

];

function Departments() {
  return (
    <section id="departments" className="py-24 sm:py-28 bg-brand-navy">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-brand-gold">
            Organizational Structure
          </span>
          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Leadership & Departments
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            ELC operates as a structured corporate entity with executive leadership and specialised business functions designed to scale campus partnerships.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {leadership.map((item) => (
            <article key={item.role} className="rounded-2xl border-2 border-brand-gold/30 bg-brand-navy-light p-8 shadow-card transition hover:border-brand-gold">
              <p className="text-xs uppercase tracking-[0.26em] text-brand-gold font-bold">{item.role}</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{item.name}</h3>
              <p className="mt-3 text-gray-300">{item.title}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-2">
          {departments.map((department) => (
            <article
              key={department.title}
              className="rounded-2xl border-2 border-brand-gold/30 bg-brand-navy-light p-8 shadow-card transition hover:border-brand-gold"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-navy text-2xl text-white border-2 border-brand-gold">
                {department.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{department.title}</h3>
              <p className="mt-4 text-gray-300 leading-7">{department.description}</p>
              <div className="mt-6 space-y-4 text-sm text-gray-300">
                <div>
                  <p className="font-bold text-brand-gold">C-Suite Role</p>
                  <p className="mt-1 text-gray-300">{department.cSuite.join(', ')}</p>
                </div>
                <div>
                  <p className="font-bold text-brand-gold">Vice President</p>
                  <p className="mt-1 text-gray-300">{department.vp}</p>
                </div>
                <div>
                  <p className="font-bold text-brand-gold">Team Leaders</p>
                  <p className="mt-1 text-gray-300">{department.leads.join(', ')}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Departments;
