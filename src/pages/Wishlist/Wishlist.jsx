import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../features/cart/cartSlice";
import "../../styles/cart.css";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const navigate =useNavigate();

  return (
    <div className="cart-page">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>❤️ My Wishlist</h2>
        <button 
          onClick={() => navigate("/")} 
          style={{ padding: "8px 16px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}
        >
          ← Continue Shopping
        </button>
      </div>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.thumbnail} alt="" />

            <div>
              <h4>{item.title}</h4>
              <p>₹ {item.price}</p>
            </div>

            <button onClick={() => dispatch(removeFromWishlist(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;