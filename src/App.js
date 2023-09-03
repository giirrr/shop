import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import data from "./data.js";
import Detail from "./pages/detail.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// import { Button, Nav, Navbar, Container } from "react-bootstrap";
import axios from "axios";
import Cart from "./pages/Cart.js";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

//갖다 쓰고 싶으면 export 붙여놓으면 자식 파일에서 불러올 수 잇음

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();

  //진짜 개 미친듯이 개 짜증남 왜 강의는 useQuery('작명', ()=> 이래삿더니
  //useQuery(["작명"],()=> 해야 되는걸 왜 안 알려주냐고 아ㅗ
  let result = useQuery(
    ["작명"],
    () =>
      axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
        console.log("요청됨");
        return a.data;
      }),
    { staleTime: 2000 }
  );

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
            <Nav.Link
              onClick={() => {
                navigate("/Cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {/* {result.isLoading ? "로딩중" : result.data.name} */}
            {result.isLoading && "로딩중"}
            {result.error && "에러남"}
            {result.data && result.data.name}
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
        <Route path="/cart" element={<Cart />}></Route>

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
