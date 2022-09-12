import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "../src/pages/main-page/MainPage";
import LevelTest from "./pages/main-page/LevetTest";
import Navbar from "./components/Layout/Navbar";
import Footer from "../src/components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<LevelTest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
