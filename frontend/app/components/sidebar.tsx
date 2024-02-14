import React from 'react';

interface SidebarProps{
    selectedLocation: string | null,
    setSelectedLocation: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Sidebar( {selectedLocation} : SidebarProps ){
    return (
        <aside className='w-80 p-4 bg-amber-500'>
            <h1>SideBar</h1>
        </aside>
    )
}