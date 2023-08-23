import ReactDOM from "react-dom";
import "../modals/Distance.scss";


function Distance() {
  const portalElement = document.getElementById("portal");

  if (!portalElement) {
    // Handle the case when the portal element is not found
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className="distance-modal">
        <div className="distance-content">
            <p>My location</p>
            <input className="user-input-distance-range" type="range" min="0" max="4" step="1"/>
        </div>
      </div>
    </>,
    portalElement
  );
}

export default Distance;