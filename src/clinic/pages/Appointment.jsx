import MC_PageHeader from '../components/MC_PageHeader';
import MC_AppointmentForm from '../components/MC_AppointmentForm';

export default function Appointment() {
  return <><MC_PageHeader eyebrow="Book a visit" title="Request an appointment." description="Share a few details and our care team will follow up to confirm the right time and department." /><section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8"><MC_AppointmentForm /><p className="mt-5 text-center text-xs leading-6 text-[#8A8A85]">This is a fictional demonstration. No real appointment will be created.</p></section></>;
}
