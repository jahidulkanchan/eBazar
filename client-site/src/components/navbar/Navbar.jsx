import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import SearchBar from "../../shared/SearchBar";

const Navbar = () => {
  const [ishidden,setIshidden] = useState(true)
  const [show, setShow] = useState(true);

  console.log(ishidden)

  let lastScrollY = 0;
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 0 || window.scrollY < lastScrollY);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <>
     <nav
      className={`fixed top-0 w-full bg-slate-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-[52px] md:-translate-y-[56px]"
      }`}
    >
      <div className="container mx-auto py-2 md:py-1.5 px-2 md:px-5 flex gap-5 justify-between items-center">
        <div>
         <Link to='/'> <img className="logo w-[80px] md:w-[100px]" src="/logo.png" alt="Logo" /></Link>
        </div>
        {/* our menu items */}
        <div  className={`${ishidden? '-right-[200px]' : 'right-[0px]'} absolute duration-200 md:static top-[50px] bg-white md:bg-transparent  px-5 md:px-0 py-8 md:py-0`}>
          <ul className="flex flex-col md:flex-row md:items-center justify-center gap-5 md:gap-8">
            <li className="relative group w-fit"><span className="absolute w-[8px] group-hover:w-full duration-200 h-[2px] bg-amber-400 bottom-0"></span><Link to='/food'>Food</Link></li>
            <li className="relative group w-fit"><span className="absolute w-[8px] group-hover:w-full duration-200 h-[2px] bg-amber-400 bottom-0"></span><Link to='/gadget'>Gadget</Link> </li>
            <li className="relative group w-fit"><span className="absolute w-[8px] group-hover:w-full duration-200 h-[2px] bg-amber-400 bottom-0"></span><Link to='/beauty-care'>Beauty & Health</Link> </li>
            <li className="relative group w-fit"><span className="absolute w-[8px] group-hover:w-full duration-200 h-[2px] bg-amber-400 bottom-0"></span><Link to='/others'>Others</Link> </li>
          </ul>
        </div>
        <div className="user-info hidden md:block">
        <Link to='/signin' className="px-3 bg-white rounded flex items-center gap-1.5 border-amber-400 text-primary py-1 border">
          <FaUser /> Sign In
        </Link>
        </div>
        <div className="flex md:hidden items-center gap-4">
          <div className="text-2xl text-amber-400 md:hidden"><FaRegCircleUser /></div>
        {/* Hambarger icon */}
        <div onClick={()=>setIshidden(!ishidden)} className={`${ishidden? '' : 'text-amber-400'} bar-icon cursor-pointer text-xl`}>
        <FaBarsStaggered />
        </div>
        </div>
      </div>
      <div className="min-h-[50px] flex justify-center items-center bg-amber-300">
      <SearchBar/>
      </div>
    </nav>
   </>
  );
};

export default Navbar;
