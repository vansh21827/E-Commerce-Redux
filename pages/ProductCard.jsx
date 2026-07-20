import { Link } from "react-router-dom";
import "../styles/productCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="discount-badge">
        -{product.discountPercentage.toFixed(0)}%
      </div>

      <div className="product-image">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

      </div>

      <div className="product-info">

        <p className="product-brand">
          {product.brand}
        </p>

        <h3>
          {product.title}
        </h3>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <div className="price-section">

          <span className="price">
            ${product.price}
          </span>

          <span className="old-price">
            $
            {(
              product.price /
              (1 - product.discountPercentage / 100)
            ).toFixed(0)}
          </span>

        </div>

        <Link
          to={`/product/${product.id}`}
          className="view-btn"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;