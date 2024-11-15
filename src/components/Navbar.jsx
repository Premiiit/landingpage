import { useState } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../assets/images/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container mx-auto p-0 bg-black'>
  {/* Flex Container */}
  <div className='flex items-center justify-between'>
    {/* Left Side: Empty Div for Spacing */}
    <div className='flex-1'></div>

    {/* Logo - Centered */}
    <div className='flex-1 flex justify-center'>
      <img 
        src={companyLogo} 
        alt='' 
        className="h-[120px] w-auto object-cover object-center"
      />
    </div>

    {/* Right Side: Get Started Button */}
    <div className='flex-1 flex justify-end'>
      <a
        href='http://localhost:5173/login' target='_blank' rel='noopener noreferrer'
        className='hidden p-4 px-6 pt-3 text-md text-white bg-customHsl rounded-full baseline hover:bg-custom-hsl-light md:block'
      >
        Get Started
      </a>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
