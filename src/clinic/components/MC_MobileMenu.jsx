import { Link } from 'react-router-dom';

export default function MC_MobileMenu({ isOpen, onClose }) {
  const links = [
    ['About', '/clinic/about'],
    ['Services', '/clinic/services'],
    ['Doctors', '/clinic/doctors'],
    ['Departments', '/clinic/departments'],
    ['Resources', '/clinic/health-resources'],
    ['Contact', '/clinic/contact'],
  ];

  return (
    <div className={`fixed inset-0 z-[60] transition ${isOpen ? 'visible' : 'invisible'}`} aria-hidden={!isOpen}>
      <button type="button" onClick={onClose} className={`absolute inset-0 bg-[#2C2C2A]/35 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} aria-label="Close menu" />
      <aside className={`absolute right-0 top-0 h-full w-[min(88vw,380px)] bg-[#FAFAF8] p-6 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-[#E8E6E0] pb-5">
          <span className="text-lg font-semibold text-[#2C2C2A]">MediCore Abuja</span>
          <button type="button" onClick={onClose} className="text-2xl text-[#5F5E5A]" aria-label="Close menu">x</button>
        </div>
        <nav className="mt-8 flex flex-col gap-1">
          {links.map(([label, path]) => <Link key={path} to={path} onClick={onClose} className="border-b border-[#E8E6E0] py-4 text-xl text-[#2C2C2A]">{label}</Link>)}
        </nav>
        <div className="mt-8 grid gap-3">
          <Link to="/clinic/appointment" onClick={onClose} className="rounded-sm bg-[#2A6B6E] px-5 py-4 text-center text-sm font-semibold text-white">Book Appointment</Link>
          <a href="tel:08000000000" className="rounded-sm border border-[#C0392B] px-5 py-4 text-center text-sm font-semibold text-[#C0392B]">Emergency Care</a>
        </div>
      </aside>
    </div>
  );
}
