import { useEffect, useState } from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/github-mark.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import Login from '../Login'
import { Link } from "react-router-dom";

export const NavBar = () =>{
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onProjects =()=>{
        if(window.scrollY > 2000){
            setActiveLink('projects');
        } 
    }
    window.addEventListener("scroll", onProjects);

    return()=> window.removeEventListener("scroll",onProjects);
}, [activeLink])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('contact')}>Contacts</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://github.com/rockasad" target="_blank"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.facebook.com/SurachatRK/" target="_blank">
                    <img src={navIcon2} alt="" />
                    </a>
                    <a href="https://www.instagram.com/surachatrueankaew/" target="_blank">
                    <img src={navIcon3} alt="" />
                    </a>
                </div>
                <Link className="app-header-item" to="LoginForm"><button className="vvd" ><span>เข้าสู่ระบบ</span></button></Link>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }