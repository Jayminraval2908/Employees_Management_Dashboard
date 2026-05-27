import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {

    return (

        <div className='flex min-h-screen bg-gray-100'>

            {/* Sidebar */}

            

            {/* Main Content */}

            <div className='flex-1 p-6'>

                {/* Hero Section */}

                <div className='bg-white rounded-2xl shadow-lg p-10 mb-8'>

                    <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                        Employee Management Dashboard
                    </h1>

                    <p className='text-gray-600 text-lg mb-6'>
                        Manage employees, view profiles, search records,
                        and practice real React dashboard concepts.
                    </p>

                    <Link
                        to="/employees"
                        className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300'
                    >
                        View Employees
                    </Link>

                </div>

                {/* Dashboard Cards */}

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

                    {/* Card 1 */}

                    <div className='bg-white rounded-2xl shadow-lg p-6'>

                        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                            Total Employees
                        </h2>

                        <p className='text-4xl font-bold text-blue-500'>
                            10
                        </p>

                    </div>

                    {/* Card 2 */}

                    <div className='bg-white rounded-2xl shadow-lg p-6'>

                        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                            Departments
                        </h2>

                        <p className='text-4xl font-bold text-green-500'>
                            5
                        </p>

                    </div>

                    {/* Card 3 */}

                    <div className='bg-white rounded-2xl shadow-lg p-6'>

                        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                            Active Projects
                        </h2>

                        <p className='text-4xl font-bold text-purple-500'>
                            3
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home