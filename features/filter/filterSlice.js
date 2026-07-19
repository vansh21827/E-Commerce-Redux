import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sort: "default",
  category: "all",
  maxPrice: 1000,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },

    setSort(state, action) {
      state.sort = action.payload;
    },

    setCategory(state, action) {
      state.category = action.payload;
    },

    setMaxPrice(state, action) {
      state.maxPrice = Number(action.payload);
    },

    resetFilters(state) {
      state.search = "";
      state.sort = "default";
      state.category = "all";
      state.maxPrice = 1000;
    },
  },
});

export const {
  setSearch,
  setSort,
  setCategory,
  setMaxPrice,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;