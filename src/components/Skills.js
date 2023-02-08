import { Container, Col, Row } from "react-bootstrap";
import meter1 from "../assets/img/React-icon.png";
import meter2 from "../assets/img/react-native-1.svg";
import meter3 from "../assets/img/Arduino_Logo.png";
import meter4 from "../assets/img/C++_Logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>มีทักษะและพื้นฐานการเขียนโปรแกรมreact,react Native,ArduinoและC++</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5></h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
