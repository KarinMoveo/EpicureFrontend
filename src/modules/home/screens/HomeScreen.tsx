import SearchContainer from "../components/SearchContainer";
import PopularRestaurantsContainer from "../components/PopularRestaurantsContainer";
import SignatureDishesContainer from '../components/SignatureDishesContainer';
import IconsMeaningContainer from "../components/IconsMeaningContainer";
import ChefOfTheWeekContainer from "../components/ChefOfTheWeekContainer";
import About from "../components/About";
import Footer from "../components/Footer";
import yossiShitritChef from "../assets/yossiShitritChef.png"

function HomeScreen() {
  return (
    <div className="home-screen-container">
      <SearchContainer />
      <PopularRestaurantsContainer />
      <SignatureDishesContainer />
      <IconsMeaningContainer />
      <ChefOfTheWeekContainer 
        chefOfTheWeekImage={yossiShitritChef}
        chefOfTheWeekName="Yossi Shitrit"
        chefOfTheWeekSummary="Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades,
         including running the kitchen in his first restaurant, the fondly-remembered Violet,
         located in Moshav Udim.
         Shitrit's creativity and culinary acumen born of long experience are expressed in the every detail of each and every dish."
      />
      <About />
      <Footer />
    </div>
  );
}

export default HomeScreen;
