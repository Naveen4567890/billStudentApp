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
 
  
  return (
   allBills.length? <div className='w-[100%] flex gap-10 flex-wrap   py-8 px-8 justify-center'>
      {
        allBills.map((val)=>{
          return (
        
      //  console.log(val)
       
          <div className='w-1/5 h-4/10 flex items-start flex-col justify-center  shadow-2xl rounded-lg p-5' >
            <h1 className='font-bold  text-blue-600'>{val.companyName}</h1>
            <h1>GST.No : {val.GSTNo}</h1>
            <h1>PAN : {val.PAN}</h1>
            <h1>Total Amount :{val.totalAmount}/-</h1>
            <h1>Invoice Date :{val.invoiceDate}</h1>
          </div>
          )
        })
      }
    </div> :<h1>...loading</h1>
  )
}

export default Home