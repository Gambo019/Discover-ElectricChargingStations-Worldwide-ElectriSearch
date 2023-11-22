import React, {PropsWithChildren } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import 'tailwindcss/tailwind.css';



const Layout = ({ children } : PropsWithChildren) => {
  return (
    
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap" rel="stylesheet"></link>
      </Head>
      <div className='w-full font-railway'>
        <Navbar />
        <main className='mt-[65px]'>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Layout