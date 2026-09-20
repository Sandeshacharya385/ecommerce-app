function FilterBar({ searchTerm, onSearchChange, selectedCategory, onCategoryChange, categories }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar