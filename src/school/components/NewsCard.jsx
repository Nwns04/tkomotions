function NewsCard({ article, featured = false }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
      featured ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      <div className={`${featured ? 'h-64 md:h-80' : 'h-48'} overflow-hidden`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs bg-mint text-oak-green px-3 py-1 rounded-full uppercase tracking-wider font-medium">
            {article.category}
          </span>
          <span className="text-xs text-slate">{article.date}</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-ink mb-2">{article.title}</h3>
        <p className="text-slate text-sm leading-relaxed">{article.excerpt}</p>
      </div>
    </div>
  );
}

export default NewsCard;