import React, { useState } from 'react';
import { FaSearchengin } from "react-icons/fa6";
import Image from 'next/image';


// assets
import LocationExample from '../assets/locationExample.png'

interface ChargingStation {
    name: string;
    location: string;
    status: string;
    numberOfChargers: number;
}

interface SidebarProps{
}

export default function Sidebar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='w-[25%] min-h-screen px-3 pt-7 bg-gray-900 text-white flex flex-col'>
            <div className="flex items-center bg-gray-800 p-2 rounded-md">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="bg-gray-800 text-white placeholder-gray-500 outline-none w-full"
                />
                <button
                    className="ml-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-md"
                >
                    <FaSearchengin />
                </button>
            </div>
            {/* {selectedStation ? (
                
            ) : (
                <p>No station selected</p>
            )} */}
            <div className="flex flex-col gap-y-1 px-1 mt-6">
                <h2 className="text-lg font-semibold">Graville Station</h2>
                <Image src={LocationExample} width={300} className='w-full rounded-md mt-3' alt='LocationPhoto'/>
                <div className='flex flex-col mt-4 gap-y-1'>
                    <h2 className='text-lg font-semibold'>Address</h2>
                    <p>105 Granville St W, Toronto, ON M6A</p>
                    <h2 className='text-lg font-semibold mt-1'>Status</h2>
                    <div className='flex items-center gap-x-1.5'>
                        <span className=' rounded-[100%] bg-green-600 w-1 h-1'></span>
                        <p>Available</p>
                    </div>
                    <h2 className='text-lg font-semibold mt-1'>Number of Chargers</h2>
                    <p>6</p>
                </div>
            </div>
        </div>
    );
}