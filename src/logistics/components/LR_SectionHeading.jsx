function LR_SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="font-mono text-lr-lime text-sm uppercase tracking-widest mb-3">{eyebrow}</p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lr-off-white leading-tight tracking-tight mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lr-off-white/60 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export default LR_SectionHeading;