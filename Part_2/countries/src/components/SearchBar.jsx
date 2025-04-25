const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
        <h2>Search for a country</h2>
        <input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  );
}
export default SearchBar;