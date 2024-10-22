import React, { useEffect, useState } from 'react'



const Services = () => {

    const [smalldata,setsmalldata]=    useState("small data")
    const [bigdata,setbigdata]=    useState("big data")

    useEffect(()=>{
        console.log("Service component is mounted");

        return ()=>{
            console.log("Service component is unmounted");
            
            
        }
        
    },[bigdata])

   
  return (
    <div>
        {smalldata} <br />
        <button onClick={()=>{setsmalldata("Changed small data")}} className='bg-red-300 rounded px-5 py-2'>Change small data</button>
        <br />
        {bigdata} <br />
        <button onClick={()=>{setbigdata("Changed big data")}} className='bg-red-300 rounded px-5 py-2' >change big data</button>
    </div>
  )
}

export default Services