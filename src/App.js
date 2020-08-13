import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
