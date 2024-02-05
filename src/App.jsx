import React from "react";
import CardGenerator from './Cardgenerator';
import tesla_data from './data/tesla_data'; 
import Navbar from "./components/Navbar.jsx";

import "./index.css";


const App = () => {
  return (
    <div>
      <Navbar/>
      <h1>Tesla Car Showcase</h1>
      <CardGenerator dataArray={tesla_data} />
    </div>
  );
};

export default App;