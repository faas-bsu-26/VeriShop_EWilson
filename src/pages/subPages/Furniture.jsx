import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import productImage from '../../assets/product_img.jpg';


const FurnitureCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const couches = [
      { name: "Example 1", image: "https://via.placeholder.com/300x200.png?text=Couches+1" },
      { name: "Example 2", image: "https://via.placeholder.com/300x200.png?text=Couches+2" },
      { name: "Example 3", image: "https://via.placeholder.com/300x200.png?text=Couches+3" },
      { name: "Example 4", image: "https://via.placeholder.com/300x200.png?text=Couches+1" },
  ];

  const tables = [
    { name: "Example 1", image: "https://via.placeholder.com/300x200.png?text=Tables+1" },
    { name: "Example 2", image: "https://via.placeholder.com/300x200.png?text=Tables+2" },
    { name: "Example 3", image: "https://via.placeholder.com/300x200.png?text=Tables+3" },
    { name: "Example 4", image: "https://via.placeholder.com/300x200.png?text=Tables+4" },
  ];

  const ProductSection = ({ title, products }) => (
    <section className="product-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-carousel">
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={productImage} alt={product.name} className="product-image" />
              <button className="view-btn">View</button>
            </div>
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

          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search for furniture"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn" aria-label="Search">
              <Search size={20} />
            </button>
          </div>
        </header>

        <ProductSection title="Couches" products={couches} />
        <ProductSection title="Tables" products={tables} />
      </div>
    </main>
  );
};

export default FurnitureCategory;