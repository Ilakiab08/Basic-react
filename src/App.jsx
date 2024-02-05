import React from "react";
import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";

import "./src/index.css"; 

function App() {
  return (
    <>
      <Navbar />
     
      <div className="Card">
            <Card 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Card
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Card
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Card
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    </>
  );
}

export default App;
