import React, { useState } from "react";
import { Consumer } from "../context";

// ✅ Fix: TabletItem should receive a single `tablet` object as a prop
function TabletItem({ tablet }) {
  return (
    <div className="row">
      <div className="col-md-3 col-lg-3 col-sm-3 text-center align-text-center">
        <img src={tablet.imageUrl} alt={tablet.title} className="img-fluid" />
      </div>
      <div className="col-md-6 col-lg-6 col-sm-6">
        <h4 className="text-center">{tablet.title}</h4>
        <p>{tablet.description}</p>
        <h4 className="price">{tablet.price}</h4>
      </div>
    </div>
  );
}

function TabletPage() {
  // ✅ Fix: Move `useState` outside of <Consumer>
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  return (
    <Consumer>
      {(value) => {
        const { tablets } = value;

        // ✅ Fix: Check if `tablets` exists before slicing
        if (!tablets || tablets.length === 0) {
          return <h4 className="text-center">No Tablets Available</h4>;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedTablets = tablets.slice(startIndex, endIndex);

        return (
          <div className="col-md-9 col-lg-9 col-sm-12 bg-category position-absolute end-0 content">
            <h2 className="category m-auto">Tablets</h2>
            <br />
            {paginatedTablets.map((tablet, index) => (
              <TabletItem key={index} tablet={tablet} />
            ))}

            <br />
            <div className="pagination1">
              {Array.from({ length: Math.ceil(tablets.length / itemsPerPage) }).map((_, index) => (
                <React.Fragment key={index}>
                  <button onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                  {index < Math.ceil(tablets.length / itemsPerPage) - 1 ? <span className="slash">/</span> : null}
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

export default TabletPage;
