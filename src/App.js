import React from "react";
import "./css/reset.css";
import "./App.css";
import data from "./data.json";
import Section from "./components/Section";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header logo="/Logo_Netflix.png"></Header>
      {data.map(element => {
        return <Section element={element}></Section>;
      })}
    </div>
  );
}

export default App;
