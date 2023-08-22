import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/screens/HomeScreen';
import Header from "./header/components/Header";
import Restaurants from './restaurants/components/Restaurants';
import Chefs from './chefs/components/Chefs';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/restaurants" Component={Restaurants} />
        <Route path="/chefs" Component={Chefs} />
      </Routes>
    </Router>
  );
}

export default App;
