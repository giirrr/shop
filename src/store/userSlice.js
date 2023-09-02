import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    //array/object의 경우 return없이 직접 수정해도 state 변경됨
    changeName(state) {
      state.name = "park";
    },
    increase(state, action) {
      state.age += action.payload;
    }, //화물 보낸거 출력 문법
    //여기에 있는 state변경함수들을 다 action이라고 함 보통 a 말고 action이라고 작명 많이 함
  },
});
//결론 state가 object/array면 return없이 직접 수정해도 됨 가능
//그래서 문자하나만 필요해도 'kim'일부러 {name : 'kim'}안에 담기도 함 이래야 수정이 편리하니까

export let { changeName, increase } = user.actions;
//state 변경함수들 남음
export default user;
