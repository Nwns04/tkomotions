export default function MC_PageHeader({ eyebrow, title, description }) {
  return (
    <section className="border-b border-[#E8E6E0] bg-[#F5F2EC] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2A6B6E]">{eyebrow}</p>
        <h1 className="max-w-3xl text-5xl leading-[0.98] text-[#2C2C2A] md:text-7xl" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F5E5A]">{description}</p>}
      </div>
    </section>
  );
}
