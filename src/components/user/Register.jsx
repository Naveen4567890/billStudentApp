import React, { useState } from 'react'

import { CgRename } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEventRepeat } from "react-icons/md";

const Register = () => {

  let [state,setState]=useState({})
  let [repeat,setRepeat]=useState([])

  let handleChange=(e)=>{
  let{name,value}=e.target 
  setState({...state,[name]:value})
  }

  let handlePassword=(e)=>{
    setRepeat([...repeat,e.target.value])
    state.password!=e.target.value? e.target.style.border="2px solid red":e.target.style.border="2px solid white"
  }

  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(state);
    
  }
  return (
    <div className='size-full bg-linear-to-l from-[#10cec4] to-[#e0c361]  grid place-items-center' >
      <form action=""  onSubmit={handleSubmit} className='w-1/2 h-[90%] bg-white rounded-3xl shadow-2xl grid place-items-center px-[7%] py-8 max-sm:w-[90%] overflow-scroll'>
        <div className='size-full grid place-items-center text-2xl font-bold'><h1 className=' text-3xl sm:text-2xl'>Registration form</h1></div>
        <div className='flex w-full h-2/3 rounded-lg border-2' ><input type="text" name="name" placeholder='Enter Name' onChange={handleChange} className='flex px-8 w-[95%] h-full outline-0' /><span className=' p-2 grid place-content-center'><CgRename /></span></div>
        <div className='flex w-full h-2/3 rounded-lg border-2'><input type="text" name="username" placeholder='Enter UserName' onChange={handleChange} className='flex px-8 w-[95%] h-full outline-0'/><span className='p-2 grid place-items-center'><FaRegUserCircle /></span></div>
        <div className='flex w-full h-2/3 rounded-lg border-2'><input type="email" name="email" placeholder='Enter Email' onChange={handleChange} className='flex px-8 w-[95%] h-full outline-0'/><span className='p-2 grid place-items-center'><MdEmail /></span></div>
        <div className='flex w-full h-2/3 rounded-lg border-2'><input type="password" name="password" placeholder='Enter Password' onChange={handleChange} className='flex px-8 w-[95%] h-full outline-0'/><span className='p-2 grid place-items-center'><RiLockPasswordFill /></span></div>
        <div className='flex w-full h-2/3 rounded-lg border-2' ><input type="password" name="repeat password" placeholder='Re-Type Password' onChange={handlePassword} className='flex px-8 w-[95%] h-full outline-0'/><span className='p-2 grid place-items-center'><MdOutlineEventRepeat /></span></div>
        <div className=' w-full h-2/3 bg-linear-to-l from-[dodgerblue] to-[aquamarine] text-white grid place-items-center tracking-widest'><button>Click</button></div>
      </form>
    </div>
  )
}

export default Register