export default function MC_Resources({ resources }) {
  return (
    <div className="grid gap-7 md:grid-cols-3">
      {resources.map((resource) => (
        <article key={resource.id} className="overflow-hidden rounded-[26px] border border-[#E8E6E0] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#D0E0DD] hover:shadow-[0_22px_50px_rgba(26,33,31,0.06)]">
          <img
            src={resource.image}
            alt={resource.title}
            className="h-56 w-full object-cover"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80';
            }}
          />
          <div className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A6B6E]">Health Resources</p>
            <h3 className="mt-3 text-[1.7rem] leading-tight text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>
              {resource.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-[#5F5E5A]">{resource.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
