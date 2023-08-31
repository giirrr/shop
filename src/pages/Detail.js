import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 3000);
    //useDffect가 실행되기 전에 실행되는 return~~
    console.log(2);
    return () => {
      console.log(1);
      //타이머 제거해주는 함수
      clearTimeout(a);
    };
  }, []);

  let [count, setCount] = useState(0);

  let { iid } = useParams();
  const 상품 = props.shoes.find((e) => e.id == iid);

  return (
    <div className="container">
      {/* <div에 함수 씌울려면 {ㄴㅁㄹㅁ ===true?(<div></div>):null} 이런식으로 작성해야함 */}
      {alert === true ? (
        <div className="alert alert-warning">3초 이내 구매시 할인</div>
      ) : null}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[상품.id].title}</h4>
          <p>{props.shoes[상품.id].content}</p>
          <p>{상품.content}</p>
          <p>{상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
