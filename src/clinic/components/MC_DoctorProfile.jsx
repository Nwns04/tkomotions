export default function MC_DoctorProfile({ doctor, onClose }) {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#2C2C2A]/50 p-4" role="dialog" aria-modal="true" aria-label={`${doctor.name} profile`}>
      <div className="relative grid max-h-[90vh] w-full max-w-2xl gap-6 overflow-auto rounded-[24px] bg-[#FAFAF8] p-6 md:grid-cols-[220px_1fr] md:p-8">
        <button type="button" onClick={onClose} className="absolute right-5 top-4 text-2xl text-[#5F5E5A]" aria-label="Close profile">×</button>
        <img src={doctor.image} alt={doctor.name} className="h-56 w-56 rounded-full object-cover" />
        <div className="pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A6B6E]">MediCore Specialist</p>
          <h2 className="mt-3 text-3xl text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>{doctor.name}</h2>
          <p className="mt-2 text-[#5F5E5A]">{doctor.specialty}</p>
          <p className="mt-6 leading-7 text-[#5F5E5A]">A thoughtful clinician committed to clear communication, careful diagnosis, and care plans shaped around each patient.</p>
        </div>
      </div>
    </div>
  );
}
