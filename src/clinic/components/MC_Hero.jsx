export default function MC_Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
        <div className="relative z-10 order-2 lg:order-1">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2A6B6E]">
            Private medical care, thoughtfully delivered
          </p>

          <h1
            className="max-w-xl text-5xl leading-[0.9] tracking-[-0.06em] text-[#2C2C2A] md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}
          >
            Healthcare that feels clearer, calmer, and more personal.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5E5D59]">
            Modern private healthcare built around expert clinicians, responsive support, and a patient experience designed to reduce uncertainty from the very first step.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center rounded-sm bg-[#2A6B6E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#234f51]"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-sm border border-[#D7D3CD] bg-white px-6 py-3.5 text-sm font-semibold text-[#2C2C2A] transition hover:border-[#2A6B6E] hover:text-[#2A6B6E]"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#E8E6E0] pt-5 text-sm text-[#676562]">
            <span>24/7 patient support</span>
            <span>20+ services</span>
            <span>Same-day guidance available</span>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[28px] border border-[#E8E6E0] bg-[#F1F2EE] shadow-[0_30px_80px_rgba(26,33,31,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895973?auto=format&fit=crop&w=1200&q=80"
              alt="Doctor with patient"
              className="h-[420px] w-full object-cover md:h-[520px]"
              loading="eager"
              onError={(event) => {
                event.currentTarget.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8]/25 via-transparent to-[#FAFAF8]/10" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[20px] border border-white/60 bg-white/85 p-4 backdrop-blur-sm md:left-6 md:right-auto md:w-[280px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2A6B6E]">Care path</p>
              <p className="mt-2 text-lg font-semibold text-[#2C2C2A]">From first concern to confident next step</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
