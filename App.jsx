import React from "react";
import Navbar from "./Navbar";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserswithApi from "./UserswithApi";
import ProductswithApi from "./ProductswithApi";
import OrderswithApi from "./OrderswithApi";

export default function App(){

return(
    <>

<BrowserRouter>
<Navbar/>

<Routes>

<Route path="/users" element={<UserswithApi/>}></Route>
<Route path="/products" element={<ProductswithApi/>}></Route>
<Route path="/orders" element={<OrderswithApi/>}></Route>



</Routes>

</BrowserRouter> 

    </>
)

}
