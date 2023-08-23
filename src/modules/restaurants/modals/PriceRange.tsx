import React from "react";
import ReactDOM from "react-dom";
import "../modals/PriceRange.scss";


function PriceRange() {
  const portalElement = document.getElementById("portal");

  if (!portalElement) {
    // Handle the case when the portal element is not found
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className="price-range-modal">
        <div className="price-range-content">
            <p>Price Range Selected</p>
            <input className="user-input-price-range" type="range" min="12" max="357" step="1"/>
        
        </div>
      </div>
    </>,
    portalElement
  );
}

export default PriceRange;