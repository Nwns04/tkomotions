export default function MC_TrustBar() {
  const items = [
    '24/7 patient support',
    '20+ services',
    'Multidisciplinary care',
  ];

  return (
    <section className="border-y border-[#E8E6E0] bg-[#F5F2EC]">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-3 text-center text-sm font-medium uppercase tracking-[0.18em] text-[#4E4B46] md:flex-row md:gap-0 md:divide-x md:divide-[#D7D3CD]">
          {items.map((item, index) => (
            <div key={item} className={index > 0 ? 'md:px-8' : 'md:pr-8'}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
