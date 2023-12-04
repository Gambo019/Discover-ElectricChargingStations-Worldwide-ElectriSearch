'use client'

// importing libraries
import React from "react"

// importing assets
import AboutStation from '../assets/aboutStation.png'
import ElectriPlanet from '../assets/ElectiPlanet.png'
import Global from '../assets/global.png'

// icons
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { FaChargingStation } from "react-icons/fa6";


function About() {
    return (
        <div className="w-full h-fit bg-amber-500 font-sans">
            {/* Hero Section */}
            <div className="w-full px-20 flex items-center">
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
            <div className="bg-neutral-900 py-6">
                <p className="w-[50%] text-center m-auto py-2 text-xl text-gray-100 font-semibol italic">Explore the seamless fusion of convenience and sustainability at the best Electric Stations Search Network. Your journey to eco-friendly electric vehicle charging starts here. Drive smart, drive green!</p>
            </div>
            {/* Solutions */}
            <div className="w-full flex items-center text-center m-auto py-10">
                <div className="w-[50%] text-lg font-semibold italic text-gray-800">
                    <img
                        src={Global.src}
                        className="w-60 m-auto"
                    />
                    <h3>Search for Electric Charge Stations</h3>
                </div>
                <div className="w-[50%] text-lg font-semibold italic text-gray-800">
                    <img
                        src={ElectriPlanet.src}
                        className="w-60 m-auto"
                    />
                    <h3>Making the World more green!</h3>
                </div>
            </div>
        </div>
    )
}

export default About;