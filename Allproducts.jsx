import React from "react";
import pic from './Images/cookie.jpg'
export default function Allproducts(props){



return(


<>


 <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
<div className="card" style={{height:"400px"}}  >

  <div className="card-body" >
    <h5 className="card-title" style={{height:"50px"}}>{props.name}</h5>
    <img src={pic} className={"img-fluid"} />
    <h5>Stock</h5>
    <p className="card-text">{props.stock}</p>
 <h5>SellingPrice</h5>
    <p className="card-text">{props.selling_price}</p>
  


  </div>
</div>
 </div>


</>


)



}