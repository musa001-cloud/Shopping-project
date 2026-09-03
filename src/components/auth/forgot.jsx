import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
 
function forgot() {
  const {register, handleSubmit, formState:{ errors }} = useForm()
const onSubmit = (data) =>{
  console.log(data)
}
  const navigate = useNavigate()
  return (
    <div>
       <div className='text-center'>
        <h1 className='text-[26px] font-semibold'>Welcome Back</h1><br />
        <p className='text-[14px] text-gray-500'>Welcome Back To VELNOX!
           We are Happy to Meet You Back Again.</p>
      </div><br /><br />
      <form onSubmit={handleSubmit(onSubmit)} className='px-8'>
        
       
        <label htmlFor="password" className='text-[20px] '>Reset Password</label> <br />
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
         <br /><br />
        <button type='submit' className='px-8 flex py-2 rounded-md
         ml-8 justify-center bg-blue-500 w-[85%] text-white items-center'>
          Login
        </button>
      </form>
      
      
        <br />
        <p onClick={()=> navigate("/auth/login")}
      className=' text-center px-8 text-[18px]
       text-blue-500 hover:underline cursor-pointer'>Back to login</p>
       <br />
        <p onClick={()=> navigate("/home")}
      className=' text-center px-8 text-[18px]
       text-blue-500 hover:underline cursor-pointer'>Back to Home</p>
    </div>
  )
}

export default forgot