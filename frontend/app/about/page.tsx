'use client'

// importing libraries
import React from "react"

// importing assets
import AboutStation from '../assets/aboutStation.png'

// icons
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { FaChargingStation } from "react-icons/fa6";


function About() {
    return (
        <div className="w-full h-fit bg-amber-500 font-sans">
            {/* Hero Section */}
            <div className="w-full min-h-screen px-20 flex items-center">
                <div className="w-[40%] text-left mb-20">
                    <p className="text-black text-md italic mb-2">''The best Electric Search Network</p>
                    <h1 className="text-6xl italic text-black">Find your nearest Electric Charge Station</h1>
                    <button type="button" className="text-white bg-indigo-700 hover:bg-indigo-800 flex items-center gap-1 focus:ring-4 focus:outline-none hover:scale-105 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-4 h-10 text-center"><FaChargingStation /> Find Station</button>
                </div>
                <div className="w-[60%]">
                    <img
                        className="w-full ml-auto align-middle mt-10"
                        src={AboutStation.src}
                    />
                </div>
            </div>
            {/* Sub title */}
            <p className="w-[50%] text-center m-auto py-2 text-xl text-black font-semibold italic">Explore the seamless fusion of convenience and sustainability at the best Electric Stations Search Network. Your journey to eco-friendly electric vehicle charging starts here. Drive smart, drive green!</p>

        </div>
    )
}

export default About;