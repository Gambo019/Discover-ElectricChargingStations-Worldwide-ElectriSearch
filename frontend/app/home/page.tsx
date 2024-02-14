'use client';

import Head from 'next/head';
import React, { useState } from 'react';

// components
import Sidebar from '../components/sidebar';


export default function Home() {
    const [selectedLocation,  setSelectedLocation] = useState<string | null>(null);

    return (
        <div>
            <Head>
                <title>Find Your Charge Station!</title>
            </Head>
            <main className='w-100 flex'>
                {/* Components will go here */}
                <Sidebar selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
            </main>
        </div>
    )
}