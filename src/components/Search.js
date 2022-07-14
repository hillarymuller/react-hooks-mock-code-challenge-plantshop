import React from "react";

function Search({ search, onSearch }) {

  function updateSearch(e) {
    e.preventDefault();
    onSearch(e);
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={updateSearch}
      />
    </div>
  );
}

export default Search;
