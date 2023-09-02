import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(
      state //기존state:kim을 뜻함
    ) {
      return "john " + state;
    },
    ㄴㅁㄹㅁㄴ() {},
  },
});

export let { changeName } = user.actions;
//state 변경함수들 남음

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cartdata = createSlice({
  name: "cartdata",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ], //array나 object 상관없이 넣을 수 있음
});

export default configureStore({
  reducer: {
    user: user.reducer,
    작명: stock.reducer,
    바구니용: cartdata.reducer,
  },
});
