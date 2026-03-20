import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import CategoryData from "../../data.json";
import { Link } from "react-router-dom";

const FurnitureCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  const furnitureCategory = CategoryData.categories.find(
    (category) => category.id === "furniture",
  );
  const furnitureData = furnitureCategory?.subCategories || {};

  const ProductSection = ({ title, products }) => (
    <section className="product-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-carousel">
        <div className="product-grid">
          {products?.map((product, index) => (
            <Link to={`/furniture/${product.id}`} key={index} className="product-card link">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-info-footer">
                <span className="product-price">${product.price}</span>
                <button className="view-btn">View</button>
                <div className="trust-badge">{product.trustScore}</div>
              </div>
            </Link>
          ))}
        </div>
        <button className="carousel-arrow" aria-label="Next">
          <ArrowRight size={32} />
        </button>
      </div>
    </section>
  );

  return (
    <main className="furniture-page">
      <div className="furniture-container">
        <header className="categories-header">
          <div className="header-text">
            <h1 className="page-title">Furniture</h1>
          </div>

          <div
            className="header-controls"
            style={{ display: "flex", alignItems: "center", gap: "30px" }}
          >
            <div
              className="filter-group"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <label htmlFor="furniture-filter" style={{ fontSize: "1.1rem" }}>
                Filter:
              </label>
              <select
                id="furniture-filter"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                style={{
                  padding: "5px 15px",
                  borderRadius: "8px",
                  border: "1px solid #000",
                  minWidth: "120px",
                }}
              >
                <option value=""></option>
                <option value="couches">Couches</option>
                <option value="tables">Tables</option>
                <option value="beds">Beds</option>
              </select>
            </div>

            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search for furniture type"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-btn" aria-label="Search">
                <Search size={20} />
              </button>
            </div>
          </div>
        </header>

        <ProductSection title="Couches" products={furnitureData.couches} />
        <ProductSection title="Tables" products={furnitureData.tables} />
        <ProductSection title="Beds" products={furnitureData.beds} />
      </div>
    </main>
  );
};

export default FurnitureCategory;
