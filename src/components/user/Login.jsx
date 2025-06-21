import React, { useState } from 'react'


import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import toast from 'react-hot-toast';
import empServices from '../../service/empServices';
import { useNavigate } from 'react-router-dom';


const Login = () => {
   
  let nagivate=useNavigate()
  const [state,setState]=useState({})

  const handleChange=(e)=>{
  let{name,value}=e.target 
  setState({...state,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(state)
    
  }

  return (
     <div className='size-full bg-linear-to-l from-[#10cec4] to-[#e0c361]  grid place-items-center' >
          <form action=""  onSubmit={handleSubmit} className='w-1/2 h-[90%] bg-white rounded-3xl shadow-2xl grid place-items-center px-[7%] py-8 max-sm:w-[90%] overflow-scroll'>
            <div className='size-full grid place-items-center text-2xl font-bold'><h1 className=' text-3xl sm:text-2xl'>Login form</h1></div>
            
            
            <div className='flex w-full h-2/3 rounded-lg border-2'><input type="email" name="email" placeholder='Enter Email' onChange={handleChange} className='flex px-8 w-[95%] h-full outline-0'/><span className='p-2 grid place-items-center'><MdEmail /></span></div>
            <div className='flex w-full h-2/3 rounded-lg border-2'><input type="password" name="password" placeholder='Enter Password' onChange={handleChange} className='flex px-8 w-[95%] h-full outline-0'/><span className='p-2 grid place-items-center'><RiLockPasswordFill /></span></div>
            
            <div className=' w-full h-2/3 bg-linear-to-l from-[dodgerblue] to-[aquamarine] text-white grid place-items-center tracking-widest active:scale-[0.9]'><button className='size-full hover:bg-green-500 '>Click</button></div>
          </form>
        </div>
  )
}

export default Login