export default function MC_DoctorCard({ doctor, onSelect }) {
  return (
    <button type="button" onClick={() => onSelect?.(doctor)} className="group text-left">
      <div className="mx-auto aspect-square max-w-[260px] overflow-hidden rounded-full border-8 border-[#F5F2EC] bg-[#EDF2ED] transition duration-500 group-hover:scale-105">
        <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-5 text-center text-xl font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>{doctor.name}</h3>
      <p className="mt-1 text-center text-sm text-[#5F5E5A]">{doctor.specialty}</p>
    </button>
  );
}
