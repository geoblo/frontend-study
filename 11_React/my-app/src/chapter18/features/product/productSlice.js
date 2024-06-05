import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToProductList: (state, action) => {
      console.log(action);
      state.productList.push(action.payload);
    },
  }
});

export const { addToProductList } = productSlice.actions;

export const selectProductList = (state) => state.product.productList;

export default productSlice.reducer;