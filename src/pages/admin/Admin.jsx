import React from 'react'
import { NavLink,Link, Outlet, useNavigate } from 'react-router-dom'

const Admin = () => {
   const navigate = useNavigate()
   
  return (
    <div className='flex'>
        <aside id='admin-sidebar' className='overflow-auto w-80 h-screen sticky top-0 left-0 bg-sky-950 p-6 text-white flex flex-col'>
            <p className='text-2xl font-bold'>Admin Dashboard</p>
            <ul className='my-6 flex-1'>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={ "car"}>Car</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={ "createcars"}>CreateCars</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={ "groups"}>Groups</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"users"}>Users</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"shop"}>Shop</NavLink>
                </li>
            </ul>
            <button onClick={()=> navigate("/")} className='bg-red-500 py-2 rounded'>Log Out</button>
        </aside>
        <div className='flex-1 min-h-screen '>
        <nav className='bg-gray-800'>
      <div className=' mx-auto h-20 flex items-center justify-between px-8'>
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
          <Link to={"/admin"} className='text-white hover:text-gray-300'>
            Admin
          </Link>
        </div>
      </div>
    </nav>            <div className='p-6'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Admin