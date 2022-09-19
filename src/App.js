import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "../src/pages/main-page/MainPage";
import LevelTest from "./pages/main-page/LevelTest";
import Fee from "./pages/main-page/Fee";
import Introduction from "./pages/main-page/Introduction";
import Courses from "./pages/main-page/Courses";
import Calendar from "./pages/main-page/Calendar";
import Store from "./pages/main-page/Store";
import OnlineServices from "./pages/main-page/OnlineServices";
import TTC from "./pages/main-page/TTC";
import Navbar from "./components/Layout/Navbar";
import Footer from "../src/components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fee" element={<Fee />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/level-test" element={<LevelTest />} />
        <Route path="/online-services" element={<OnlineServices />} />
        <Route path="/store" element={<Store />} />
        <Route path="/ttc" element={<TTC />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
