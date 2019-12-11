import React from "react";
import "./App.css";
import Picture from "./components/Picture";

function App() {
  return (
    <div className="App">
      <div>
        <h1>NASA</h1>
        <h3>Image of the Day</h3>
        <Picture />
      </div>
    </div> 
  );
}

export default App;
