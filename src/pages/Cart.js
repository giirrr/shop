import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  console.log(state.바구니용);
  return (
    <div>
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
            <tr>
              <td>{state.바구니용[i].id}</td>
              <td>{state.바구니용[i].name}</td>
              <td>{state.바구니용[i].count}</td>
              <td>웅앵</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
