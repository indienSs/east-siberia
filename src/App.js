import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";


const App = () => {
  const places = data.map(place => (
    <Card 
      key={place.id}
      {...place}
    />
  ))
  return (
    <div className="app">
      <Header />
      {places}
    </div>
  )
};

export default App;
