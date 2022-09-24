import React, { useEffect, useState } from "react";
import Allorders from "./Allorders";
import Footer from './Footer'
export default function OrderswithApi(){

const[details,setdetails]=useState([])


async function getdetails(){

var rawdata=await fetch("https://assessment.api.vweb.app/orders")

var data=await rawdata.json()

setdetails(data)

}

useEffect(()=>{getdetails()},[])



return(

    <>
    
    <h1 className="back2 mt-5 text-center mb-5 bg-secondary">Orders</h1>
    <div className='container'>
    <div className='row'>
    {
        details.map((item,index)=>{
    return <Allorders
        order_date={item.order_date}
       

    
    />
    
        })
    }
    

</div>
</div>

<Footer/>
</>




)






}

