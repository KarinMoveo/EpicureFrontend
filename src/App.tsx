import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import StartCard from "./components/StartCard";
import PopularRestaurant from "./components/PopularRestaurant";
import SignatureDish from './components/SignatureDish';


function App() {
  return (
    <div className="App">
      <Navbar />
      <StartCard />
      <PopularRestaurant />
      <SignatureDish />
    </div>
  );
}

export default App;
