import React from "react";
import Navbar from "./components/Layout/Navbar";
import MainPage from "../src/pages/main-page/MainPage";
import Footer from "../src/components/Layout/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
