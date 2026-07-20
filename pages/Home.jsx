import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="container hero-container">

          <div className="hero-content">

            <span className="hero-tag">
              🚀 New Collection 2026
            </span>

            <h1>
              Discover Premium Products
              <span> For Your Lifestyle</span>
            </h1>

            <p>
              Explore thousands of quality products with
              amazing deals, fast delivery, and secure
              shopping—all in one place.
            </p>

            <div className="hero-buttons">

              <Link
                to="/shop"
                className="primary-btn"
              >
                Shop Now
              </Link>

              <Link
                to="/cart"
                className="secondary-btn"
              >
                View Cart
              </Link>

            </div>

            <div className="hero-stats">

              <div>
                <h3>10K+</h3>
                <p>Products</p>
              </div>

              <div>
                <h3>25K+</h3>
                <p>Customers</p>
              </div>

              <div>
                <h3>99%</h3>
                <p>Positive Reviews</p>
              </div>

            </div>

          </div>

          <div className="hero-image">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"
              alt="Premium Product"
            />

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;