import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export const useCart = () => {

  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const add = (product) => {
    dispatch(addToCart(product));
  };

  return { items, add };
};
