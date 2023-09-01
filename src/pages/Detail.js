import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

let RedInput = styled.input`
  border-color: #f55154;
  border-width: 5px;
`;

function Detail(props) {
  let { iid } = useParams();
  const 상품 = props.shoes.find((e) => e.id == iid);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  // 상태는 내용0,1,2 세개가 있으니 세가지를 표현할 수 있는 숫자를 초기값으로

  // useEffect(() => {
  //   let a = setTimeout(() => {
  //     setAlert(false);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(a);
  //   };
  // }, []);
  //원래 위에 코드 였는데 창 안 사라지게 그냥 냅둠
  useEffect(() => {
    let a = setTimeout(() => {}, 3000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">3초 이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <RedInput placeholder="Search For.." onChange={setAlert}></RedInput>
          <h4 className="pt-5">{props.shoes[상품.id].title}</h4>
          <p>{props.shoes[상품.id].content}</p>
          <p>{상품.content}</p>
          <p>{상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      {/* bootstrap에서 코드 가져올 때 원본 코드랑 조금 수정한 코드 차이 찍어보기 */}
      {/* https://react-bootstrap.netlify.app/docs/components/navs/#nav
      5번쨰 active Option2 disabled 요거 원본 코드 */}
      <Nav variant="tabs" defaultActiveKey="link0">
        {/* defaultActiveKey 기본으로 눌려있을 버튼 */}
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            Option0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
      {/* {탭 == 0 ? <div>내용0</div> : null}
      {탭 == 1 ? <div>내용1</div> : null}
      {탭 == 2 ? <div>내용2</div> : null} */}
    </div>
  );
}
//html 안에서는 if 조건문 만들 수 없어서 이렇게 아예 밖에서는 자유롭게 사용가능
// if (탭 == 0) {
//   <div>내용0</div>;
// } else if (탭 == 1) {
//   <div>내용1</div>;
// } else if (탭 == 1) {
//   <div>내용2</div>;
// }
//이렇게만 작성하면 바로 오류나니까 이걸 컴포넌트 안에 작성해야함.

// function TabContent({ 탭 }) {
//   if (탭 == 0) {
//     return <div>내용0</div>;
//   } else if (탭 == 1) {
//     return <div>내용1</div>;
//   } else if (탭 == 2) {
//     return <div>내용2</div>;
//   } else {
//     return null;
//   }
//팁 1 props. 으로 불러와서 쓰기 귀찮으면 {탭}으로 불러와서 사용
//팁 1-1 props가 여러개면 {탭, props2} porps2는 이름 아무거나 그냥 기본 이름 넣은거임 꼭 저거X

//팁 2 function안에 if없이
function TabContent({ 탭 }) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭];
}
// ->[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][0] 이면 첫번쨰 내용0
// ->[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][1] 이면 두번째 내용1
// ->[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][2] 이면 세번째 내용2 나옴

// if (props.탭 == 0) {
//   return <div>내용0</div>;
// } else if (props.탭 == 1) {
//   return <div>내용1</div>;
// } else if (props.탭 == 2) {
//   return <div>내용2</div>;
// } else {
//   return null;
// }

// if (props.탭 == 0) {
//   return <div>내용0</div>;
// }
// if (props.탭 == 1) {
//   return <div>내용1</div>;
// }
// if (props.탭 == 2) {
//   return <div>내용2</div>;
// }    이렇게 해도 위에 코드랑 같은 결과 도출

//여기서 컴포넌트는 return이 없으면 제기능을 못하기 때문에 if문 쓰고 return 다 붙여줘야함
export default Detail;
