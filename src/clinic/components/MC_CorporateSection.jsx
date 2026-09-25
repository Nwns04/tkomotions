export default function MC_CorporateSection() {
  return (
    <section className="bg-[#2A6B6E] py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D9E5E4]">Corporate Healthcare</p>
          <h2 className="mt-5 max-w-xl text-4xl leading-tight md:text-5xl" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>Health support that helps teams thrive.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">From annual screenings to ongoing wellness support, we help organizations make care easier to access and easier to manage.</p>
          <a href="#contact" className="mt-8 inline-flex rounded-sm bg-white px-6 py-3.5 text-sm font-semibold text-[#2A6B6E] transition hover:bg-[#EDF2ED]">Discuss Corporate Care</a>
        </div>
        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80" alt="Professionals in a meeting" className="h-[360px] w-full rounded-[24px] object-cover" />
      </div>
    </section>
  );
}
