import mainPageImage from "../assets/mainPageImage.jpeg"
import "../components/SearchContainer.scss";

function SearchContainer(){
    return(
        <div className="search-container">
            <img src={mainPageImage} alt="Overlayed" />
            <div className="overlay">
                <p>Epicure works with the top chef in Tel Aviv</p>
                <input className="user-search-start-page" type="text" placeholder=" 🔍 Search for restaurant cuisine, chef" />
            </div>
           
        </div>
    );
}

export default SearchContainer;