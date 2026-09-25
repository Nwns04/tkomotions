export default function MC_DepartmentSection({ departments }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {departments.map((department) => (
        <article key={department.id} className="grid gap-5 border-t border-[#E8E6E0] pt-6 sm:grid-cols-[180px_1fr]">
          <img src={department.image} alt={department.name} className="h-40 w-full rounded-[18px] object-cover sm:h-32" />
          <div>
            <h3 className="text-2xl font-semibold text-[#2C2C2A]" style={{ fontFamily: 'Manrope, sans-serif' }}>{department.name}</h3>
            <p className="mt-3 leading-7 text-[#5F5E5A]">{department.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
