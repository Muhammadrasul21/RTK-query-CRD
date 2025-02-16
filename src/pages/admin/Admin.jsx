import React from 'react'
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()

  return (
    <div className='flex'>

      <aside id='admin-sidebar' className='overflow-auto w-80 h-screen sticky top-0 left-0 bg-sky-950 p-6 text-white flex flex-col'>
        <p className='text-2xl font-bold'>Admin Dashboard</p>
        <ul className='my-6 flex-1 space-y-1.5'>
          {[
            { path: 'car', label: 'Car' },
            { path: 'createcars', label: 'CreateCars' },
            { path: 'groups', label: 'Groups' },
            { path: 'users', label: 'Users' },
            { path: 'shop', label: 'Shop' },
            { path: 'analytic', label: 'Analytic' },
            { path: 'likes', label: 'Likes' },
            { path: 'reports', label: 'Reports' },
            { path: 'settings', label: 'Settings' },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `py-2 px-3 mb-1.5 rounded block transition-all duration-200 ${
                    isActive ? 'bg-blue-600' : 'hover:bg-blue-700'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate('/')}
          className='bg-red-500 py-2 rounded hover:bg-red-600 transition-all'
        >
          Log Out
        </button>
      </aside>

      <div className='flex-1 min-h-screen'>
        <nav className='bg-gray-800'>
          <div className='mx-auto h-20 flex items-center justify-between px-8'>
            <Link to={'/'} className='text-2xl font-medium text-white'>
              Logoo
            </Link>

            <div className='flex gap-8'>
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' },
                { path: '/admin', label: 'Admin' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className='text-white hover:text-gray-300 transition-all duration-200'
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className='p-6'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin
