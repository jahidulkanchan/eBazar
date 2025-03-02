import { useEffect, useState } from "react";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchBar from "../../shared/SearchBar";
import { RxCross2 } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);

  console.log(isHidden);      

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
            <Link to="/">
              {" "}
              <img
                className="logo w-[80px] md:w-[100px]"
                src="/logo.png"
                alt="Logo"
              />
            </Link>  
          </div>
          {/* our menu items */}
          <div
            className={`${
              isHidden ? "-right-[200px]" : "right-[0px]"
            } absolute duration-200 md:static top-[50px] border-l-2 border-amber-400 md:border-none bg-white md:bg-transparent  px-5 md:px-0 py-8 md:py-0`}
          >
            <div className="relative -right-2 -top-5 block md:hidden">
              <div
                onClick={() => setIsHidden(!isHidden)}
                className="cancel-btn cursor-pointer text-2xl w-fit absolute right-0 top-0"
              >
                <RxCross2 />
              </div>
            </div>
            <ul className="flex flex-col md:flex-row md:items-center justify-center gap-5 md:gap-8">
              <li className="relative group w-fit">
                <span className="absolute w-[8px] group-hover:w-full duration-200 h-[2px] bg-amber-400 bottom-0"></span>
                <Link to="/food">Food</Link>
              </li>
              <li className="relative group w-fit">
                <span className="absolute w-[8px] group-hover:w-full duration-200 h-[2px] bg-amber-400 bottom-0"></span>
                <Link to="/gadget">Gadget</Link>{" "}
              </li>
              <li className="relative group w-fit">
                <span className="absolute w-[8px] group-hover:w-full duration-200 h-[2px] bg-amber-400 bottom-0"></span>
                <Link to="/beauty-care">Beauty & Health</Link>{" "}
              </li>
              <li className="relative group w-fit">
                <span className="absolute w-[8px] group-hover:w-full duration-200 h-[2px] bg-amber-400 bottom-0"></span>
                <Link to="/others">Others</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="user-info hidden md:block">
            <Link
              to="/signin"
              className="px-3 bg-white rounded flex items-center gap-1.5 border-amber-400 py-1 border"
            >
              <FaUser className="text-amber-400" /> <span>Sign In</span>
            </Link>
          </div>
          <div className="flex md:hidden items-center gap-4">
          <div
            className="relative cursor-pointer md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsHidden(true)
            }}
          >
            <span className="text-2xl text-amber-500">
              <FaRegCircleUser />
            </span>
            <div
              className={`auth-menu duration-200 origin-top transform ${
                isOpen ? "scale-y-100" : "scale-y-0"
              } absolute -left-[40px] py-3 min-w-[100px]`}
            >
              <ul className="bg-white cursor-auto border-amber-400 rounded-b-md border-b-2 py-2 ps-2">
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </ul>
            </div>
          </div>
            {/* Hambarger icon */}
            <div
              onClick={() => {
                setIsHidden(!isHidden);
                setIsOpen(false)
              }}
              className={`${
                isHidden ? "" : "text-amber-300"
              } bar-icon cursor-pointer text-xl`}
            >
              <FaBarsStaggered />
            </div>
          </div>
        </div>
        <div className="min-h-[50px] container mx-auto px-1.5 md:px-5 flex justify-between items-center bg-amber-400">
          <div className="hidden md:block"></div>
          <SearchBar />
          <div className="shopping-info flex items-center gap-2 md:gap-3">
            <Link to="/" className="text-2xl mt-1">
              <IoMdHeartEmpty />
            </Link>
            <Link to="/" className="text-2xl">
              <LiaShoppingBagSolid />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
