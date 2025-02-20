import React, { useState } from "react";
import pic from "/images/photo.jpg?url";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2 items-center">
            <img 
              src={pic} 
              className="h-10 w-10 rounded-full border-2 border-white/30" 
              alt="Profile" 
            />
            <h1 className="font-semibold cursor-pointer">
              <span className="text-gray-800 text-xl md:text-2xl hover:text-blue-600 transition-colors duration-300">Shyam</span>
              <p className="text-gray-600 text-sm md:text-lg hover:text-blue-600 transition-colors duration-300">Full-Stack Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-600 rounded-lg transition-all duration-300 cursor-pointer font-medium border border-transparent hover:border-gray-800 shadow-md hover:shadow-lg"

                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div 
              onClick={() => setMenu(!menu)} 
              className="md:hidden text-gray-800 cursor-pointer hover:text-blue-600"
            >
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden">
            <div className="bg-white/10 backdrop-blur-lg">

            <ul className="flex flex-col h-screen items-center justify-center space-y-3 text-xl relative z-10">

              {navItems.map(({ id, text }) => (
                <li
                  className="px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-600 rounded-lg transition-all duration-300 font-medium cursor-pointer border border-transparent hover:border-gray-800 shadow-md hover:shadow-lg"

                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          </div>

        )}
      </div>
    </>
  );
}

export default Navbar;
