import { url } from 'inspector'
import React from 'react'



export default function Profile(){
    return (
        <div className="w-full min-h-screen bg-neutral-900 bg-cover">
            {/* Top Background */}
            <div className="w-full h-1/2 relative -z-0 bg-cover bg-center bg-purple-500">
                <img src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80" alt="Top Banner" />
            </div>
            
            {/* Main Profile Card */}
            <div className="w-3/4 text-center relative z-10 m-auto mt-[-90px] bg-amber-500 rounded-lg">
                <div className="py-4">
                    {/* Card Head */}
                    <div className="w-[85%] m-auto items-end flex mt-[-90px] pb-20">
                        <div className="w-1/3">
                            
                        </div>
                        <div className="w-1/3">
                            <img src="https://avatars.githubusercontent.com/u/84240367?v=4" className='w-[150px] m-auto rounded-full'/>
                        </div>
                        <div className="w-1/3 text-right">
                            <button className='bg-black text-md text-white rounded-md px-6 py-2'>Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}