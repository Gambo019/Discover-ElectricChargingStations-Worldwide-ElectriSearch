import { url } from 'inspector'
import React from 'react'



export default function Profile(){
    return (
        <div className="w-full min-h-screen inline">
            {/* Top Background */}
            <div className="w-full h-1/2 bg-cover bg-center bg-purple-500">
                <img src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80" alt="Top Banner" />
            </div>
            
            {/* Main Profile Card */}
            <div className="w-3/4 text-center m-auto bg-slate-500">
                <h1>Hi</h1>
            </div>
            
            {/* Bottom Background */}
            <div className="w-full h-1/2 bg-cover bg-slate-400"></div>
        </div>
    )
}