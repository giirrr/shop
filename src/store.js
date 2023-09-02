import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    //array/object의 경우 return없이 직접 수정해도 state 변경됨
    changeName(state) {
      state.name = "park";
    },
    changeAge(state) {
      state.age = state.age + 1;
    },
  },
});

export let { changeName, changeAge } = user.actions;
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
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    작명: stock.reducer,
    바구니용: cartdata.reducer,
  },
});
