import React, { useState } from "react";
import { Consumer } from "../context";

function LaptopItem({ laptop }) {
  return (
    <div className="row">
      <div className="col-md-3 col-lg-3 col-sm-3 text-center align-text-center">
        <img src={laptop.imageUrl} alt={laptop.title} className="img-fluid" />
      </div>
      <div className="col-md-6 col-lg-6 col-sm-6">
        <h4 className="text-center">{laptop.title}</h4>
        <p>{laptop.description}</p>
        <h4 className="price">{laptop.price}</h4>
      </div>
    </div>
  );
}

function LaptopPage() {
  // ✅ Move useState outside of Consumer
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  return (
    <Consumer>
      {value => {
        const { laptops } = value;

        // ✅ Check if laptops exist before slicing
        if (!laptops || laptops.length === 0) {
          return <h4 className="text-center">No Laptops Available</h4>;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedLaptops = laptops.slice(startIndex, endIndex);

        return (
          <div className="col-md-9 col-lg-9 col-sm-12 bg-category position-absolute end-0 content">
            <h2 className="category m-auto">Laptops</h2>
            <br />
            {paginatedLaptops.map((laptop, index) => (
              <LaptopItem key={index} laptop={laptop} />  
            ))}

            <br />
            <div className="pagination1">
  {Array.from({ length: Math.ceil(laptops.length / itemsPerPage) }).map((_, index) => (
    <React.Fragment key={index}>
      <button onClick={() => setCurrentPage(index + 1)}>
        {index + 1}
      </button>
      {index < Math.ceil(laptops.length / itemsPerPage) - 1 ? <span className="slash">/</span> : null}
    </React.Fragment>
  ))}
</div>


            <p className="footer position-relative bottom-0 w-100">
              Copyright ©2023 All rights reserved
            </p>
          </div>
        );
      }}
    </Consumer>
  );
}

export default LaptopPage;
