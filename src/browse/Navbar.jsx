import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // For search icon

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className=" text-gray-400 px-6 py-3  flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2 ">
                <img src="src\home\image\logo.png" alt="logo" className="w-45 ml-8 " /> {/* Replace with actual logo */}

            </div>

            {/* Search Box */}
            <div className="hidden lg:flex items-center bg-[#2a2b2c] px-4 py-2 rounded-full mx-8 -">
                <FiSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Type Something"
                    className="bg-transparent text-sm placeholder-gray-500 focus:outline-none"
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 mr-8">
                <a href="#" className="text-pink-400">Home</a>
                <a href="#" className="hover:text-pink-400">Browse</a>
                <a href="#" className="hover:text-pink-400">Details</a>
                <a href="#" className="hover:text-pink-400">Streams</a>
                <div className="flex items-center bg-[#2a2b2c] px-4 py-2 rounded-full hover:bg-pink-400 hover:text-white ">
                    <a href="#" className="mr-2 ">Profile</a>
                    <img
                        src="src\home\image\profile.jpg"
                        alt="profile"
                        className="w-6 h-6 rounded-full"
                    />
                </div>
            </div>

            {/* Hamburger for mobile */}
            <div className="md:hidden ">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                    <span className="block w-6 h-0.5 bg-gray-400 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-400 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-400"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#1A1B1C] px-6 py-4 shadow-md md:hidden z-10">
                    <a href="#" className="block py-2 text-pink-400">Home</a>
                    <a href="#" className="block py-2 hover:text-pink-400">Browse</a>
                    <a href="#" className="block py-2 hover:text-pink-400">Details</a>
                    <a href="#" className="block py-2 hover:text-pink-400">Streams</a>
                    <a href="#" className="block py-2 hover:text-pink-400">Profile</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
