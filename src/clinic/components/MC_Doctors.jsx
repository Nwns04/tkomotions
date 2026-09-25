export default function MC_Doctors({ doctors }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {doctors.map((doctor) => (
        <article key={doctor.id} className="group cursor-pointer overflow-hidden rounded-[24px] border border-[#E8E6E0] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#D0E0DD] hover:shadow-[0_25px_60px_rgba(42,107,110,0.08)]">
          <div className="overflow-hidden rounded-[20px] bg-[#F2F4F0]">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80';
              }}
            />
          </div>
          <div className="px-2 pb-2 pt-5">
            <h3 className="text-2xl font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {doctor.name}
            </h3>
            <p className="mt-2 text-base text-[#5D5B57]">{doctor.specialty}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
