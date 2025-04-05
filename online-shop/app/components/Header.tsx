'use client';

import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" w-full border-b">
      <div className="bg-black text-white text-sm text-center py-2">
        Summer Sale - OFF 50%! <Link href="#" className="underline">Shop Now</Link>
      </div>

      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold">Exclusive</h1>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="#">Home</Link>
          <Link href="#">Contact</Link>
          <Link href="#">About</Link>
          <Link href="#">Sign Up</Link>
        </nav>

        <div className="flex items-center space-x-4">
            <FiSearch className="text-xl cursor-pointer" />
            <FiHeart className="text-xl cursor-pointer" />
            <FiShoppingCart className="text-xl cursor-pointer relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">2</span>
            </FiShoppingCart>



            
            <div className="relative z-50">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center 
                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FiUser className="text-xl cursor-pointer" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Manage my account
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                My Order
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                My Cancellations
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                My Cancellations
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>

                


            



        </div>
      </div>
    </header>
  );
};

export default Header;
