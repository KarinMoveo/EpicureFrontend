import StartCard from "../components/SearchContainer";
import PopularRestaurant from "../components/PopularRestaurants";
import SignatureDish from '../components/SignatureDishes';
import IconsMeaning from "../components/IconsMeaning";
import WeeksChef from "../components/WeeksChef";
import YossiShitritChef from "../assets/YossiShitritChef.jpeg"

function HomeScreen() {
  return (
    <div className="home-screen-container">
      <StartCard />
      <PopularRestaurant />
      <SignatureDish />
      <IconsMeaning />
      <WeeksChef 
        chefOfTheWeekImage={YossiShitritChef}
        chefOfTheWeekName="Yossi Shitrit"
        chefOfTheWeekSummary="Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades,
         including running the kitchen in his first restaurant, the fondly-remembered Violet,
         located in Moshav Udim.
         Shitrit's creativity and culinary acumen born of long experience are expressed in the every detail of each and every dish."
      />
    </div>
  );
}

export default HomeScreen;
