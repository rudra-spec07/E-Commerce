import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import "../../styles/home.css";

const ProductGrid = () => {
  const { products, search, category } = useSelector((s) => s.products);

  // ✅ SAFE FILTER
  const filtered = products.filter((p) => {
    const title = p.title?.toLowerCase() || "";
    const matchSearch = title.includes(search.toLowerCase());
    const matchCategory = category ? p.category === category : true;
    return matchSearch && matchCategory;
  });

  return (
    <div className="home">

      {/* 🔥 TOP DEALS (AUTO SLIDER) */}
      <h2 className="section-title">🔥 Top Deals</h2>

      <div className="scroll-wrapper">
        <div className="scroll-track">
          {[...filtered, ...filtered].slice(0, 20).map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>

      {/* 🧱 GRID SECTION */}
      <h2 className="section-title">🛍️ All Products</h2>

      {filtered.length === 0 ? (
        <p className="no-data">No products found</p>
      ) : (
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProductGrid;