import React from 'react'

// assets
import CarStation from '../assets/CarStation.png'

// icons
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Login () {
  return (
    <div className='w-full h-screen bg-amber-500'>
      <div className='flex text-center items-center px-20 py-12'>
        <img
          className='w-[50%] align-middle'
          src={CarStation.src}
        />
        {/* Login Form */}
        <div className='w-[40%] h-[500px] m-auto bg-neutral-900 p-6 rounded-lg block'>
          <h1 className='text-left text-2xl font-bold text-gray-100'>Login to your Account</h1>
          <div className='px-1'>
            <div className='w-full flex justify-between mt-5'>
              <a
                href='#'
                className='w-[48%] h-10 flex items-center justify-evenly px-2 text-gray-300 border-gray-200 hover:bg-neutral-800 hover:text-white hover:scale-105 border-x border-y rounded-xl'
              >
                <FcGoogle />
                <p className='text-sm font-bold font-opensans mb-0'>Log in with Google</p>
              </a>
              <a
                href='#'
                className='w-[48%] h-10 flex items-center justify-evenly px-2 text-gray-300 border-gray-200 hover:bg-neutral-800 hover:text-white hover:scale-105 border-x border-y rounded-xl'
              >
                <FaApple />
                <p className='text-sm font-bold font-opensans mb-0'>Log in with Apple</p>
              </a>
            </div>
            <div className='w-full flex items-center my-5'>
              <div className='w-[45%] h-[1px] bg-gray-300'></div>
              <p className='px-4 text-sm text-gray-200'>or</p>
              <div className='w-[45%] h-[1px] bg-gray-300'></div>
            </div>
            <h4 className='mt-2 text-left text-gray-100'>Email</h4>
            <input
              type="email"
              className='w-[99%] h-10 m-auto px-3 my-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-indigo-700 focus:border-2'
              placeholder='Enter you email'
            />
            <h4 className='mt-2 text-left text-gray-100'>Password</h4>
            <input
              type="password"
              className='w-[99%] h-10 m-auto px-3 my-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-indigo-700 focus:border-2'
              placeholder='··········'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;