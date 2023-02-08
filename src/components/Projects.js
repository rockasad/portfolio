import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects =[
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg1,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg2,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg3,
            }
            
          ];
  
    return (
        <section className="project" id="projects">
            <Container >
                <Row>
                    <Col>
                <TrackVisibility>
                                {({ isVisible}) => 
                                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummydn book.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id ="projects-tabs" defaultActiveKey="frist">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="frist">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab Three
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="frist">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                              <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>  
                              
                              <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>  
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}