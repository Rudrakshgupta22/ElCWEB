function ImpactMetrics() {
  const metrics = [
    { value: "14+", label: "Flagship Corporate Events" },
    { value: "100%", label: "Student Operated Board" },
    { value: "Pvt. Ltd.", label: "Registered Entity Status" }
  ];

  return (
    <section id="metrics" className="bg-white py-20 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {metrics.map((item, index) => (
            <div key={index} className="pt-6 sm:pt-0 sm:first:pl-0 sm:pl-10 space-y-3">
              <p className="text-6xl font-black tracking-tighter text-brand-navy sm:text-7xl">
                {item.value}
              </p>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactMetrics;