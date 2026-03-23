import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import "../../styles/cart.css";

const Cart = () => {
  const { cart } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h2>🛒 My Cart</h2>

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
        </>
      )}
    </div>
  );
};

export default Cart;