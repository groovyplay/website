import meter1 from "../assets/img/gaming-icon.png";
import meter2 from "../assets/img/gaming-icon.png";
import meter3 from "../assets/img/gaming-icon.png";


export const Explore = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Explore GroovyPlay</h2>
              <p>Embark on an adventure, but remember the journey is best enjoyed responsibly. Visit our Play Wisely page for tips on keeping your gaming experience fun and balanced.</p>
              <div className="unique-card-container row">
                <div className="unique-card col-md-3 col-sm-6">
                  <div className="unique-card-inner">
                    <img className="unique-logo" src={meter1} alt="Meter 1" />
                    <h3 className="unique-heading">Exciting Bonuses and Promotions</h3>
                    <p className="unique-description">New players can take advantage of welcome bonuses, while regular players will enjoy ongoing promotions and rewards.</p>
                  </div>
                </div>
                <div className="unique-card col-md-3 col-sm-6">
                  <div className="unique-card-inner">
                    <img className="unique-logo" src={meter2} alt="Meter 2" />
                    <h3 className="unique-heading">Fair Play and Security</h3>
                    <p className="unique-description">We prioritize your safety with state-of-the-art encryption and fair play algorithms ensuring every game is secure and fair.</p>
                  </div>
                </div>
                <div className="unique-card col-md-3 col-sm-6">
                  <div className="unique-card-inner">
                    <img className="unique-logo" src={meter3} alt="Meter 3" />
                    <h3 className="unique-heading">Exclusive Content Play & Support</h3>
                    <p className="unique-description">Discover exclusive titles and content you won't find anywhere else, tailored for our PlayFlix community, Our dedicated team is here to assist you with any questions or concerns, ensuring a seamless gaming experience.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
