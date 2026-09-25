export default function MC_AppointmentConfirmation({ onReset }) {
  return (
    <div className="rounded-[26px] border border-[#DDEDE0] bg-[#EDF5EF] p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A6B6E]">Request Received</p>
      <h2 className="mt-4 text-3xl text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>Thank you.</h2>
      <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-[#4D4B48]">Your appointment request has been received. Our team will contact you shortly to confirm your preferred time.</p>
      <button type="button" onClick={onReset} className="mt-6 rounded-sm border border-[#2A6B6E] px-5 py-3 text-sm font-semibold text-[#2A6B6E] transition hover:bg-[#2A6B6E] hover:text-white">Send another request</button>
    </div>
  );
}
