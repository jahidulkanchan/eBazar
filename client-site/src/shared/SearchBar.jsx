import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="search-bar max-w-[270px] md:min-w-[400px] bg-white border-amber-400 rounded px-4 flex justify-between items-center md:gap-1.5 border">
          <input 
            type="text"
            placeholder="Search your products"
            className="py-1 md:w-[290px] outline-none"
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="text-green-500 text-lg"><ImSearch /></span>
      </div>
    </>
  );
};

export default SearchBar;