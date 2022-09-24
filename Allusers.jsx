import React from "react";
import pic from './Images/tim.jpg'

export default function Allusers(props){



return(


<>


 <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
<div className="card" style={{height:"300px"}}  >

  <div className="card-body" >
  <img src={pic} className={"img-fluid"}/>
  
    <h5 className="card-title" style={{height:"200px"}}>{props.name}</h5>


    <p className="card-text">{}</p>
    
    <p className="card-text">{}</p>
  


  </div>
</div>
 </div>


</>


)



}