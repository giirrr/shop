import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
import { addCount } from "./../store.js";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  //store.js로 요청을 보내주는 함수 ,
  return (
    <div>
      <h6>
        {state.user.name} {state.user.age} 의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(increase(100));
        }} //디스패치가 메세지 보내는거라면, 여기서 100은 메세지에 실어보내는 화물임
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    // dispatch(addCount(i)); //이렇게 해도 잘 작동하는데 버그 미리 잡기위해
                    dispatch(addCount(state.cart[i].id)); //버튼 옆의 id
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
