import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import "../styles/productDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loader">Loading Product...</div>;
  }

  if (!product) {
    return <div className="error">Product Not Found</div>;
  }

  return (
    <section className="product-details">
      <div className="container">
        <div className="details-grid">
          <div className="details-image">
            <img
              src={product.thumbnail}
              alt={product.title}
            />
          </div>

          <div className="details-info">
            <span className="brand">{product.brand}</span>

            <h1>{product.title}</h1>

            <div className="rating">
              ⭐ {product.rating}
            </div>

            <div className="category">
              {product.category}
            </div>

            <h2 className="price">
              ${product.price}
            </h2>

            <p className="stock">
              In Stock: {product.stock}
            </p>

            <p className="description">
              {product.description}
            </p>

            <button
              className="primary-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;