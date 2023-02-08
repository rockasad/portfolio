import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/hardware.jpg";
import projImg2 from "../assets/img/dashboard.jpg";
import projImg3 from "../assets/img/datalog.jpg";
import projImg4 from "../assets/img/timelog.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects =[
            {
              title: "หน้าตา dashboard",
              description: "สามารถดูค่าpmนะเวลานี้",
              imgUrl: projImg2,
            },
            {
              title: "หน้าตา datalog",
              description: "สามารถดูค่าpmของแต่ละวัน",
              imgUrl: projImg3,
            },
            {
              title: "หน้าตา timelog",
              description: "สามารถดูค่าpmของแต่ละ ชม.",
              imgUrl: projImg4,
            },
            {
                title: "ตัวhardware",
                description: "Design & Development",
                imgUrl: projImg1,
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
                    <p>โปรเจคที่เคยทำมาก่อน</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id ="projects-tabs" defaultActiveKey="frist">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="frist">Tab One</Nav.Link>
                            <p>เครื่องวัด PM 1,2.5,10 พร้อมsofewareระบบปฏิบัติการandroid</p>
                            </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            <p>                                                    </p>
                            </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            <p>                                                     </p>
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
                              <Tab.Pane eventKey="second">โปรเจคถัดไป</Tab.Pane>  
                              
                              <Tab.Pane eventKey="third">โปรเจคถัดไป</Tab.Pane>  
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}