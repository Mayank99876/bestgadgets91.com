import React from "react";
import { Consumer } from "../context";

function Tablets() {
  return (
    <Consumer>
      {(value) => {
        const { tablets } = value;

        return (
          <div>
            <h2 className="category m-auto">tablets</h2>
            <br />
            <br />
            <div
              id="multi-item-carousel-3"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {tablets.map((tablet, index) => {
                  if (index % 3 === 0) {
                    // Start a new row for every third tablet
                    return (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <div className="row">
                          {tablets
                            .slice(index, index + 3)
                            .map((tabletInRow, innerIndex) => (
                              <div
                                key={innerIndex}
                                className="col-md-4 col-sm-12"
                              >
                                {/* Image */}
                                <img
                                  src={tabletInRow.imageUrl}
                                  className="d-block w-100"
                                  alt={`tablet ${index + innerIndex + 1}`}
                                />
                                <h4 className="text-center">
                                  {tabletInRow.title}
                                </h4>
                                <p>{tabletInRow.description}</p>
                                <h4 className="price text-center">
                                  {tabletInRow.price}
                                </h4>
                              </div>
                            ))}
                        </div>
                      </div>
                    );
                  }
                  // Skip rendering for other tablets (they will be handled in the next iteration)
                  return null;
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#multi-item-carousel-3"
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
                data-bs-target="#multi-item-carousel-3"
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

export default Tablets;
