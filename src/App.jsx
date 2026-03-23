import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/products/productsSlice";
import Navbar from "./components/layout/Navbar";
import ProductGrid from "./components/product/ProductGrid";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <ProductGrid />
    </>
  );
}

export default App;