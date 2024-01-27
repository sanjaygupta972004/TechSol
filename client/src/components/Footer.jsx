import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className=" bg-cyan-100 text-stone-800 py-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: info@techsol.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><Link to={"/service"}>Service</Link></li>
              <li><Link to = {"/about"}>About</Link></li>
              <li><Link to = {"/contact"}>Contact</Link></li>
            </ul>
          </div>
          <div> 
          <div className="mt-4 text-center text-gray-900">
          <p>Made by TechSol &copy; {new Date().getFullYear()}</p>
           </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
