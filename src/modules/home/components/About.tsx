import epicureLogo from "../assets/images/others/epicureLogo.svg";
import googlePlay from "../assets/images/others/googlePlay.svg";
import appStore from "../assets/images/others/appStore.svg";

import "../components/About.scss";

function About(){
    return(
        <div className="about-container">
            <div className="about-container-title-content-images">
                <div className="about-text-content">
                    <p className="about-us-title">ABOUT US:</p>
                    <p className="about-us-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="app-downloads-images">
                    <img src={googlePlay} alt="Get It On Google Play" className="about-image"/>
                    <img src={appStore} alt="Download On The App Store" className="about-image"/>
                </div>
            </div>
            <img src={epicureLogo} alt="Epicure logo" className="about-image logo-image"/>
        </div>
    );
}

export default About;