function SchoolPageHeader({ title, subtitle, image }) {
  return (
    <div className="relative h-[40vh] min-h-[350px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/50 to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="container-hotel pb-8 px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SchoolPageHeader;