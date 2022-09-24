import React, { useEffect, useState } from "react";
import Allusers from "./Allusers";
import Footer from './Footer'
export default function UserswithApi(){

const[details,setdetails]=useState([])


async function getdetails(){

var rawdata=await fetch("https://assessment.api.vweb.app/users")

var data=await rawdata.json()

setdetails(data)

}

useEffect(()=>{getdetails()},[])



return(

    <>
    
    <h1 className="back2 mt-5 text-center mb-5 bg-secondary">Users</h1>
    <div className='container'>
    <div className='row'>
    {
        details.map((item,index)=>{
    return <Allusers
        name={item.name}
       image={item.image}

    
    />
    
        })
    }
    

</div>
</div>






 


















 



<Footer/>
</>




)






}

