import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../features/cart/cartSlice";
import "../../styles/cart.css";

const Wishlist = () => {
  const { wishlist } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>❤️ Wishlist</h2>

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