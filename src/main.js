import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
function Main() {
  let [shoes, setShoes] = useState(data);
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
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map(function (a, i) {
            return <Item shoes={shoes[i]} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <div className="col-md-4" key={30}>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price} 원</p>
    </div>
  );
}

export default Main;
