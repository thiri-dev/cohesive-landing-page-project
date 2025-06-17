import React, { useState } from 'react';
import robot from '../assets/robot.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu item clicks
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the mobile menu
  };

  return (
    <div className='flex justify-between items-center bg-[#6789fae9] mx-4 md:mx-15 my-6 px-4 py-5 rounded-full relative ' 
    style={{
      position: 'sticky',
      top: '0',
      zIndex: '50',
      backgroundColor: 'rgba(103, 137, 250, 0.9)',
      backdropFilter: 'blur(10px)',
      padding: '1rem',
      margin: '1.5rem',
      borderRadius: '9999px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>

      {/* Logo Section */}
      <div className='flex gap-2 items-center min-w-[120px]'>
        <img src={robot} alt="robot-logo" className='w-10'/>
        <h1 className='text-white font-bold text-2xl whitespace-nowrap'>Cohesive</h1>
      </div>

      {/* Desktop Menu (hidden below 900px) */}
      <div className='hidden min-[900px]:flex items-center gap-4 lg:gap-8 whitespace-nowrap'>
        <ul className='flex text-white gap-1 lg:gap-5'>
          <li>
            <a 
              href="#Home" 
              className='hover:text-gray-200 transition px-2 py-1'
              onClick={handleMenuItemClick}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#Features" 
              className='hover:text-gray-200 transition px-2 py-1'
              onClick={handleMenuItemClick}
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#Templates" 
              className='hover:text-gray-200 transition px-2 py-1'
              onClick={handleMenuItemClick}
            >
              Templates
            </a>
          </li>
          <li>
            <a 
              href="#q&as" 
              className='hover:text-gray-200 transition px-2 py-1'
              onClick={handleMenuItemClick}
            >
              F&Qs
            </a>
          </li>
          <li>
            <a 
              href="#Pricing" 
              className='hover:text-gray-200 transition px-2 py-1'
              onClick={handleMenuItemClick}
            >
              Pricing
            </a>
          </li>
        </ul>
        <button className='btn-primary'>
          SIGN UP IT'S FREE
        </button>
      </div>

      {/* Mobile Menu Button (shown below 900px) */}
      <div className='min-[900px]:hidden'>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-white focus:outline-none'
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (shown when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className='min-[900px]:hidden absolute top-24 left-4 right-4 bg-[#809ceae9] py-4 px-6 rounded-xl shadow-lg z-50'>
          <ul className='flex flex-col space-y-4 text-white'>
            <li>
              <a 
                href="#Home" 
                className='block py-1 hover:text-gray-200'
                onClick={handleMenuItemClick}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#Features" 
                className='block py-1 hover:text-gray-200'
                onClick={handleMenuItemClick}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#Templates" 
                className='block py-1 hover:text-gray-200'
                onClick={handleMenuItemClick}
              >
                Templates
              </a>
            </li>
            <li>
              <a 
                href="#q&as" 
                className='block py-1 hover:text-gray-200'
                onClick={handleMenuItemClick}
              >
                F&Qs
              </a>
            </li>
            <li>
              <a 
                href="#Pricing" 
                className='block py-1 hover:text-gray-200'
                onClick={handleMenuItemClick}
              >
                Pricing
              </a>
            </li>
          </ul>
          <button 
            className='w-full mt-4 btn-primary'
            onClick={handleMenuItemClick}
          >
            SIGN UP IT'S FREE
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;