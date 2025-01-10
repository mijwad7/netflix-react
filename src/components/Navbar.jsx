import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center w-full justify-between p-4 z-[100] absolute'>
        <h1 className='text-red-600 text-4xl cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-4 py-1 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar