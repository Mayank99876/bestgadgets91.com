import React from "react";
import Laptops from "./laptops"; 
import Mobiles from "./mobiles";
import Tablets from "./tablets"; 


function content(){
    return(
        <div className="col-md-9 col-lg-9 col-sm-12 bg-category">
        <Laptops/>
        <Mobiles/>
        <Tablets/>
    </div>
    )
}

export default content;