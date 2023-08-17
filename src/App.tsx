import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import StartCard from "./components/StartCard";
import PopularRestaurant from "./components/PopularRestaurant";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <StartCard/>
      <PopularRestaurant/>
    </div>
  );
}

export default App;
