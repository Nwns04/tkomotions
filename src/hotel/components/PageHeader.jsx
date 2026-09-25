function PageHeader({ title, subtitle, image }) {
  return (
    <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/80">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageHeader;