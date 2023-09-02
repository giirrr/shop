import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import "../App.css";

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

  let [fade2, setFade2] = useState("");

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);
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
    <div className={"container start " + fade2}>
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

      <Nav variant="tabs" defaultActiveKey="link0">
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
    </div>
  );
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");
  //변수 임의로 지정, 기본값은 텍스트로 넣음
  useEffect(() => {
    //시간 미루기 0.1초 후에 코드 실행 되도록
    setTimeout(() => {
      setFade("end"); //2빠
    }, 10);
    return () => {
      setFade(""); //1빠
    };
  }, [탭]);

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
