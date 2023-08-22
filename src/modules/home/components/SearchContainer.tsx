import mainPageImage from "../assets/mainPageImage.png";
import searchIcon from "../../../shared/assets/icons/search.svg";
import "../components/SearchContainer.scss";

function SearchContainer(){
    return(
        <div className="search-container">
            <img 
                src={mainPageImage} 
                alt="Overlayed"
                className="search-background-image"
            />
            <div className="overlay">
                <p className="search-title">
                    Epicure works with the top chef restaurants in Tel Aviv
                </p>
                <div className="search-input-container">
                    <img 
                        className="search-icon" 
                        src={searchIcon} 
                        alt="Search Icon" 
                    />
                    <input 
                        className="user-search-start-page"
                        type="text" 
                        placeholder="Search for restaurant cuisine, chef" 
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchContainer;