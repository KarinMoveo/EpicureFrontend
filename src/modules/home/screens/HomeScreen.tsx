import StartCard from "../components/SearchContainer";
import PopularRestaurant from "../components/PopularRestaurants";
import SignatureDish from '../components/SignatureDishes';
import IconsMeaning from "../components/IconsMeaning";


function HomeScreen() {
  return (
    <div className="home-screen-container">
      <StartCard />
      <PopularRestaurant />
      <SignatureDish />
      <IconsMeaning />
    </div>
  );
}

export default HomeScreen;
