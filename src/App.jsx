// App.jsx
import React from "react";
import CardGenerator from "src/components/CardGenerator.jsx";
import tesla_data from "./data/data.js";  
import Navbar from "./components/Navbar.jsx";

import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Tesla Car Showcase</h1>
      <CardGenerator dataArray={tesla_data} />
    </div>
  );
};

export default App;
