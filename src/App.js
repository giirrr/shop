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
            //i는 0,1,2 니까
            // return <Item shoes={shoes[i]} i={i + 1} />;  //요래
            return <Item shoes={shoes[i]} i={i} />; //요래
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
        // src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}//요래 하거나
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        } //요래 하거나
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price} 원</p>
    </div>
  );
}

export default App;
