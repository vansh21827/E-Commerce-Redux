import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/productCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleViewDetails = useCallback(() => {
    navigate(`/product/${product.id}`);
  }, [navigate, product.id]);

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="category">
          {product.category}
        </p>

        <p className="price">
          ${product.price}
        </p>

        <button onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);