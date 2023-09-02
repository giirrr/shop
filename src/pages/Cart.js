import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let a = useSelector((state) => {
    // return state.user;  이래 하면 state에 저장된 user 이란 state만 사용가능
    return state; //이렇게 하면 a에 저장된 state 다 가져옴

    // 중괄호랑{} return은 동시에 생략가능
    // ((state) => {return state.user})
    //   =>  여기서 ((state) => state.user);
  });
  console.log(a.바구니용);
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
          {/* a값 중복돼서 그런지 오류나서 w로 변경해줌 */}
          {/* i대신 a넣으면 개같이 오류 발생 */}
          {a.바구니용.map(function (w, i) {
            return (
              <tr>
                <td>{a.바구니용[i].id}</td>
                <td>{a.바구니용[i].name}</td>
                <td>{a.바구니용[i].count}</td>
                <td>웅앵</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
