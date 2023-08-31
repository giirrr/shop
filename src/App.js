import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import data from "./data.js";
// import { Button, Nav, Navbar, Container } from "react-bootstrap";

function App() {
  let [shoes, setShoes] = useState(data);
  let [id, setId] = useState(0);

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark" className="shop_navbar">
        <Container>
          <Navbar.Brand href="#home" className="shop_navbarNavbar">
            Shopping Pro
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map(function (a, i) {
            return (
              <div
                className="col-md-4"
                //함수를 어디에 만들지를 모르겠음 클릭 함수도 아니고.
                onClick={() => {
                  setId(i);
                }}
              >
                <img
                  // 그리고 사진은 어떻게 다르게 표시할지???
                  src="https://codingapple1.github.io/shop/shoes3.jpg"
                  width="80%"
                />
                <h4>{shoes[i].title}</h4>
                <p>{shoes[i].price} 원</p>
              </div>
            );
          })}
          {/* 컴포넌트를 map으로 어케 하는지.. */}
          <Item shoes={shoes} id={id} />
          <Item shoes={shoes} id={1} />
          <Item shoes={shoes} id={2} />
        </div>
      </div>
    </div>
  );
}
function Item(props) {
  {
    console.log(props.id);
    {
      return (
        <div className="col-md-4" key={30}>
          <img
            src="https://codingapple1.github.io/shop/shoes3.jpg"
            width="80%"
          />
          <h4>{props.shoes[props.id].title}</h4>
          <p>{props.shoes[props.id].price} 원</p>
        </div>
      );
    }
  }
}

export default App;
