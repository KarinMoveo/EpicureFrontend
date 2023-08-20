import './App.scss';
import HomeScreen from './home/screens/HomeScreen';
import Navbar from "./navigation/components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
     
    </div>
  );
}

export default App;
