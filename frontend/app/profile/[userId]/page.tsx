import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Profile() {
    return (
        <div className="w-full min-h-screen bg-neutral-900 bg-cover">
            {/* Top Background */}
            <div className="w-full h-1/2 relative bg-cover bg-center">
                <img
                    src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"
                    alt="Top Banner"
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Main Profile Card */}
            <div className="w-full sm:w-2/3 text-center relative z-10 m-auto mt-[-90px] bg-amber-500 rounded-lg">
                <div className="py-8 px-4 sm:px-8">
                    {/* Card Head */}
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mt-[-130px] pb-5">
                        <div className="w-24 sm:w-1/3"></div>
                        <div className="w-48 sm:w-1/3">
                            <img
                                src="https://avatars.githubusercontent.com/u/84240367?v=4"
                                className="w-[190px] m-auto rounded-full"
                                alt="Profile"
                            />
                        </div>
                        <div className="w-full sm:w-1/3 text-center sm:text-right mt-4 sm:mt-0">
                            <button className="bg-black text-md text-white rounded-md px-6 py-2">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                    
                    {/* User Info */}
                    <div className="w-full text-center">
                        <h1 className="text-black text-2xl font-semibold">Mathias Mendoza</h1>
                        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-2">
                            <div className="flex items-center">
                                <IoLocationSharp className="text-gray-800" />
                                <p className="ml-2 text-gray-800">Vancouver, Canada</p>
                            </div>
                            <div className="flex items-center">
                                <MdEmail className="text-gray-800" />
                                <p className="ml-2 text-gray-800">mathias@example.com</p>
                            </div>
                            <div className="flex items-center">
                                <MdPhone className="text-gray-800" />
                                <p className="ml-2 text-gray-800">+1 234 567 890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
