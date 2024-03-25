import { Col } from "react-bootstrap";
import googlePlayImage from "../assets/img/googlePlay.png";
import appStoreImage from "../assets/img/appStore.png";

export const GameCard = ({ title, description, imgUrl, googlePlayUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h2>{title}</h2>
          <span>{description}</span>
          <div className="app-icons">
          <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
            <img src={googlePlayImage} alt="Google Play" />
            <img src={appStoreImage} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}
