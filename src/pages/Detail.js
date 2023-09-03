import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { addItem } from "./../store.js";

let RedInput = styled.input`
  border-color: #f55154;
  border-width: 5px;
`;

function Detail(props) {
  let { iid } = useParams();
  let 상품 = props.shoes.find((e) => e.id == iid);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  let [fade2, setFade2] = useState("");

  useEffect(() => {
    let 꺼낸거 = localStorage.getItem("watched");
    //watched 라는 항목에 상품.id를 집어넣어 주세요.
    꺼낸거 = JSON.parse(꺼낸거);
    // 꺼낸거.push => 꺼낸 array에 자료를 추가할때
    // 꺼낸거.push(상품.iid);
    console.log(꺼낸거);
    // localStorage.setItem("watched", 꺼낸거); // 여기서 꺼낸거 = [0] 이렇게 되어있을 것임
    // localStorage에 꺼낸거 [0] 저장
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
    //그냥 꺼낸거 하면 깨지기 때문에 위에 형식으로 하면 JSON형식으로 잘 저장됨
  }, []);

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

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
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
            }}
          >
            주문하기
          </button>
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
      {[<div></div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
