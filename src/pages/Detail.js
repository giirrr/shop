import { useParams } from "react-router-dom";
import styled from "styled-components";

// let YellowBtn = styled.button`
//   background: green;
//   color: white;
//   padding: 10px;
//   border: none;
// `;
let YellowBtn = styled.button`
  background: ${(props) => props.namom};
  color: ${(props) => (props.namom == "blue" ? "white" : "yellow")};
  // color: ${(e) => (e.namom == "blue" ? "white" : "yellow")};
  padding: 10px;
  border: none;
`;

let NewBtn = styled.button(YellowBtn);

let Box = styled.div`
  background: grey;
  padding: 12px;
`;

function Detail(props) {
  let { iid } = useParams();
  const 상품 = props.shoes.find((e) => e.id == iid);
  console.log(iid);
  console.log(상품);
  return (
    <div className="container">
      <Box>
        <YellowBtn namom="blue">버튼</YellowBtn>
        <YellowBtn namom="green">버튼</YellowBtn>
      </Box>
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
