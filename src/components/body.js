import React from "react";
import Filter from "./filter";
import Content from "./content";
import { useLocation } from "react-router-dom"; // Import the useLocation hook

function Body() {
  const location = useLocation();
  
  return (
    <div className="container-fluid">
      <div className="row">
        <Filter />
        {location.pathname === "/" && <Content />} {/* Conditionally render Content on the home page */}
      </div>
    </div>
  );
}

export default Body;
