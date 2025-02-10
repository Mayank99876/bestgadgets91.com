import React from "react";
import { Consumer } from "../context";

function Mobiles() {
  return (
    <Consumer>
      {(value) => {
        const { mobiles } = value;

        return (
          <div>
            <h2 className="category m-auto">mobiles</h2>
            <br />
            <br />
            <div
              id="multi-item-carousel-2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {mobiles.map((mobile, index) => {
                  if (index % 3 === 0) {
                    // Start a new row for every third mobile
                    return (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <div className="row">
                          {mobiles
                            .slice(index, index + 3)
                            .map((mobileInRow, innerIndex) => (
                              <div
                                key={innerIndex}
                                className="col-md-4 col-sm-12"
                              >
                                {/* Image */}
                                <img
                                  src={mobileInRow.imageUrl}
                                  className="d-block w-100"
                                  alt={`mobile ${index + innerIndex + 1}`}
                                />
                                <h4 className="text-center">
                                  {mobileInRow.title}
                                </h4>
                                <p>{mobileInRow.description}</p>
                                <h4 className="price text-center">
                                  {mobileInRow.price}
                                </h4>
                              </div>
                            ))}
                        </div>
                      </div>
                    );
                  }
                  // Skip rendering for other mobiles (they will be handled in the next iteration)
                  return null;
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#multi-item-carousel-2"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#multi-item-carousel-2"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Mobiles;
