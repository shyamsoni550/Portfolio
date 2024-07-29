import React, { useState } from 'react';
import pic from "../public/images/photo.avif"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const navItems = [
        {
            id: 1,
            text: "Home",
            href: "#home"
        },
        {
            id: 2,
            text: "About",
            href: "#about"
        },
        {
            id: 3,
            text: "Portfolio",
            href: "#portfolio"
        },
        {
            id: 4,
            text: "Experience",
            href: "#experience"
        },
        {
            id: 5,
            text: "Skills",
            href: "#skills"
        },
        {
            id: 6,
            text: "Contact Us",
            href: "#contact"
        }
    ];

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-2">
                        <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                        <h1 className="font-semibold text-xl cursor-pointer">
                            Shya<span className="text-green-500 text-2xl">m</span>
                            <p className="text-xl">Full-Stack Developer</p>
                        </h1>
                    </div>
                    {/* Desktop Navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {navItems.map(({ id, text, href }) => (
                                <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                                    <a href={href}>{text}</a>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                {menu && (
                    <div>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4'>
                            {navItems.map(({ id, text, href }) => (
                                <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                                    <a href={href}>{text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <hr />
            <hr />
        </>
    );
}

export default Navbar;
