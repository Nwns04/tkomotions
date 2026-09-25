export default function MC_ServiceList({ services }) {
  return (
    <div className="space-y-0">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="group border-t border-[#E8E6E0] py-7 first:border-t-0 md:py-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-5">
              <span className="text-2xl font-semibold text-[#2A6B6E] md:text-3xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-[#2C2C2A] md:text-[2rem]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {service.name}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-[#5F5E5A]">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-end">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D9D4CD] text-xl text-[#2A6B6E] transition group-hover:border-[#2A6B6E] group-hover:bg-[#E8F0F0]">
                →
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
