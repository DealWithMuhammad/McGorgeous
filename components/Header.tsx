import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBagIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";
import {CiMail, CiInstagram} from "react-icons/ci"
import { useSelector } from "react-redux";
import { selectBasketItems } from "@/redux/basketSlice";
import Logo from "../assets/Logo.png"; // Update the path to your image file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };



    const Home = './'
  const about = './about';
  const projects = './projects'
  const contact = './contact'

  
  return (
    <header className="z-30 flex items-center justify-between pt-8 p-6 ">
      <div className="flex justify-center">
        {/* Hamburger menu */}
        <div className="hamburger-container" >
          <div  onClick={toggleMenu}
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[#1b152d] z-40 transition-transform ease-in-out duration-300 ${
          isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center text-white h-screen space-y-8 text-4xl font-bold tracking-wide lg:text-6xl xl:text-7xl">
         <Link href={Home}>          
          <p className="headerLink" onClick={toggleMenu}>
            HOME
            </p>
            </Link>
          <Link href={about}>
          <p className="headerLink" onClick={toggleMenu}>
            ABOUT
            </p>
          </Link>
          <Link href={projects}>
          <p className="headerLink" onClick={toggleMenu}>
            PROJECTS
            </p>
            </Link>
         <Link href={contact}>
                  <p className="headerLink" onClick={toggleMenu}>
            CONTACT
                      </p>
                      </Link>
          {/* Add more menu items as needed */}
          <XIcon
            className="h-10 w-10 cursor-pointer absolute text-white  transition-transform ease-in-out duration-300 top-4 left-4"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <div className="">
                <Link href="/">
          <div className="h-10">
            <Image
              alt="logo"
              src={Logo}
              width={200}
              height={100}
            />
          </div>
        </Link>
      </div>
 
        

        
    <div className="text-3xl text-white icon m-[10px]">
      <a
        href="https://www.instagram.com/mariawaseem_arts/"
        target="_blank"
      >
        <CiInstagram/>
      </a>
        </div>
        
    </header>
  );
}

export default Header;
