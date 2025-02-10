import React from "react";
import {Link} from "react-router-dom";
import Filter from "./filter";

function navbar(){


    return(
        <div>
<nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link items" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link items" to="/laptopPage">Laptops</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link items" to="/mobilePage">Mobiles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link items" to="/tabletPage">Tablets</Link>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
<br/>
<br/>
</div>
    );
}

export default navbar;