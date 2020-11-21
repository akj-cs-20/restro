import "./style.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <Header />
    </div>
  );
};
export default App;
