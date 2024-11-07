import React from 'react';

const Search = ({ setSearch }) => (
  <div className="p-6">
<div className="flex flex-col md:flex-row justify-between items-center">
  <input
    type="text"
    placeholder="Search for a country..."
    className=" rounded-lg shadow  px-12 py-2 bg-search-icon bg-width bg-no-repeat bg-position dark:bg-DarkModeElements dark:shadow dark:text-white"
    onChange={(e) => setSearch(e.target.value)}
  />
  </div>
  </div>
);

export default Search
