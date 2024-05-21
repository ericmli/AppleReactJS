import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartState {
  name: string;
  image: string;
  show: boolean;
}

const initialState: CartState = {
  name: '',
  image: '',
  show: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartState>) => {
      state = action.payload;
      console.log(state);
    },
    clearCart: () => initialState,
  },
});

export const { setCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;