import React from "react";

export default function Allorders(props){



return(


<>


 <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
<div className="card" style={{height:"100px"}}  >

  <div className="card-body" >
    <h5 className="card-title" style={{height:"200px"}}>{props.order_date}</h5>
 
    
  


  </div>
</div>
 </div>


</>


)



}