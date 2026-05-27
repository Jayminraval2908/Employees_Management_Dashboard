import React from 'react'

const EmployeeCard = ({ user }) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>{user.name}</h2>
        <p className='text-gray-600 mb-1'>
            <span className='font-semibold'>Username :</span>{user.username}
        </p>
        <p className='text-gray-600 mb-1'>
            <span className='font-semibold'>Email :</span>{user.email}
        </p>
        <p className='text-gray-600 mb-1'>
            <span className='font-semibold'>City :</span>{user.address.city}
        </p>
        <p className='text-gray-600 mb-1'>
            <span className='font-semibold'>Company :</span>{user.company.name    }
        </p>
    </div>
  )
}

export default EmployeeCard