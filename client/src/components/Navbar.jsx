import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from "../images/image.js"
import { useAuth } from '../store/Auth';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className="bg-red-600 p-1 mt-0.5 static">
          <div className='flex flex-wrap items-center justify-between '>
            <div className='flex-shrink-0 rounded-lg '>
              <img src={logo} alt="logo" className="w-10 h-12" />
            </div>
            <nav className="flex flex-wrap w-10 mr-12 md:mr-5 md:w-auto ">
              <ul className="flex flex-wrap  space-x-5 font-medium text-lg">
                <li><NavLink to="/" className="text-white ml-4 hover:text-gray-900 hover:underline">Home</NavLink></li>
                <li><NavLink to="/about" className="text-white hover:text-gray-900 hover:underline">About</NavLink></li>
                <li><NavLink to="/service" className="text-white hover:text-gray-900 hover:underline">Service</NavLink></li>
                <li><NavLink to="/contact" className="text-white hover:text-gray-900 hover:underline">Contact</NavLink></li>
                {isLoggedIn ?
                 (<NavLink to="/logout" className="text-white hover:text-gray-900 hover:underline">Logout</NavLink>)
                 :
                (
                <>
                <li><NavLink to="/register" className="text-white hover:text-gray-900 hover:underline">Register</NavLink></li>
                <li><NavLink to="/login" className="text-white hover:text-gray-900 hover:underline">Login</NavLink></li>
                 </>
                 )
                 }
              </ul>
            </nav>
          </div>
      </header>
    </>
  );
}

export default Navbar;
