import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto h-20 flex items-center justify-between px-4'>
        <Link to={"/"} className='text-2xl font-medium text-white'>
          Logoo
        </Link>

        <div className='flex gap-8'>
          <Link to={"/"} className='text-white hover:text-gray-300'>
            Home
          </Link>
          <Link to={"/about"} className='text-white hover:text-gray-300'>
            About
          </Link>
          <Link to={"/contact"} className='text-white hover:text-gray-300'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header