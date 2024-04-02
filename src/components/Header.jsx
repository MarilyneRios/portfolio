import { Navbar, Nav, Container } from "react-bootstrap";
import { IoHomeOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineContactMail } from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {

  const [activeLink, setActiveLink] = useState("home");
 
const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}

  return (
    <header>
      <Navbar className="navbar-gradient" variant="dark" expand="lg" collapseOnSelect fixed="top">
        <Container fluid>
        <img src={Logo} className="rounded img-fluid" style={{maxWidth: "50px"}} alt="Logo"/>
          <Navbar.Brand className="mx-3 fs-3">Marilyne Rios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="mx-3">
              <LinkContainer to="/">
                <Nav.Link 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}>
                  <IoHomeOutline /> Accueil
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/skills">
                <Nav.Link 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}>
                  <FaAward /> Compétences
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}>
                  <GoProjectRoadmap /> Projets
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link 
                className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('contact')}>
                  <MdOutlineContactMail /> Contact
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
