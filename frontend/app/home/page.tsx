'use client';

import Head from 'next/head';
import React, { useState } from 'react';

// components
import Sidebar from '../components/sidebar';


export default function Home() {

    return (
        <div>
            <Head>
                <title>Find Your Charge Station!</title>
            </Head>
            <main className='w-100 flex'>
                {/* Components will go here */}
                <Sidebar />
            </main>
        </div>
    )
}