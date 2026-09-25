export default function MC_SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      <p
        className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: light ? '#D9E5E4' : '#2A6B6E', letterSpacing: '0.22em' }}
      >
        {eyebrow}
      </p>
      <h2
        className="text-3xl md:text-5xl leading-none"
        style={{ color: light ? '#F8F6F2' : '#2C2C2A', fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-5 text-base md:text-lg leading-8"
          style={{ color: light ? 'rgba(255,255,255,0.76)' : '#5F5E5A', fontFamily: 'Figtree, sans-serif' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
