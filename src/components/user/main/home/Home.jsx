import React, { useContext, useEffect, useState } from 'react'
import { contextApi } from '../../../context/Context'
import empServices from '../../../../service/empServices'

const Home = () => {
  const  {globalState}=useContext(contextApi)
  const [allBills,setAllBills]=useState([])
  useEffect(()=>{
    (async () => {
      let data=await empServices.allBills(globalState.token)
      if(data.status==200){
        setAllBills((preVal)=>([...preVal,...data.data.bills]))
      }
    })();
  },[])
  console.log(allBills);
  
  return (
   allBills.length? <div className='size-full'>
      {
        allBills.map((val)=>{
          return (
            <div className='w-1/3 h-1/2 grid bg-amber-300 items-center justify-center' key={val.id}>

            </div>
          )
        })
      }
    </div> :<h1>...loading</h1>
  )
}

export default Home