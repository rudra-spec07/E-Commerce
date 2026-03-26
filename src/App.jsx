import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchProducts } from "./features/products/productsSlice";
import Navbar from "./components/layout/Navbar";
import ProductGrid from "./components/product/ProductGrid";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;