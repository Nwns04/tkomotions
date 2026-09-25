function PageHeader({ title, subtitle, image }) {
  return (
    <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ember-black via-ember-black/60 to-ember-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-cream mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-ash">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageHeader;