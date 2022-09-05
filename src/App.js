import React from "react";
import Navbar from "./components/Layout/Navbar";
import MainPage from "../src/pages/main-page/MainPage";
import "./assets/styles/layout.scss";
import Footer from "../src/components/Layout/Footer";

function App() {
  return (
    <div style={{ zoom: "90%" }}>
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
