function RE_PageHeader({ title, subtitle, resultCount }) {
  return (
    <div className="bg-light-gray py-8 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy">{title}</h1>
        {subtitle && <p className="text-muted mt-2">{subtitle}</p>}
        {resultCount !== undefined && (
          <p className="text-sm text-muted mt-1">{resultCount} properties found</p>
        )}
      </div>
    </div>
  );
}

export default RE_PageHeader;