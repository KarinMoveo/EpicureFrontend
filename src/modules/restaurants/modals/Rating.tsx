import React from "react";
import ReactDOM from "react-dom";
import "../modals/Rating.scss";
import oneStar from "../assets/images/rating/oneStar.svg";
import twoStars from "../assets/images/rating/twoStars.svg";
import threeStars from "../assets/images/rating/threeStars.svg";
import fourStars from "../assets/images/rating/fourStars.svg";
import fiveStars from "../assets/images/rating/fiveStars.svg";


const ratingImages = [
  oneStar,
  twoStars,
  threeStars,
  fourStars,
  fiveStars
];

function Rating() {
  const portalElement = document.getElementById("portal");

  if (!portalElement) {
    // Handle the case when the portal element is not found
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className="rating-modal">
        <div className="rating-content">
          {ratingImages.map((image, index) => (
            <div className="checkbox-container" key={index}>
              <input type="checkbox" id={`checkbox${index + 1}`} />
              <label htmlFor={`checkbox${index + 1}`}>
                <img className="checkbox-image" src={image} alt={`Image ${index + 1}`} />
              </label>
            </div>
          ))}
        </div>
      </div>
    </>,
    portalElement
  );
}

export default Rating;
