import React from 'react';
import logo from './assets/logo.png';
import Image from 'next/image';
import Link from "next/link"

// icons
import { BsHouseFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";



function Navbar() {
  const navLinks = {
    Home: {
      link: '/',
      icon: <BsHouseFill />,
    },
    Login: {
      link: '/login',
      icon: <RiLoginBoxFill />,
    },
    Register: {
      link: '/register',
      icon: <FaUserPlus />,
    },
    About: {
      link: '/about',
      icon: <BsFillInfoCircleFill />,
    },
    Profile: {
      link: '/profile',
      icon: <FaUserCircle />,
    },
  };

  return (
    <nav className="w-full flex py-4 px-8 bg-black h-fit">
        <div className="w-fit flex items-center">
            <Image src={logo} width={50} height={50} alt="" />
            <h1 className="text-gray-100">ElectriSearch</h1>
        </div>
        <ul className="flex items-center ml-auto">
            {Object.entries(navLinks).map(([key, { link, icon }], index) => (
                <li key={index} className="ml-4">
                    <Link href={link} className="text-white flex items-center gap-1">
                        {icon}
                        {key}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  );
}

export default Navbar;