import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setMaxPrice,
  resetFilters,
} from "../features/filter/filterSlice";

function SidebarFilters() {
  const dispatch = useDispatch();

  const { category, maxPrice } = useSelector(
    (state) => state.filter
  );

  const categories = [
    "all",
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
  ];

  return (
    <aside className="sidebar">
      <h2>Filters</h2>

      <h3>Category</h3>

      {categories.map((item) => (
        <button
          key={item}
          className={
            category === item ? "active-filter" : ""
          }
          onClick={() => dispatch(setCategory(item))}
        >
          {item}
        </button>
      ))}

      <h3>Maximum Price</h3>

      <input
        type="range"
        min="0"
        max="1000"
        step="10"
        value={maxPrice}
        onChange={(e) =>
          dispatch(setMaxPrice(e.target.value))
        }
      />

      <p>${maxPrice}</p>

      <button
        className="primary-btn"
        onClick={() => dispatch(resetFilters())}
      >
        Reset Filters
      </button>
    </aside>
  );
}

export default SidebarFilters;