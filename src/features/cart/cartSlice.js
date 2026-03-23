import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    // ✅ ADD TO CART (NO DUPLICATES)
    addToCart: (state, action) => {
      const exists = state.cart.find(item => item.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
      }
    },

    // ❌ REMOVE FROM CART
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },

    // ❤️ ADD TO WISHLIST (NO DUPLICATES)
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(item => item.id === action.payload.id);
      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },

    // ❌ REMOVE FROM WISHLIST
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
    },

  },
});

// ✅ EXPORT ALL
export const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;