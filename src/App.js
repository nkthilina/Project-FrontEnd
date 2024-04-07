import "./App.css";
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/home" element={<HomePage />}/>
        <Route  path="/service" element={<ServicePage />}/>
        <Route  path="/about" element={<AboutPage />}/>
        <Route  path="/contact" element={<ContactPage />}/>
        <Route  path="/career" element={<CareerPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

