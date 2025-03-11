import { useEffect, useState } from "react";
import { FaRegHeart, FaUser, FaWhatsapp } from "react-icons/fa";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchBar from "../../shared/SearchBar";
import { RxCross2 } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineLogout, MdPhone } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { HiLogout } from "react-icons/hi";
import { axiosPublic } from "../../hooks/useAxiosPublic";

const Navbar = () => {
  const [users, setUsers] = useState([]);
  const {user,signOutUser} = useAuth()
  const [isHidden, setIsHidden] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);   

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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosPublic.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  const authInfo = users.find(auth=> auth?.email === user?.email)
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
          <div className="user-info hidden md:flex items-center gap-5">
              <Link to="https://web.whatsapp.com" className="text-2xl text-green-400 transition-transform duration-500 hover:rotate-y-180">
                <FaWhatsapp />
              </Link>
            {user? <button onClick={signOutUser} className="px-3
            relative bg-white group cursor-pointer overflow-hidden rounded flex items-center gap-1.5 border-amber-400 py-1 border">Sign Out</button> : 
            <Link
            to="/signin"
            className="px-3
            relative bg-white group overflow-hidden rounded flex items-center gap-1.5 border-amber-400 py-1 border"
          > 
            <span className="absolute w-full h-full left-0 top-0 scale-0 group-hover:scale-100 duration-200 bg-[#fcfcfc] -z-0"></span>
            <FaUser className="text-amber-400 z-[2]" /> <span className="z-[2]">Sign In</span>
          </Link>
            }
          </div>
          <div className="flex md:hidden items-center gap-4">
          <Link to="https://web.whatsapp.com" className="text-2xl text-green-400 transition-transform duration-500 hover:rotate-y-180">
                <FaWhatsapp />
              </Link>
          <div
            className="relative cursor-pointer md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsHidden(true)
            }}
          >
            <span className="text-2xl text-amber-400">
              <FaRegCircleUser />
            </span>
            <div
              className={`auth-menu duration-200 origin-top transform ${
                isOpen ? "scale-y-100" : "scale-y-0"
              } absolute -left-[40px] py-3 min-w-[100px]`}
            >
              <ul className="bg-white cursor-auto border-amber-400 rounded-b-md border-b-2 py-2 ps-2">
                {user? <>
                  <li><Link to="/profile">Profile</Link></li>
                  {authInfo?.role === 'admin' &&
                    <li><Link to="/dashboard">Dashboard</Link></li>
                  }
                  <li onClick={signOutUser} className="flex cursor-pointer hover:text-amber-400 duration-100 gap-1.5 items-center">Sign Out <HiLogout /> </li>
                </> :
                <>
                  <li><Link to="/signin">Sign In</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
                </>}
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
                isHidden ? "" : "text-amber-500"
              } bar-icon cursor-pointer text-xl`}
            >
              <FaBarsStaggered />
            </div>
          </div>
        </div>
        {/* ============ sub navbar =========== */}
        <div className="bg-gradient-to-r from-[#FEC013] to-amber-400">
          <div className="min-h-[50px] container mx-auto md:px-5 flex justify-center gap-4 md:justify-between items-center">
            <div className="hidden md:flex bg-white px-3 py-1 rounded-sm font-medium items-center gap-0.5 md:min-w-[70px]"><MdPhone className="text-xl mt-0.5" /><span>+880 234 43543</span></div>
            <SearchBar />
            <div className="shopping-info bg-white rounded-t-md px-1.5 py-0.5 md:py-1 flex items-center gap-2 md:gap-5">
              <Link to="/" className="text-2xl duration-150 hover:text-amber-400 mt-1">
                <IoMdHeartEmpty />
              </Link>
              <Link to="/" className="text-2xl duration-150 hover:text-amber-400">
                <LiaShoppingBagSolid />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
