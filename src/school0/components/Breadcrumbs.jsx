import { Link } from 'react-router-dom';

function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm mb-4">
      <ol className="flex items-center space-x-2 text-slate">
        <li>
          <Link to="/school" className="hover:text-deep-green transition-colors">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-slate/40">/</span>
            {item.path ? (
              <Link to={item.path} className="hover:text-deep-green transition-colors">{item.label}</Link>
            ) : (
              <span className="text-ink font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;