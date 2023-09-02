import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
    // addCount(state, action) {
    //     state[0].count++  //위에 array에서 0번째꺼 count라는 항목을 +1 해주세요
    // },
    // addItem(state) {
    //   state.push({ id: 1, name: "Red Knit", count: 1 });    요건 1번 상품 하나만 띡 추가
    addItem(state, action) {
      state.push(action.payload);
      //additem({ id: 1, name: "Red Knit", count: 1 }) 요렇게 입력되면 그대로 푸시되서 추가됨
    },
  },
});
export let { addCount, addItem } = cart.actions;
export default configureStore({
  reducer: {
    user: user.reducer,
    작명: stock.reducer,
    cart: cart.reducer, //개씨 거지같은 바구니명 이지랄해서 한참 찾앗네 카트 미친 아오
  },
});
