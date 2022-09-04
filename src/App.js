import React from "react";
import Navbar from "./components/Layout/Navbar";
import MainPage from "../src/pages/main-page/MainPage";
import "./assets/styles/layout.scss";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  );
}

export default App;
