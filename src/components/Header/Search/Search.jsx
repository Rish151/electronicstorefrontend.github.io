import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { FaSearch } from "react-icons/fa"; // Import search icon
import "./Search.css";

const Search = ({ onHide }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  useEffect(() => {
    if (data) {
      setResults(data.data);
    }
  }, [data]);

  const handleProductClick = () => {
    setQuery("");
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="search-input"
        />
      </div>
      {query && (
        <div className="search-results">
          {results.length > 0 ? (
            results.map((product) => (
              <NavLink
                to={`/product/${product.id}`}
                key={product.id}
                className="search-result-item"
                onClick={handleProductClick}  
              >
                <div className="search-result-img">
                <img
                    src={
                      product.attributes.img.data.attributes.url
                    }
                    alt={product.attributes.title}
                  />
                  {/* <img
                    src={
                      "https://simple-one-m1rh.onrender.com" +
                      product.attributes.img.data.attributes.url
                    }
                    alt={product.attributes.title}
                  /> */}
                </div>
                <div className="search-result-info">
                  <div className="search-result-title">
                    {product.attributes.title}
                  </div>
                  <div className="search-result-price">
                    ₹ {product.attributes.price}
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <div className="no-results">No products found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
