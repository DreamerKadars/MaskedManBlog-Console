import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import "@arco-design/web-react/dist/css/arco.css";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from "./Blog/MainPage"

const App2 = props => {
  const [n, setN] = React.useState(0);  //useState()返回一个数组，第一个是读，第二个是写
  const addN = () => {
    setN(n + 1);
  }
  return (
    <div>{n}
      <button onclick={addN}>+1</button></div>
  )
}

function APP() {
  let mashuo=React.createElement("h1", {title:"mashuo"},"hello react")
  return <Router>
  <Routes>
      <Route path="/" element={mashuo} />
      <Route path="/mashuo" element={<App2 />}/>
     
      {/* <Route path="/about" component={MainPage} />
      <Route path="/topics" component={MainPage} /> */}
    </Routes>
  </Router>
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<APP />);