"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md shadow-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/logo/logo.png" 
            alt="DNK Logo" 
            width={150} 
            height={50} 
            className="w-24 md:w-32 h-auto"
          />
        </Link>

        <ul className="hidden md:flex gap-8 text-white font-medium text-lg">
          {["Home", "About Us", "Area of Expertise", "Contact"].map((item, index) => (
            <li key={index} className="text-center">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="cursor-pointer hover:text-[#AB7C35] transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

  
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg text-center md:hidden shadow-lg transition-transform duration-300">
          <ul className="text-white space-y-4 text-lg font-medium p-5">
            {["Home", "About Us", "Area of Expertise", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="cursor-pointer hover:text-[#AB7C35] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
