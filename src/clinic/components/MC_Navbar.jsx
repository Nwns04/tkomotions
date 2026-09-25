import { Link } from 'react-router-dom';

export default function MC_Navbar({ onMenuClick, isMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E6E0] bg-[#FAFAF8]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/clinic" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A6B6E] text-sm font-bold text-white">
            M
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-[#2C2C2A]">MediCore</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#7A7A75]">Abuja</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#454440] lg:flex">
          <Link to="/clinic/about" className="transition hover:text-[#2A6B6E]">About</Link>
          <Link to="/clinic/services" className="transition hover:text-[#2A6B6E]">Services</Link>
          <Link to="/clinic/doctors" className="transition hover:text-[#2A6B6E]">Doctors</Link>
          <Link to="/clinic/departments" className="transition hover:text-[#2A6B6E]">Departments</Link>
          <Link to="/clinic/health-resources" className="transition hover:text-[#2A6B6E]">Resources</Link>
          <Link to="/clinic/contact" className="transition hover:text-[#2A6B6E]">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:08000000000"
            className="hidden text-sm font-medium text-[#C0392B] transition hover:text-[#9c2d22] sm:inline"
          >
            Emergency
          </a>
          <Link
            to="/clinic/appointment"
            className="inline-flex items-center justify-center rounded-sm bg-[#2A6B6E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#234f51]"
          >
            Book Visit
          </Link>
          <button type="button" onClick={onMenuClick} className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#D9D4CD] text-xl text-[#2C2C2A] lg:hidden" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? 'x' : '≡'}
          </button>
        </div>
      </div>
    </header>
  );
}
