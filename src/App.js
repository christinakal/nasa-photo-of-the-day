import React from "react";
import "./App.css";
import PictureCard from "./components/PictureCard";

function App() {
  return (
    <div className="App">
      <div>
        <h1>NASA</h1>
        <h3>Image of the Day</h3>
        <PictureCard/>
      </div>
    </div> 
  );
}

export default App;
