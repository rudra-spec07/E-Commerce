import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import "../../styles/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleBuyNow = () => {
    alert("Payment process is starting...");
  };

  return (
    <div className="cart-page">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>🛒 My Cart</h2>
        <button
          onClick={() => navigate("/")}
          style={{ padding: "8px 16px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}
        >
          ← Continue Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt="" />

              <div>
                <h4>{item.title}</h4>
                <p>₹ {item.price}</p>
              </div>

              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹ {total}</h3>

          {/* Buy Now Button */}
          <button
            onClick={handleBuyNow}
            style={{
              marginTop: "20px",
              padding: "12px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
