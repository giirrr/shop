import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import data from "./data.js";
import Detail from "./pages/detail.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// import { Button, Nav, Navbar, Container } from "react-bootstrap";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  let [loaddata, setLoaddata] = useState("");

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark" className="shop_navbar">
        <Container>
          <Navbar.Brand href="#home" className="shop_navbarNavbar">
            Shopping Pro
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map(function (a, i) {
                    return <Item shoes={shoes[i]} i={i} />;
                  })}
                </div>
              </div>
              {/* ajax 2 응용문제 보고 참고 */}
              {/* https://codingapple.com/forums/topic/react-%ec%84%9c%eb%b2%84%ed%86%b5%ec%8b%9d-ajax2-%ec%9d%91%ec%9a%a9%eb%ac%b8%ec%a0%9c/ */}
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      console.log(결과.data);
                      console.log(shoes);
                      //... = 괄호 벗겨주는 문법 [{}{}{} {}{}{}]
                      let copy = [...shoes, ...결과.data];
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log("실패함ㅅㄱ ");
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route path="/detail/:iid" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>맴버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route
          path="*"
          element={<div>아이코 잘못눌렀네 없는 페이지에요</div>}
        />
      </Routes>
    </div>
  );
}
function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
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

export default App;
