import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="fixed w-full top-0.5 left-0 z-50">
      <div className="flex  text-xl justify-between items-center px-6 max-w-[1000px] mx-auto h-15   rounded-3xl ">
        {/* Logo */}
        <a href="#" 
   className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 
              text-4xl font-bold tracking-wide hover:scale-105 transition-transform duration-300 ease-in-out">
             Kasun_Sri_
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 cursor-pointer">
          {['about', 'portfolio', 'contact'].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item}
                smooth={true}
                offset={50}
                duration={500}
                className="text-white text-lg tracking-wide transition-all duration-300 hover:text-sky-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={toggleNav} className="md:hidden text-white z-30 cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center transform ${
          nav ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="font-semibold text-3xl text-white space-y-8">
          {['about', 'portfolio', 'contact'].map((item) => (
            <li key={item}>
              <Link to={item} onClick={closeNav} smooth={true} offset={50} duration={500}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
