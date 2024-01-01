import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      state.cartItems.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      state.cartItems = state.cartItems.filter(
        (prod) => prod.id !== actions.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
