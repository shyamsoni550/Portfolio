import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="py-12">
      <hr />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20  my-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4">
            <FaFacebook  size={30 }/>
            <FaGithub size={30 }/>
            <FaInstagram size={30 }/>
            <FaLinkedin size={30 }/>
          </div>
          <div className="mt-8 border-t border-gray-900 pt-8 flex flex-col items-center">
            <p className="text-sm">
              &copy; 2024 vaya shyam  .All rights reserved 
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
