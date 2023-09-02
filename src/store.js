import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cartdata = createSlice({
  name: "cartdata",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      state[0].id == state[0].name
        ? (state[0].count += 1)
        : (state[1].count += 1);
    },
    plusitem(state) {
      state = state.push();
    },
  },
});
export let { changeCount, plusitem } = cartdata.actions;
export default configureStore({
  reducer: {
    user: user.reducer,
    작명: stock.reducer,
    바구니용: cartdata.reducer,
  },
});
