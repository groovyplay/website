import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { GameCard } from "./GameCard";
import projImg1 from "../assets/img/roadcraft.webp";
import projImg2 from "../assets/img/speedway.webp";
import projImg3 from "../assets/img/parkmaster.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Games = () => {

  const projects = [
    {
      title: "RoadCraft",
      description: "Draw the Bridge",
      imgUrl: projImg1,
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.RoadCraft.drawbridge"
    },
    {
      title: "SpeedWay",
      description: "Mobile Racing Game",
      imgUrl: projImg2,
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.GroovyPlay.SpeedWay"
    },
    {
      title: "Park Master",
      description: "Test your Parking Skills",
      imgUrl: projImg3,
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.groov.parkMaster"
    }
    // ,
    // {
    // title: "Park Master",
    // description: "Test your Parking Skills",
    // imgUrl: projImg3,
    // googlePlayUrl: "https://play.google.com/store/apps/details?id=com.groov.parkMaster"
    // },
    // {
    //   title: "SpeedWay",
    //   description: "Mobile Racing Game",
    //   imgUrl: projImg2,
    //   googlePlayUrl: "https://play.google.com/store/apps/details?id=com.GroovyPlay.SpeedWay"
    // },
    // {
    //   title: "RoadCraft",
    //   description: "Draw the Bridge",
    //   imgUrl: projImg1,
    //   googlePlayUrl: "https://play.google.com/store/apps/details?id=com.RoadCraft.drawbridge"
    // },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our recent Launched Games</h2>
                <p>"Enjoy the Thrill, Play Responsibly: We're committed to providing a fun and responsible gaming environment. For tips and support on keeping gaming enjoyable, use our new launched games from Google Play and iOS. store</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <GameCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
