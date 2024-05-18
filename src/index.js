import React from "react";
import "./CssFiles/index.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPg from "./components/Landingpage"; 
import Explore from "./components/Explore"; 
import Form from "./components/Form";  
import Page404 from "./components/Page404"; 
import QuizzApp from "./components/quizz"; 

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPg />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/form" element={<Form />} />
      <Route path="/quizz" element={<QuizzApp />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
