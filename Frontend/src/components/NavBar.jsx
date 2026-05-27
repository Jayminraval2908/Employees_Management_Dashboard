import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-gray-900 text-white shadow-lg'>
        <div className='flex justify-between items-center px-6 py-4 mx-auto max-w-7xl'>
            <h1 className='text-2xl font-bold text-blue-400 tracking-wide'>Employees Management Dashboard</h1>
        <ul className='flex gap-8 text-lg font-medium'>
            <li>
                <Link to='/home' className='hover:text-blue-400 transition duration-100'>Home</Link>
            </li>
            <li>
                <Link to="/employees" className='hover:text-blue-400 transition duration-100'>Employees</Link>
            </li>
             <li>
                <Link to="/login" className='hover:text-blue-400 transition duration-100'>Login</Link>
            </li>
            <li>
                <Link to="/signup" className='bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-100'>Signup</Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default NavBar