import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Navbar from './navbar'; 
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-inherit">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      {/* This container is only for centering the content, without applying max-width or padding */}
      <div className="flex flex-col w-full flex-1">
        {/* Apply padding and max-width here if needed for specific sections, not for the background */}
        <main className="mt-[65px] mx-auto w-full">
          {children}
        </main>
      </div>
      
    </div>
  );
};

export default Layout;