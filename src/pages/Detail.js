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

  //   useEffect(() => {
  // let a= setTimeout(() => {
  //       setFade("end");
  //     }, 10);
  //     return () => {
  //       clearTimeout(a)
  //       setFade("");
  //     };
  //   }, [탭]);
  //타이머를 삭제하고 싶으면
  //이렇게 하면 타이머 삭제 가능
  return (
    //변수를 문자 html중간에 넣고 싶다면 <div className="start">
    //중괄호 먼저 감싸고  className ={'start'}
    //넣을 변수가 중간에 들어가면 ''+fade+''한쪽이면 ''+fade}로

    //혹은 문자 중간에 변수를 넣을 때 calssName={`문자${변수}`}
    //Name={`start ${fade}`}

    //주의 클래스명들은 띄어쓰기가 있어야 여러개 중복 가능
    //ㄴ 당연히 안 띄우고 이어지면 하나의 새로운 클래스로 인식하니까.
    //ex) {"start "}
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
  // return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭];
  //이렇게 애니메이션 주면 내용0,1,2에 다 줘야하니 너무 귀찮음.
  //그래서 그냥 안에 내용물을 다 div로 감싸줌  return <div>{[<div~~어쩌고]}</div>
  //return 오른쪽 html이 쫌 길다 하면 소괄호로 감싸주는게 보다 안정적임
  // => return (<div className~~~~</div>)
}

// useEffect(()=>{
//   setFade('end')
// },[탭])
//useEffect 실행하기 전에 특정코드 실행하고 싶으면
//useEffect는 cleanup function 사용가능 = useEffect실행하기전에 특정코드 실행하고 싶으면
// useEffect(()=>{
//   setFade('end')
//   return ()=>{

//   }
// },[탭])
//함수칸 안에 return ()=>{
// 이 안에 작성해주면 됨
//}

//리액트 18버전 이상에서는 automatic batching 기능이 생김
//state변경함수들이 근처에 있다 -> 그러면 이것들을 다 합쳐서 state를 딱 한번만 변경을 해줌
//정확히는 state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링
export default Detail;
