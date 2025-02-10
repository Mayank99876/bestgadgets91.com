import React, { useState } from "react";
import { Consumer } from "../context";

// ✅ Fix: MobileItem should receive a single `mobile` object as a prop
function MobileItem({ mobile }) {
  return (
    <div className="row text-center align-text-center">
      <div className="col-md-3 col-lg-3 col-sm-3">
        <img src={mobile.imageUrl} alt={mobile.title} className="img-fluid" />
      </div>
      <div className="col-md-6 col-lg-6 col-sm-6">
        <h4 className="text-center">{mobile.title}</h4>
        <p>{mobile.description}</p>
        <h4 className="price">{mobile.price}</h4>
      </div>
    </div>
  );
}

function MobilePage() {
  // ✅ Fix: Move `useState` outside of <Consumer>
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  return (
    <Consumer>
      {(value) => {
        const { mobiles } = value;

        // ✅ Fix: Check if `mobiles` is available before slicing
        if (!mobiles || mobiles.length === 0) {
          return <h4 className="text-center">No Mobiles Available</h4>;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedMobiles = mobiles.slice(startIndex, endIndex);

        return (
          <div className="col-md-9 col-lg-9 col-sm-12 bg-category position-absolute end-0 content">
            <h2 className="category m-auto">Mobiles</h2>
            <br />
            {paginatedMobiles.map((mobile, index) => (
              <MobileItem key={index} mobile={mobile} />
            ))}
            <br />
            <div className="pagination1">
              {Array.from({
                length: Math.ceil(mobiles.length / itemsPerPage),
              }).map((_, index) => (
                <button key={index} onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
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

export default MobilePage;
