import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context"; // ✅ Import Context instead of Consumer

function Filter() {
  // ✅ Get data from context
  const value = useContext(Context);
  const { laptops, mobiles, tablets } = value;

  // ✅ State for selected category, price range, and filtered data
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [allItems, setAllItems] = useState([]); // ✅ Store all data

  // ✅ Load all items when context data is available
  useEffect(() => {
    if (laptops && mobiles && tablets) {
      const allProducts = [...laptops, ...mobiles, ...tablets];
      setAllItems(allProducts);
      setFilteredData(allProducts); // Show all items initially
    }
  }, [laptops, mobiles, tablets]); // ✅ Runs only when data changes

  // ✅ Function to apply filters when category or price changes
  useEffect(() => {
    let filteredItems = [...allItems];

    // ✅ Step 1: Filter by Category
    if (selectedCategory) {
      filteredItems = filteredItems.filter((item) => item.category === selectedCategory);
    }

    // ✅ Step 2: Filter by Price
    if (selectedPriceRange) {
      filteredItems = filteredItems.filter((item) => {
        const price = parseInt(item.price.replace(/,/g, ""), 10); // Convert "10,000" to 10000 (Number)

        if (selectedPriceRange === "under10000") return price <= 10000;
        if (selectedPriceRange === "10001to20000") return price > 10000 && price <= 20000;
        if (selectedPriceRange === "20001to50000") return price > 20000 && price <= 50000;
        if (selectedPriceRange === "over50000") return price > 50000;
        return true;
      });
    }

    setFilteredData(filteredItems); // ✅ Update state with filtered items
  }, [selectedCategory, selectedPriceRange, allItems]); // ✅ Runs when filters or data change

  return (
    <div className="col-md-3 col-lg-3 col-sm-12">
      <h1 className="text-center font-weight-bold">Filters</h1>

      {/* ✅ Category Filter */}
      <div className="container filter mt-5">
        <h3 className="font-weight-bold">Category</h3>
        {["Laptops", "Mobiles", "Tablets"].map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />
            {category}
          </label>
        ))}
        <br />
        <label>
          <input
            type="radio"
            name="category"
            checked={selectedCategory === null}
            onChange={() => setSelectedCategory(null)}
          />
          All Categories
        </label>
      </div>

      {/* ✅ Price Filter */}
      <div className="container filter mt-5">
        <h3 className="font-weight-bold">Price</h3>
        {[
          { label: "Under 10,000", value: "under10000" },
          { label: "10,001 - 20,000", value: "10001to20000" },
          { label: "20,001 - 50,000", value: "20001to50000" },
          { label: "Over 50,000", value: "over50000" },
        ].map((priceRange) => (
          <label key={priceRange.value}>
            <input
              type="radio"
              name="price"
              checked={selectedPriceRange === priceRange.value}
              onChange={() => setSelectedPriceRange(priceRange.value)}
            />
            {priceRange.label}
          </label>
        ))}
        <br />
        <label>
          <input
            type="radio"
            name="price"
            checked={selectedPriceRange === null}
            onChange={() => setSelectedPriceRange(null)}
          />
          All Prices
        </label>
      </div>

      <br />

      {/* ✅ Display Filtered Results */}
      <div>
        <h3>Filtered Results:</h3>
        {filteredData.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredData.map((item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <img src={item.imageUrl} alt={item.title} className="img-fluid" />
              <p>{item.description}</p>
              <h4 className="price">{item.price}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Filter;
