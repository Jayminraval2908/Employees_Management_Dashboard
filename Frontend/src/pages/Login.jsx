import { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from  'axios'


const Login = () => {

    const{
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

   const onSubmit=async(data)=>{
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login',data)
        console.log(response.data);
        alert("Login Successful");

        
    } catch (error) {
        console.log(error.response.data);
        alert(error.response.data.message);
    }
   }

    const [showPassword, setShowPassword] = useState(false);


  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl'>
            <h2 className='font-bold text-3xl text-center mb-8 text-blue-800'>Login</h2>

            <div className='mb-5'>
                <label className='block mb-2 font-semibold text-gray-800'>
                    Email
                </label>
                <input 
                type="email"
                placeholder='enter your email'
                className='w-full rounded-lg border border-gray-600 p-3 outline-none focus:ring-2 focus:ring-blue-400'
                {...register("email",{
                    required:"email is required",
                    pattern:{
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message:"Email is not valid"
                    }
                })} />

                {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
                )}

            </div> 

            <div className='mb-5'>

                <label className='block mb-2 font-semibold text-gray-800'>
                    Password
                </label>
                <div className='relative'>
                <input 
                type={showPassword ? "text" : "password"}
                placeholder='enter your password'
                className='w-full border border-gray-600 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400'
                {...register("password",{
                    required:"password is required",
                    minLength:{
                        value:6,
                        message:"Minimum 6 characters"
                    }
                })} />

                <button type='button' onClick={()=>setShowPassword(!showPassword)} className='right-4 top-3 absolute'>
                    {
                        showPassword ? "🙈":"👁️"
                    }
                </button>

                {errors.password && (
                    <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>
                )}
                </div>

            </div> 

              <button
                    type='submit'
                    className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300'
                >
                    Login
                </button>

        </form>
    </div>
  )
}

export default Login