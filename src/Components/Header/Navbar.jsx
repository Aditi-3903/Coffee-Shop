import { Search } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";


gsap.registerPlugin(useGSAP);

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Coffee", href: "/coffee" },
  { label: "Bakery", href: "/bakery" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
   { label: "Login", href: "/login",  },
];

const Navbar = () => {
  const Navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useGSAP(()=>{
    gsap.from(navRef.current,{
      y:-100,
      opacity:0,
      duration:0.5
    })
  })

  return (
    <header ref={navRef} className="absolute top-0 left-0 z-50 w-full px-10 py-4 font-poppins md:items-center  ">
      <nav
        className="flex  h-16 w-full items-center justify-between  text-white"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="nav-logo lg:px-7 text-5xl font-bold uppercase"
          aria-label="Coffee home"
        >
          <span className="text-6xl">C</span>offee
        </a>

        {/* Navigation */}
        <ul className="nav-items lg:flex hidden  items-center justify-center lg:gap-8 gap-2 lg:text-xl text-base uppercase">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label}
              
               to = {item.href}
                className="nav-item transition-opacity duration-200 hover:opacity-70">
              
                {item.label}
              </Link>
            
          ))}

          {/* <li>
            <a
              href="/login"
              className="nav-item font-semibold transition-opacity duration-200 hover:opacity-70" 
            >
              Login
            </a>
          </li> */}
        </ul>

        {/* Search */}
      <div className="flex justify-center items-center gap-3">  <button
          type="button"
          className="nav-search lg:mr-16 flex items-center justify-center "
          aria-label="Search"
        >
          <Search className="lg:size-9 size-6 " strokeWidth={1.5} />
        </button>

          <div onClick={()=>{
                  setMenuOpen(!menuOpen)
                }} className='lg:hidden flex flex-col gap-1.5  cursor-pointer'>
                    <span className ={`inline-block w-7  h-0.5 z-50 bg-white transition-all duration-300 origin-center ${menuOpen? "rotate-45 translate-y-1":''}`}></span>
                      <span className ={`inline-block w-7  h-0.5 z-50  bg-white transition-all duration-300 origin-center ${menuOpen? "-rotate-45 -translate-y-1":''}`}></span>
                </div>
                </div>
      </nav>
       <div onClick={()=>setMenuOpen(false)} className={`fixed z-20 h-screen  inset-0 bg-[#510d03] text-white flex flex-col items-center justify-center gap-4 transition-all duration-500 ${menuOpen?"translate-y-0":"-translate-y-full"} `}>
        <Link to="/"className='menu-link'>Home</Link>
        <Link to="/about"className='menu-link'>About</Link>
        <Link to="/bakery"className='menu-link'>Bakery</Link>
        <Link to="/coffee"className='menu-link'>Coffee</Link>
        <Link to="/shop"className='menu-link'>Shop</Link>
        <Link to="/login"className='menu-link '>Login</Link>
        </div>
    </header>
  );
};

export default Navbar;