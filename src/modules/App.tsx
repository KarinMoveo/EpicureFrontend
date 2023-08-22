import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./header/components/Header";
import Home from './home/screens/HomeScreen';
import Restaurants from './restaurants/components/Restaurants';
import Chefs from './chefs/components/Chefs';
import Footer from "../modules/footer/components/Footer";
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
      <Footer />
    </Router>
  );
}

export default App;
