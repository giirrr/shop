import { Table } from "react-bootstrap";

function Cart() {
  return (
    <div>
      <Table>
        <thead>
          {/* 약간 표제목 느낌 */}
          <tr>
            {/* <tr> 요거 넣으면 가로줄 생김 */}
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            {/* <th>,<td>넣으면 열 하나 생김 */}
          </tr>
        </thead>
        <tbody>
          {/* 본 내용 */}
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
