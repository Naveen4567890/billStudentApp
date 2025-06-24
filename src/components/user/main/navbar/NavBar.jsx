import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../home/Home'
import AddBills from '../addbills/AddBills'
import FilterBills from '../filter/FilterBills'
import About from '../about/About'
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    let [show,setShow]=useState(false)
    let handleShow=()=>{
        setShow(!show)
    
    }
    
  return (
    <div className={`w-full h-1/10 bg-black flex justify-around text-white items-center text-xl max-sm:justify-start
    max-sm:px-8 ${show?"h-[200px] flex flex-col justify-around gap-2.5 items-start py-2.5":""} sm:flex-row sm:h-1/10 sm:justify-around sm:items-center`}>
        <div className='hidden max-sm:flex'>{show?<RxCross2 onClick={handleShow}/>:<TfiMenuAlt onClick={handleShow}/>}</div>
        <div><Link to={"/Home"} className={`max-sm:hidden${show?'block':""} `}>Home</Link></div>
        <div><Link to={"AddBills"} className={`max-sm:hidden${show?'block':""}`}>Add Bills</Link></div>
        <div><Link to={"FilterBills"} className={`max-sm:hidden${show?'block':""}`}>Filter Bills</Link></div>
        <div><Link to={'About'} className={`max-sm:hidden${show?'block':""}`}>About</Link></div>
    </div>
  )
}

export default NavBar