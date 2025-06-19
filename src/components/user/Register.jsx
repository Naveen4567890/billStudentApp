import React from 'react'

import { CgRename } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEventRepeat } from "react-icons/md";

const Register = () => {
  return (
    <div className='size-full bg-[#efefef]  grid place-items-center' >
      <form action="" className='w-1/2 h-3/4 bg-white rounded-3xl shadow-2xl grid place-items-center px-[7%] py-8'>
        <div className='size-full grid place-items-center text-2xl font-bold'><h2>Registration form</h2></div>
        <div className='flex w-full h-2/3 rounded-lg border-2' ><input type="text" name="name" placeholder='Enter Name' className='flex px-8 w-[95%] h-full outline-0' /><span className='grid place-content-center'><CgRename /></span></div>
        <div className='flex w-full h-2/3 rounded-lg border-2'><input type="text" name="username" placeholder='Enter UserName' className='flex px-8 w-[95%] h-full outline-0'/><span className='grid place-items-center'><FaRegUserCircle /></span></div>
        <div className='flex w-full h-2/3 rounded-lg border-2'><input type="email" name="email" placeholder='Enter Email' className='flex px-8 w-[95%] h-full outline-0'/><span className='grid place-items-center'><MdEmail /></span></div>
        <div className='flex w-full h-2/3 rounded-lg border-2'><input type="password" name="password" placeholder='Enter Password' className='flex px-8 w-[95%] h-full outline-0'/><span className='grid place-items-center'><RiLockPasswordFill /></span></div>
        <div className='flex w-full h-2/3 rounded-lg border-2'><input type="password" name="repeat password" placeholder='Re-Type Password' className='flex px-8 w-[95%] h-full outline-0'/><span className='grid place-items-center'><MdOutlineEventRepeat /></span></div>
        <div className=' w-full h-2/3 bg-black text-white grid place-items-center tracking-widest'><button>Click</button></div>
      </form>
    </div>
  )
}

export default Register