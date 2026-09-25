export default function MC_ResourceCard({ resource }) {
  return (
    <article className="overflow-hidden rounded-[22px] border border-[#E8E6E0] bg-white transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(26,33,31,0.06)]">
      <img src={resource.image} alt={resource.title} className="h-52 w-full object-cover" />
      <div className="p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A6B6E]">Health Resources</p>
        <h3 className="mt-3 text-2xl leading-tight text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>{resource.title}</h3>
        <p className="mt-3 leading-7 text-[#5F5E5A]">{resource.summary}</p>
      </div>
    </article>
  );
}
