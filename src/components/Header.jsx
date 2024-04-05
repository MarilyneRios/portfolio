import { Navbar, Nav, Container } from "react-bootstrap";
import { IoHomeOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineContactMail } from "react-icons/md";
import Logo from "../assets/logoDevPink.png";
import "../App.css";
import { Link } from 'react-scroll';

const Header = () => {


  return (
    <header>
      <Navbar className="navbar-gradient" variant="dark" expand="lg" collapseOnSelect fixed="top">
        <Container fluid>
        <Navbar.Brand href="#" style={{maxWidth: "50px"}} >
          <img src={Logo} className="rounded-circle img-fluid Logo border" alt="Logo"/>
        </Navbar.Brand>
        
          <Navbar.Brand href="#" className="mx-3 fs-3">Marilyne Rios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="mx-3">

              <Link 
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar-link"
                >
                <IoHomeOutline /> Accueil
              </Link>
              <Link 
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar-link"
              >
                <FaAward /> Compétences
              </Link>

              <Link 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar-link"
              >
                <GoProjectRoadmap /> Projets
              </Link>

              <Link 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar-link"
              >
                <MdOutlineContactMail /> Contact
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
