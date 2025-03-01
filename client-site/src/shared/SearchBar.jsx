import React, { useState } from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
const SearchBar = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="search-bar w-[250px] md:w-[350px] bg-white border-amber-400 rounded px-4 flex justify-center items-center gap-1.5 border">
          <input
            type="text"
            placeholder="Search your products"
            className="py-1 md:w-[290px] outline-none"
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
          <LiaSearchSolid className="font-medium text-primary text-xl" />
      </div>
    </>
  );
};

export default SearchBar;