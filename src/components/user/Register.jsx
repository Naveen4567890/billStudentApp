import React, { useState } from 'react'

import { CgRename } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEventRepeat } from "react-icons/md";
import {validatePassword} from 'val-pass';
import toast from 'react-hot-toast';

const Register = () => {

  const [state,setState]=useState({})
  const [matched,setMatched]=useState(true)
  const [errorMessage,setErrorMessage]=useState("")

  const handleChange=(e)=>{
  let{name,value}=e.target 
  if(name=='password'){
    let{validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
    validateAll()?setErrorMessage(""):setErrorMessage(getAllValidationErrorMessage)
    value==""&&setErrorMessage("")
  }
  setState({...state,[name]:value})
  }
  
  const handlepassword=(e)=>{
    let {value}=e.target
    state.password!=value?setMatched(false):setMatched(true)
    value==""&&setMatched(true)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let {name,username,email,password}=state
    if(!name||!username||!email||!password){
      toast.error("all fields  are mandatory")
    }
    let{validateAll,getAllValidationErrorMessage}=validatePassword(password)
    if(!validateAll()){
      toast.error(getAllValidationErrorMessage)
    }
    if(!matched){
      toast.error("password and confirm password are unmatched")
    }

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
        <div className={`flex w-full h-2/3 rounded-lg ${!errorMessage?'hidden':''} `}><span className='border-red-700'>*{errorMessage}</span></div>
        <div className={`flex w-full h-2/3 rounded-lg border-2 ${matched?'border-black':'border-red-700'}`}  ><input type="password"  placeholder='Re-Type Password' onChange={handlepassword} className='flex px-8 w-[95%] h-full outline-0'/><span className='p-2 grid place-items-center'><MdOutlineEventRepeat /></span></div>
        <div className=' w-full h-2/3 bg-linear-to-l from-[dodgerblue] to-[aquamarine] text-white grid place-items-center tracking-widest active:scale-[0.9]'><button className='size-full hover:bg-green-500 '>Click</button></div>
      </form>
    </div>
  )
}

export default Register