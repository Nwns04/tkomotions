export default function MC_Footer() {
  return (
    <footer className="border-t border-[#E8E6E0] bg-[#FAFAF8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-sm text-[#5F5E5A] sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A6B6E] text-sm font-bold text-white">
              M
            </div>
            <div>
              <p className="text-lg font-semibold text-[#2C2C2A]">MediCore</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#7A7A75]">Abuja</p>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-7">
            Premium private healthcare designed around a calmer, more human experience for individuals, families, and professionals.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A6B6E]">Navigation</p>
          <ul className="mt-5 space-y-3">
            <li>About</li>
            <li>Services</li>
            <li>Doctors</li>
            <li>Resources</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A6B6E]">Contact</p>
          <ul className="mt-5 space-y-3">
            <li>Plot 18, Maitama District</li>
            <li>hello@medicoreabuja.com</li>
            <li>0800-000-0000</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
