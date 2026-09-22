import React from 'react'
import { Outlet } from 'react-router-dom'
import Img from '../../assets/shopping online.jfif'
function Auth() {
  return (
    <section className=' bg-gray-200 pt-[50px]  pb-[90px]'>
<section className="px-4 sm:px-8 md:px-16 lg:px-[200px] flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2
     w-full max-w-[850px] rounded-xl  shadow-xl">
    <div className="hidden md:block">
        <img className='h-[560px] rounded-l-xl  object-cover' src={Img} alt=""  width={423} />
    </div>
    
   <div className='bg-white p-2 ml-[-10px] rounded-r-xl '>
     <Outlet/>
   </div>
   </div>
</section>
</section>
  )
}

export default Auth




