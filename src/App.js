import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import data from "./data.js";
import Detail from "./detail.js";
import Main from "./main.js";
import { Routes, Route, Link } from "react-router-dom";
// import { Button, Nav, Navbar, Container } from "react-bootstrap";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
