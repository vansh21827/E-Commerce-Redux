import {
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";

import {
  setSearch,
  setSort,
} from "../features/filter/filterSlice";

import "../styles/shop.css";

function Shop() {
  const dispatch = useDispatch();

  const {
    search,
    sort,
    category,
    maxPrice,
  } = useSelector((state) => state.filter);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Optimized filtering
  const filteredProducts = useMemo(() => {
    return [...products]
      .filter((product) =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter(
        (product) =>
          category === "all" ||
          product.category === category
      )
      .filter(
        (product) => product.price <= maxPrice
      )
      .sort((a, b) => {
        if (sort === "low") return a.price - b.price;
        if (sort === "high") return b.price - a.price;
        if (sort === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [
    products,
    search,
    sort,
    category,
    maxPrice,
  ]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Unable to fetch products.");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Optimized event handlers
  const handleSearch = useCallback(
    (e) => {
      dispatch(setSearch(e.target.value));
    },
    [dispatch]
  );

  const handleSort = useCallback(
    (e) => {
      dispatch(setSort(e.target.value));
    },
    [dispatch]
  );

  if (loading) {
    return (
      <h2 className="status">
        Loading products...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="status">
        {error}
      </h2>
    );
  }

  return (
    <section className="shop-page">
      <section className="shop-header container">
        <div>
          <h1>Shop Products</h1>

          <p>
            Discover premium products at the
            best prices.
          </p>
        </div>

        <div className="shop-controls">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
          />

          <select
            value={sort}
            onChange={handleSort}
          >
            <option value="default">
              Sort By
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>

            <option value="rating">
              Highest Rated
            </option>
          </select>
        </div>
      </section>

      <div className="shop-layout container">
        <SidebarFilters />

        <div className="shop-content">
          <p className="product-count">
            {filteredProducts.length} Products
            Found
          </p>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;