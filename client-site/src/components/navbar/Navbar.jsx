import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  console.log(query)
  const [show, setShow] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 200 || window.scrollY < lastScrollY);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-slate-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto py-2 md:py-1.5 px-2 md:px-5 flex gap-5 justify-between items-center">
        <div className="logo w-[100px]">
         <Link to='/'> <img src="/logo.png" alt="Logo" /></Link>
        </div>
        <div className="search-bar bg-white border-amber-400 rounded px-4 flex justify-center items-center gap-1.5 border">
          <input
            type="text"
            placeholder="Search your products"
            className="py-1 md:w-[290px] outline-none"
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
          <LiaSearchSolid className="font-medium text-primary text-xl" />
        </div>
        <div className="user-info hidden md:block">
        <Link to='/signin' className="px-3 bg-white rounded flex items-center gap-1.5 border-amber-400 text-primary py-1 border">
          <FaUser /> Sign In
        </Link>
        </div>
        <div className="text-2xl text-amber-400 md:hidden"><FaRegCircleUser /></div>
      </div>
    </nav>
  );
};

export default Navbar;
