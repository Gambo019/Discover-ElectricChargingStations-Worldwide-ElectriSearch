'use client'

import React, {useState} from 'react'

// assets
import CarStation from '../assets/CarStation.png'

// icons
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Register() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')

  const createUser = async () => {
    if(password === repeatPassword) {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password, repeatPassword})
      })
      if(response){
        // if response if ok send user to login page
        

        
        

      } else{
        // Will add  error handling later on and also backend response
        alert('Something Wrong happend! Try again later')
      }

    } else{
      alert('Passwords do not match!')
    }
    
  }

  return (
    <div className='w-full min-h-screen bg-green-900 pt-7'>
      <div className='block lg:flex text-center items-center px-10 md:px-20 pt-7 pb-16'>
        {/* Login Form */}
        <div className='w-[100%] md:w-[70%] lg:w-[40%] h-fit m-auto bg-neutral-900 p-6 rounded-lg block'>
          <h1 className='text-left text-2xl font-bold text-gray-100'>Create your Account</h1>
          <div className='px-1'>
            <div className='w-full block lg:flex justify-between mt-5'>
              <a
                href='#'
                className='w-full lg:w-[48%] mb-5 md h-10 flex items-center gap-1 justify-center px-2 text-gray-300 border-gray-200 hover:bg-neutral-800 hover:text-white hover:scale-105 border-x border-y rounded-xl'
              >
                <FcGoogle />
                <p className='xl:text-sm text-xs font-bold font-opensans mb-0'>Sign Up with Google</p>
              </a>
              <a
                href='#'
                className='w-full lg:w-[48%] h-10 flex items-center gap-1 justify-center px-2 text-gray-300 border-gray-200 hover:bg-neutral-800 hover:text-white hover:scale-105 border-x border-y rounded-xl'
              >
                <FaApple />
                <p className='xl:text-sm text-xs font-bold font-opensans mb-0'>Sign up with Apple</p>
              </a>
            </div>
            <div className='w-full flex items-center my-4'>
              <div className='w-[45%] h-[1px] bg-gray-300'></div>
              <p className='px-4 text-sm text-gray-200'>or</p>
              <div className='w-[45%] h-[1px] bg-gray-300'></div>
            </div>
            <h4 className='mt-2 text-left text-gray-100 mt-0'>Setup Email</h4>
            <input
              type="email"
              id='email'
              className='w-[99%] h-10 m-auto px-3 my-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-indigo-700 focus:border-2'
              placeholder='Enter you email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <h4 className='mt-2 text-left text-gray-100'>Create Password</h4>
            <input
              type="password"
              id='password'
              className='w-[99%] h-10 m-auto px-3 my-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-indigo-700 focus:border-2'
              placeholder='Set up new Password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              id='repeat_password'
              className='w-[99%] h-10 m-auto px-3 my-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-indigo-700 focus:border-2'
              placeholder='Confirm Password'
              onChange={e => setRepeatPassword(e.target.value)}
              value={repeatPassword}
            />
            <div className='w-full flex items-center mt-3 justify-between'>
              <div className='flex gap-2 items-center text-left'>
                <input type="checkbox" className='w-[20px] h-[20px] hover:border-2 bg-gray-700 border-[1px] border-gray-400 rounded-md checked:border-2 hover:border-amber-500 checked:bg-amber-500 checked:border-amber-500 appearance-none' />
                <p className='text-gray-100 text-sm'>Show Password</p>
              </div>
            </div>
            <button
              onClick={e => {
                e.preventDefault()
                createUser()
              }}
              className='w-full h-10 mt-5 bg-indigo-700 hover:bg-indigo-600 text-sm text-gray-100 rounded-lg'>
              Create New Account
            </button>
            <div className='flex gap-2 text-left text-xs mt-5'>
              <p className='text-gray-400'>Already have an account yet?</p>
              <a className='text-white hover:text-green-500' href="#">Log in Here</a>
            </div>
          </div>
        </div>
        <img
          className='w-full lg:w-[50%] align-middle mt-10'
          src={CarStation.src}
        />
      </div>
    </div>
  )
}

export default Register