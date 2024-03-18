import 'tailwindcss/tailwind.css';
import Navbar from './navbar'; 
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-inherit">
          <Navbar />
          <div className="flex flex-col w-full flex-1">
            <main className="mt-[65px] mx-auto w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;