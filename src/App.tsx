import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import RootContainer from "./components/rootContainer/RootContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
        <p>Family Tree Code Test Problem</p>
      </header>
      <RootContainer />
    </div>
  );
}

export default App;
