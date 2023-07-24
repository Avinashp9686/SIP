import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Menu from "./components/menu"
import Contact from "./components/contact"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Login from "./components/login"
import Signup from "./components/signup"

function App() {
  return (
         <>
         {/* <h1 className="bg-info">React Class</h1>
         <p>This is a Paragrapgh</p><hr/> */}

         <BrowserRouter>
         <Navbar/>
         <Routes>

           <Route path="/" element ={<Home />} />
           <Route path="/about" element ={<About />} />
           <Route path="/menu" element ={<Menu />} />
           <Route path="/contact" element ={<Contact />} />
           <Route path="/login" element ={<Login/>} />
           <Route path="/signup" element ={<Signup />} />
          </Routes>
          </BrowserRouter>
         </>
  );
}

export default App;
