export default function MC_EmergencyBar() {
  return (
    <div className="border-b border-[#efd6d2] bg-[#fff8f7]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 text-sm sm:flex-row sm:px-6 lg:px-8">
        <span className="font-medium text-[#6b3933]">For urgent medical emergencies, call your local emergency service.</span>
        <a href="tel:08000000000" className="font-semibold text-[#C0392B]">MediCore: 0800-000-0000</a>
      </div>
    </div>
  );
}
