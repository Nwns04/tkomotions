import { useClinic } from '../context/ClinicContext';
import MC_AppointmentConfirmation from './MC_AppointmentConfirmation';

export default function MC_AppointmentForm() {
  const { appointment, requestAppointment, clearAppointment } = useClinic();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    requestAppointment(Object.fromEntries(formData.entries()));
  };

  return (
    <div className="rounded-[28px] border border-[#E8E6E0] bg-[#FFFFFF] p-6 shadow-[0_22px_50px_rgba(44,44,42,0.04)] md:p-8">
      {appointment ? <MC_AppointmentConfirmation onReset={clearAppointment} /> : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-[#4B4A46]">Full Name</span>
              <input name="fullName" required type="text" className="w-full rounded-sm border border-[#D9D4CD] bg-[#FAFAF8] px-4 py-3 text-[#2C2C2A] outline-none transition focus:border-[#2A6B6E]" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#4B4A46]">Email</span>
              <input name="email" required type="email" className="w-full rounded-sm border border-[#D9D4CD] bg-[#FAFAF8] px-4 py-3 text-[#2C2C2A] outline-none transition focus:border-[#2A6B6E]" placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#4B4A46]">Phone</span>
              <input name="phone" required type="tel" className="w-full rounded-sm border border-[#D9D4CD] bg-[#FAFAF8] px-4 py-3 text-[#2C2C2A] outline-none transition focus:border-[#2A6B6E]" placeholder="0800-000-0000" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#4B4A46]">Department</span>
              <select name="department" className="w-full rounded-sm border border-[#D9D4CD] bg-[#FAFAF8] px-4 py-3 text-[#2C2C2A] outline-none transition focus:border-[#2A6B6E]">
                <option>General Practice</option>
                <option>Family Medicine</option>
                <option>Pediatrics</option>
                <option>Women’s Health</option>
                <option>Diagnostics</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#4B4A46]">Preferred Doctor</span>
              <input name="doctor" type="text" className="w-full rounded-sm border border-[#D9D4CD] bg-[#FAFAF8] px-4 py-3 text-[#2C2C2A] outline-none transition focus:border-[#2A6B6E]" placeholder="Optional" />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-[#4B4A46]">Preferred Date</span>
              <input name="date" required type="date" className="w-full rounded-sm border border-[#D9D4CD] bg-[#FAFAF8] px-4 py-3 text-[#2C2C2A] outline-none transition focus:border-[#2A6B6E]" />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#4B4A46]">Reason for Visit</span>
            <textarea name="reason" required rows="4" className="w-full rounded-sm border border-[#D9D4CD] bg-[#FAFAF8] px-4 py-3 text-[#2C2C2A] outline-none transition focus:border-[#2A6B6E]" placeholder="Tell us what you need help with" />
          </label>

          <button type="submit" className="inline-flex w-full items-center justify-center rounded-sm bg-[#2A6B6E] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#234f51]">
            Submit Appointment Request
          </button>
        </form>
      )}
    </div>
  );
}
