import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import CategoryData from '../data.json';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categoryList = [
    "Furniture",
    "Electronics",
    "Clothing",
    "Kitchen",
    "Storage",
    "Decor",
    "Outdoor",
    "Lighting",
    "Bedding",
    "Bath",
    "Office",
    "Gaming",
    "Beauty & Wellness",
    "Art & Collectibles",
    "Travel & Luggage",
    "Pet Essentials",
    "Smart Home",
    "Jewelry & Accessories",
    "Books & Media",
    "Home Security",
    "Wellness & Spa",
  ];



  return (
    <main className="categories-page">
      <div className="categories-container">
        <header className="categories-header">
          <div className="header-text">
            <h1 className="page-title">Categories</h1>
            <p className="page-description">
              Browse different shopping categories to quickly find the types of trusted products you're looking for. 
              Each category groups related items together to make exploring the store easier.
            </p>
          </div>

          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search for category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn" aria-label="Search">
              <Search size={20} />
            </button>
          </div>
        </header>

        <section className="categories-grid">
          {CategoryData.categories.map((category, index) => (
            <Link className="link" to={`/${category.id}`}>
              <div key={index} className="category-card">
                <span className="category-name">{category.name}</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
