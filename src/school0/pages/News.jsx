import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import { newsArticles } from '../data/news';
import { events } from '../data/events';

function News() {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'Academic', 'Campus', 'Achievement', 'Arts', 'Sports', 'Community'];
  const filteredNews = filter === 'all' ? newsArticles : newsArticles.filter(a => a.category === filter);

  return (
    <div className="bg-school-cream">
      <div className="bg-oak-green text-white py-12">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'News' }]} />
          <h1 className="text-4xl font-serif font-bold">News & Events</h1>
        </div>
      </div>

      <div className="container-hotel py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-soft-gray rounded-lg p-6 mb-6">
              <h3 className="font-serif font-bold text-ink mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setFilter(cat)}
                      className={`text-sm transition-colors ${filter === cat ? 'text-oak-green font-semibold' : 'text-slate hover:text-ink'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-oak-green text-white rounded-lg p-6">
              <h3 className="font-serif font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {events.slice(0, 3).map(event => (
                  <div key={event.id} className="border-b border-white/10 last:border-0 pb-3 last:pb-0">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-sage">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredNews.map(article => (
                <div key={article.id} className="bg-white border border-slate/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-mint text-oak-green px-2 py-0.5 rounded-full uppercase tracking-wider">{article.category}</span>
                      <span className="text-xs text-slate">{article.date}</span>
                    </div>
                    <h3 className="font-serif font-bold text-ink mb-2">{article.title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{article.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;