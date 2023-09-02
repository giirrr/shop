import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
import { changeCount } from "./../store.js";

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
          {state.바구니용.map((a, i) => (
            <tr key={i}>
              <td>{state.바구니용[i].id}</td>
              <td>{state.바구니용[i].name}</td>
              <td>{state.바구니용[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeCount(i));
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
