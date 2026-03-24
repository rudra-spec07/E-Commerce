import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch, setCategory } from "../../features/products/productsSlice";
import "../../styles/navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [active, setActive] = useState("");
  const [user, setUser] = useState(localStorage.getItem("user"));

  // ✅ GET CART + WISHLIST COUNT
  const cartCount = useSelector((state) => state.cart.cart.length);
  const wishlistCount = useSelector((state) => state.cart.wishlist.length);

  const handleCategory = (cat) => {
    setActive(cat);
    dispatch(setCategory(cat));
  };

  return (
    <div className="navbar">

      {/* LOGO */}
      <h2 className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>MyStore</h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      {/* CATEGORIES */}
      <div className="categories">
        <button
          className={active === "smartphones" ? "active" : ""}
          onClick={() => handleCategory("smartphones")}
        >
          Mobiles
        </button>

        <button
          className={active === "laptops" ? "active" : ""}
          onClick={() => handleCategory("laptops")}
        >
          Electronics
        </button>

        <button
          className={active === "fragrances" ? "active" : ""}
          onClick={() => handleCategory("fragrances")}
        >
          Beauty
        </button>

        <button
          className={active === "" ? "active" : ""}
          onClick={() => handleCategory("")}
        >
          All
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        {/* ❤️ WISHLIST */}
        <button className="nav-btn" onClick={() => navigate("/wishlist")}>
          ❤️ Wishlist ({wishlistCount})
        </button>

        {/* 🛒 CART */}
        <button className="nav-btn" onClick={() => navigate("/cart")}>
          🛒 Cart ({cartCount})
        </button>

        {/* 🔐 LOGIN / LOGOUT */}
        {user ? (
          <button
            className="nav-btn login"
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="nav-btn login"
            onClick={() => {
              localStorage.setItem("user", "User");
              setUser("User");
            }}
          >
            Login
          </button>
        )}
      </div>

    </div>
  );
};

export default Navbar;