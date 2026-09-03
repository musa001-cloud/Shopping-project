import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'



function Register(data) {
  const navigate = useNavigate()
  const [message, setMessage] = useState()
  const form = {
    // name:data.name,
    password: data.password,
    email:data.email
  }
  const {register, handleSubmit,watch, formState:{ errors }} = useForm()

 const onSubmit=(form)=>{
  console.log(form)
axios.post('https://shop-backend-1-lrvx.onrender.com/api/auth/signup',form).then(res=>{
  console.log(res.data)
  setMessage('Account created successfully')
  navigate("/auth/login")
}).catch(err=>{
console.log(err)
setMessage('sign-up failed, sorry please try again')
})


  }


  const password = watch('password')
 
  return (
    <div className='overflow-y-scroll object-cover h-[480px]'>
       <div className='text-center'>
        <h1 className='text-[26px] font-semibold'>Welcome To VELNOX</h1>
        {message && <p className='text-[12px] text-gray-500'>{message}</p>}
      </div><br />
      <form onSubmit={handleSubmit(onSubmit)} className='px-8'>
        {/* username */}
        <div>
        <label htmlFor="Username" className='text-[17px] font-semibold'>Username</label> <br />
        <input id='username' {...register("name", {required:"username is required"})} type="text" className=' p-2 w-full outline-green-500 
        border-2 border-gray-300 rounded-md'/>
        {errors.name && <p className="text-red-500 text-[10px]">{errors.name.message}</p>}
        </div>
        {/* email */}
        <div>
        <label htmlFor="email" className='text-[17px] font-semibold'>Email</label> <br />
        <input id='email' {...register("email", { required: "Email is required", pattern: { value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })}
         type="text" className=" p-2 w-full outline-green-500 
        border-2 border-gray-300 rounded-md"/>
         {errors?.email && <p className="text-red-500 text-[10px]">{errors.email.message}</p>}
        </div>

          {/* password */}
        <div className='mt-[5px]'>
        <label htmlFor="password" className='text-[17px] font-semibold'>Password</label> <br />
        <input id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })} type="password" className=' p-2 w-full outline-green-500 
        border-2 border-gray-300 rounded-md'/>
          {errors.password && (
            <p className="text-red-500 text-[10px]">
              {errors.password.message}
            </p>)}
        </div>

        {/* comfirm password */}
        <div className='mt-[5px]'>
        <label htmlFor="comfirm-password" className='text-[17px] font-semibold'>Confirm Password</label> <br />
        <input  id="comfirm-Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })} type="password" className=' p-2 w-full outline-green-500 
        border-2 border-gray-300 rounded-md'/>
          {errors.confirmPassword && (
            <p className="text-red-500 text-[10px]">
              {errors.confirmPassword.message}
            </p>)}
        </div>
         <br />
        <button type='submit'
         className='px-8 flex py-2 rounded-md
         ml-8 justify-center bg-green-500 w-[85%] text-white items-center'>
          Sign-up
        </button>
      </form>
      
        <div className='p-2 text-center'>
        <p>Don't have an account? <a
        onClick={()=>navigate("/auth/login")}
         className='text-[14px]
       text-blue-500 hover:underline cursor-pointer'>Login</a></p>
       <br />
        <p onClick={()=> navigate("/home")}
      className=' text-center px-8 text-[18px]
       text-blue-500 hover:underline cursor-pointer'>Back to Home</p>
        </div>
    </div>
  )
}

export default Register