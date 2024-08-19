import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
      setIsVisible(true); // Show the navbar as soon as someone scrolls
      resetHideTimeout();
    } else {
      setIsScrolled(false);
      setIsVisible(true); // Ensure navbar is visible when at the top
      clearTimeout(hideTimeoutRef.current); // Clear the timeout when not scrolled
    }
  };

  const handleMouseMove = () => {
    if (isScrolled) {
      setIsVisible(true);
      resetHideTimeout();
    }
  };

  const resetHideTimeout = () => {
    clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimeoutRef.current);
    };
  }, [isScrolled]);

  return (
    <div className="fixed w-full z-50">
      <div className={`flex justify-between  h-16 md:h-20 bg-none p-4  transition-all duration-500 ${isScrolled ? ' ' : ''} ${isScrolled && !isVisible ? '-translate-y-full' : 'translate-y-0'}`}>
        <div onClick={handleHomeClick} className='text-white font-Beba tracking-wide uppercase text-2xl md:text-4xl cursor-pointer'>
          Malermeisterei <span className='text-lg md:text-xl sm:text-sm font-ibm-plex-mono'>Mustermann</span>
        </div>
        <div className="md:hidden flex justify-center">
          <button onClick={handleToggle} className="text-white focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-12 text-lg md:text-xl text-white tracking-wide">
          <li>
            <div onClick={handleHomeClick} className="hover:text-blue-300 transition-all duration-300 cursor-pointer">
              HOME
            </div>
          </li>
          <li>
            <NavLink to="/gallery" className="hover:text-blue-300 transition-all duration-300 cursor-pointer">
              GALLERIE
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricelist" className="hover:text-blue-300 transition-all duration-300 cursor-pointer">
              PREISE
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-300 transition-all duration-300 cursor-pointer">
              KONTAKT
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-blue3 to-blue4 text-white flex flex-col justify-center items-center z-40 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col space-y-8 text-2xl text-white font-light tracking-wide">
          <li>
            <div onClick={() => { handleHomeClick(); handleToggle(); }} className="hover:text-gray-400 cursor-pointer">
              HOME
            </div>
          </li>
          <li>
            <NavLink to="/gallery" className="hover:text-gray-400 cursor-pointer" onClick={handleToggle}>
              GALLERIE
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricelist" className="hover:text-gray-400 cursor-pointer" onClick={handleToggle}>
              PREISE
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-400 cursor-pointer" onClick={handleToggle}>
              KONTAKT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
