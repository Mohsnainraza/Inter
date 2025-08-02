'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'

 function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center text-black py-6 px-8 md:px-20 bg-white drop-shadow-md">
      <div className="text-2xl font-bold"><img src='/logo.png' alt='company logo'/></div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li className='hover:text-blue-600'><Link href="/">Home</Link></li>
        <li className='hover:text-blue-600'><Link href="/upcomingevent">Events</Link></li>
        <li className='hover:text-blue-600'><Link href="/blogs">Resources</Link></li>
        <li className='hover:text-blue-600'><Link href="/aboutus">About Us</Link></li>
        <li className='hover:text-blue-600'><Link href="/contactus">Contact Us</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="transition-transform duration-300"
        >
          {menuOpen ? (
            <FiX size={28} className="transform rotate-90 transition duration-300" />
          ) : (
            <FiMenu size={28} className="transition duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-15 right-1  w-70 bg-white rounded-lg shadow-lg px-6 py-4 transform transition-all duration-300 ease-in-out md:hidden
          ${menuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}
        `}
      >
        <ul>
          <li className='py-3 hover:text-blue-600'><Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li className='py-3 hover:text-blue-600'><Link href="/upcomingevent" onClick={() => setMenuOpen(false)}>Events</Link></li>
          <li className='py-3 hover:text-blue-600'><Link href="/blogs" onClick={() => setMenuOpen(false)}>Resources</Link></li>
          <li className='py-3 hover:text-blue-600'><Link href="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li className='py-3 hover:text-blue-600'><Link href="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar