import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../features/cart/cartSlice";
import "../../styles/product.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart(product));
    alert("Added to Cart ✅");
  };

  const handleWishlist = () => {
    dispatch(addToWishlist(product));
    alert("Added to Wishlist ❤️");
  };

  return (
    <div className="card">
      <img src={product.thumbnail} alt="" />

      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>

      <button onClick={handleCart}>Buy Now</button>
      <button onClick={handleWishlist}>❤️ Wishlist</button>
    </div>
  );
};

export default ProductCard;