import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios'






function Login() {





  const navigate = useNavigate()
  const {register, handleSubmit, formState:{ errors }} = useForm()

  const onSubmit=(data)=>{
  console.log(data)
axios.post('https://shop-backend-1-lrvx.onrender.com/api/auth/login',
  {
    password: data.password,
    email:data.email
  }
).then(res=>{

  console.log(res.data)
  const isloggedin= localStorage.setItem('isloggedin', true)
  navigate("/home")

}).catch(err=>{
console.log(err)
})

  }

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-[26px] font-semibold'>Welcome Back</h1>
        <p className='text-[12px] text-gray-500'>Welcome Back To VELNOX!
           We are Happy to Meet You Back Again.</p>
      </div><br /><br />
      <form onSubmit={handleSubmit(onSubmit)} className='px-8'>
        
        <label htmlFor="email" className='text-[20px] '>Email</label> <br />
        <input  id='email' {...register("email", { required: "Email is required", pattern: 
        { value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })}
         type="text" className=' p-2 w-full outline-blue-500 
        border-2 border-gray-300 rounded-md'/>
        {errors.email && <p className="text-red-500 text-[10px]">{errors.email.message}</p>}
        <br /><br />
        <label htmlFor="password" className='text-[20px] '>Password</label> <br />
        <input id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
        type="password" className=' p-2 w-full outline-blue-500 
        border-2 border-gray-300 rounded-md'/>
        {errors.password && <p className="text-red-500 text-[10px]">{errors.password.message}</p>}
          <a onClick={()=> navigate("/auth/forgot-password")}
      className='ml-[190px] px-8 text-[14px] w-full
       text-blue-500 hover:underline cursor-pointer'>ForgotPassword?</a>
       <br /><br />
        <button type='submit' className='px-8 flex py-2 rounded-md
         ml-8 justify-center bg-blue-500 w-[85%] text-white items-center'>
          Login
        </button>
      </form>
      
        <div className='p-2 text-center'>
        <p>Don't have an account? <a 
        onClick={()=> navigate("/auth/register")}
        className='text-[14px]
       text-blue-500 hover:underline cursor-pointer'>Sign-up</a></p>
        </div>
         <p onClick={()=> navigate("/home")}
      className=' text-center px-8 text-[18px]
       text-blue-500 hover:underline cursor-pointer'>Back to Home</p>
    </div>
  )
}

export default Login