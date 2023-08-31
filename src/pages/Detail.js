import { useParams } from "react-router-dom";

function Detail(props) {
  let { iid } = useParams();
  const detail = props.shoes.find((e) => e.id == iid);
  console.log(iid);
  console.log(detail);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[detail.id].title}</h4>
          <p>{props.shoes[detail.id].content}</p>
          <p>{detail.content}</p>
          <p>{detail.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
