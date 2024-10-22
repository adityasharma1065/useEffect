import { useEffect, useState } from "react";
import axios from "../assets/utils/axios";

const Show = () => {
    const [products,setproducts]=useState([])

  const getProducts=()=>{
    
    axios.get("/products").then(product=>{
      // console.log(products);
      setproducts(product.data)
      
    }).catch(err=>{
      console.log(err);
      
    })
  } 

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
    <button className="px-5 py-2 rounded bg-red-300 mt-10" onClick={getProducts}>Call Api</button>
    <hr className="my-10"/>
    <ul>
        {
        products.length > 0 ? (products.map((p)=>(

          <li key={p.id} className=" mb-2 p-5 bg-red-200 rounded">{p.title}</li>
        )))
        : 
        (<h1>Loading...</h1> )
        }
      </ul>
    </>
  )
}

export default Show