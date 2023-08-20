import mainPageImage from "../assets/mainPageImage.png";
import searchIcon from "../assets/searchIcon.svg";
import "../components/SearchContainer.scss";

function SearchContainer(){
    return(
        <div className="search-container">
            <img src={mainPageImage} alt="Overlayed" />
            <div className="overlay">
                <p>Epicure works with the top chef restaurants in Tel Aviv</p>
                <div className="search-input-container">
                    <img className="search-icon" src={searchIcon} alt="Search Icon" />
                    <input className="user-search-start-page" type="text" placeholder="Search for restaurant cuisine, chef" />
                </div>
            </div>
           
        </div>
    );
}

export default SearchContainer;