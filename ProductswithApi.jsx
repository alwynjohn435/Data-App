import React, { useEffect, useState } from "react";
import Allproducts from "./Allproducts";
import Footer from './Footer'
export default function ProductswithApi(){

const[details,setdetails]=useState([])


async function getdetails(){

var rawdata=await fetch("https://assessment.api.vweb.app/products")

var data=await rawdata.json()

setdetails(data)

}

useEffect(()=>{getdetails()},[])



return(

    <>
    
    <h1 className="back2 mt-5 text-center mb-5 bg-secondary">Products</h1>
    <div className='container'>
    <div className='row'>
    {
        details.map((item,index)=>{
    return <Allproducts
        name={item.name}
        stock={item.stock}
        selling_price={item.selling_price}
       

    
    />
    
        })
    }
    

</div>
</div>


<Footer/>
</>




)






}

