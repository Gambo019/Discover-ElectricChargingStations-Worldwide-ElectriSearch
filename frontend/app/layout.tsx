

import React, {PropsWithChildren } from 'react'
import Navbar from './navbar'
import Footer from './footer'

import 'tailwindcss/tailwind.css';



const Layout = ({ children } : PropsWithChildren) => {
  return (
    <div className='w-full font-sans'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout