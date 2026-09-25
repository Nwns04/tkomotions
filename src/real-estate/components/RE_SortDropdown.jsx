function RE_SortDropdown({ sortBy, onSortChange }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="px-3 py-2 border border-border text-sm text-dark-gray focus:outline-none focus:border-navy rounded bg-white"
    >
      <option value="newest">Newest First</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
    </select>
  );
}

export default RE_SortDropdown;