import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let RedInput = styled.input`
  border-color: #f55154;
  border-width: 5px;
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [alarm, setAlarm] = useState(true);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  let [count, setCount] = useState(0);

  let { iid } = useParams();
  const 상품 = props.shoes.find((e) => e.id == iid);

  return (
    <div className="container">
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
          <RedInput
            placeholder="Search For.."
            onChange={(e) => {
              setAlarm(() => {
                e.target.value !== typeof int ? (
                  <alert>그러지마세요</alert>
                ) : null;
              });
            }}
          ></RedInput>
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
