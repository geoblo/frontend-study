import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    {
      id: '1',
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2
    },
    {
      id: '3',
      title: "Aerus Z",
      price: 199000,
      count: 1
    },
  ]
};

// 장바구니 정보를 담을 slice 만들기
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  }
});

export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;