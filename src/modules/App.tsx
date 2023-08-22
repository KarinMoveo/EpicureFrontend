import HomeScreen from './home/screens/HomeScreen';
import Header from "./header/components/Header";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen />
    </div>
  );
}

export default App;
