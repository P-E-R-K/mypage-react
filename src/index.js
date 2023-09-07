import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import './App.css'
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Clock = (prop) => (
   <h1>Look at the time : {prop.time}</h1>
)

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return (
    <>
    <h1>I've rendered {count} times!</h1>
    <button onClick={() => setCount((c) => c + 1)}>Tambah</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);