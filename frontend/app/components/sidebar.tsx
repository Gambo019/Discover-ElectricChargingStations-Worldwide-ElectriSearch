import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import PropTypes from 'prop-types';

// assets
import LocationExample from '../assets/locationExample.png';

interface ChargingStation {
    name: string;
    location: string;
    status: string;
    numberOfChargers: number;
}

interface SidebarProps {
    stations: ChargingStation[];
}

const Sidebar: React.FC<SidebarProps> = ({ stations = [] }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredStations = stations.filter(station =>
        station.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='w-[25%] h-screen px-4 py-7 overflow-y-auto bg-gray-900 text-white flex flex-col custom-scrollbar'>
            {/* Search Bar */}
            <div className="flex items-center bg-gray-800 p-2 rounded-md mb-6">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="bg-gray-800 text-white placeholder-gray-500 outline-none w-full p-2"
                />
                <button
                    className="ml-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-md"
                    aria-label="Search"
                >
                    <FaSearch />
                </button>
            </div>

            {/* Charging Station Details */}
            <div className="flex flex-col gap-y-6">
                {filteredStations.length > 0 ? (
                    filteredStations.map((station, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-md">
                            <h2 className="text-lg font-semibold mb-3">{station.name}</h2>
                            <Image src={LocationExample} width={300} height={200} className='w-full rounded-md mb-4' alt={`${station.name} Location`} />
                            <div className='flex flex-col gap-y-2'>
                                <div>
                                    <h3 className='text-md font-semibold'>Address</h3>
                                    <p>{station.location}</p>
                                </div>
                                <div>
                                    <h3 className='text-md font-semibold'>Status</h3>
                                    <div className='flex items-center gap-x-2'>
                                        <span className={`rounded-full w-2 h-2 ${station.status === 'Available' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                                        <p>{station.status}</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-md font-semibold'>Number of Chargers</h3>
                                    <p>{station.numberOfChargers}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No stations found</p>
                )}
            </div>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #2d3748;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #718096;
                    border-radius: 4px;
                    border: 2px solid #2d3748;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #4a5568;
                }
            `}</style>
        </div>
    );
};

Sidebar.propTypes = {
    stations: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            numberOfChargers: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Sidebar;
