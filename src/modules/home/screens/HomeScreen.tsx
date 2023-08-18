import StartCard from "../components/SearchContainer";
import PopularRestaurant from "../components/PopularRestaurants";
import SignatureDish from '../components/SignatureDishes';


function HomeScreen() {
  return (
    <div className="home-screen-container">
      <StartCard />
      <PopularRestaurant />
      <SignatureDish />
    </div>
  );
}

export default HomeScreen;
