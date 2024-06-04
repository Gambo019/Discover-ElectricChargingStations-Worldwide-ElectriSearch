'use client';

import Head from 'next/head';
import React from 'react';

// components
import Sidebar from '../components/sidebar';
import MapComponent from '../components/map';

export default function Home() {
    const dummyStations = [
        {
            name: 'Granville Station',
            location: '105 Granville St W, Toronto, ON M6A',
            status: 'Available',
            numberOfChargers: 6
        },
        {
            name: 'Main Street Station',
            location: '200 Main St E, Toronto, ON M4C',
            status: 'Unavailable',
            numberOfChargers: 4
        },
        {
            name: 'King Street Station',
            location: '350 King St W, Toronto, ON M5V',
            status: 'Available',
            numberOfChargers: 8
        },
        {
            name: 'Queen Street Station',
            location: '400 Queen St W, Toronto, ON M5V',
            status: 'Available',
            numberOfChargers: 10
        },
        {
            name: 'Bay Street Station',
            location: '250 Bay St, Toronto, ON M5H',
            status: 'Unavailable',
            numberOfChargers: 5
        }
    ];

    return (
        <div>
            <Head>
                <title>Find Your Charge Station!</title>
            </Head>
            <main className='w-full h-screen flex flex-col md:flex-row'>
                <Sidebar stations={dummyStations} />
                <div className='map-container w-full md:w-[75%] h-full'>
                    <MapComponent />
                </div>
            </main>
        </div>
    );
}
