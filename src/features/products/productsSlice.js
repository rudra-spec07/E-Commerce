import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  search: "",
  category: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setProducts, setSearch, setCategory } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  dispatch(setProducts(data.products));
};

export default productSlice.reducer;