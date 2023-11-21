'use client';

import React, {PropsWithChildren } from 'react'
import Navbar from './navbar'
import Footer from './footer'

import 'tailwindcss/tailwind.css';

import { Open_Sans } from '@next/font/google'


const OpenSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans'
})


const Layout = ({ children } : PropsWithChildren) => {
  return (
    <div className={`${OpenSans.variable} font-sans`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout