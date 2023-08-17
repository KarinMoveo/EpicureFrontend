import mainPageImage from "../images/mainPageImage.jpeg"
import "../components/StartCard.scss";

function StartCard(){
    return(
        <div className="image-with-text-overlay">
            <img src={mainPageImage} alt="Overlayed" />
            <div className="overlay">
                <p>Epicure works with the top chef in Tel Aviv</p>
                <input className="user-search-start-page" type="text" placeholder=" 🔍 Search for restaurant cuisine, chef" />
            </div>
           
        </div>
    );
}

export default StartCard;