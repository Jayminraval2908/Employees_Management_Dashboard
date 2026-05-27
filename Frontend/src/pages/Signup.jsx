import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Signup = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

 const onSubmit = async(data)=>{
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', data)
    console.log(response.data)
    alert("SignUp successful")
    
  } catch (error) {
    console.log(error.response.data);
    alert(error.response.data.message);
  }
 }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch('password');

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100 px-4'>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl'>
        <h2 className='font-bold text-center text-3xl mb-8 text-blue-800'>Sign up</h2>

        <div className='mb-5'>
          <label className='block font-semibold mb-2 text-gray-800'> Name </label>
          <input
            type="text"
            placeholder='enter your name'
            className='w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none border-gray-500'
            {...register("name", {
              required: "name is required"
            })} />

          {errors.name && (
            <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
          )}
        </div>

        <div className='mb-5'>
          <label className='block font-semibold mb-2 text-gray-800'>Email</label>
          <input
            type="email"
            placeholder='enter your email'
            className='w-full border border-gray-500 focus:ring-2 focus:ring-blue-400 outline-none p-3 rounded-lg'
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "email is not valid"
              }
            })} />

          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
          )}
        </div>

        <div className='mb-5'>
          <label className='font-semibold text-gray-800 mb-2 block'>Password</label>

          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='enter your password'
              className='w-full border border-gray-500 outline-none focus:ring-2 focus:ring-blue-400 p-3 rounded-lg'
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "minimum 6 characters"
                }
              })} />

            <button type='button' onClick={()=>setShowPassword(!showPassword)} className='absolute right-4 top-3'>
              {
                showPassword ? "🙈" : "👁️"
              }
            </button>

            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className='mb-5'>
          <label className='font-semibold text-gray-800 mb-2 block'>Confirm Password</label>
          <div className='relative'>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder='confirm your password'
              className='w-full border border-gray-800 focus:ring-2 focus:ring-blue-400 rounded-lg p-3 outline-none'
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) => value === password || "password is not matched"
              })} />

            <button type='button' onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='absolute right-4 top-3'>
              {
                showPassword ? "🙈" : "👁️"
              }
            </button>

            {errors.confirmPassword && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <button type="submit" className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup