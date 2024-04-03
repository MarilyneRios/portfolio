import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ProjectCard from '../components/ProjectCard';
import Astuces from '../assets/astucesdapprentissage.png';
import Philo from '../assets/philosentence.png';

const Projects = () => {


  return (
    <section className="project" id="project">
      <Container className="">
        <Row className="a">
          <Col className="">
            <div className=" project-container rounded">
              <div className="text-center">
                <h2 className="project-title">Mes projets</h2>
                <p className="project-p fst-italic">
                  Voici quelques projets personnels...
                </p>
              </div>
              <Tab.Container id="left-tabs-project" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                              <p>Javascript native</p>                              
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first" className="project-p">   {
                        
                        <ProjectCard
      title="Astuces d'apprentissage"
      description="HTML, CSS et Javascritp Native"
      image={Astuces}
      site="https://astucesdapprentissage.netlify.app/"
      gitHub="https://github.com/MarilyneRios/Astuces-D-Apprentissage"
    />
                      
                        }</Tab.Pane>
                      <Tab.Pane eventKey="second" className="project-p ">Second tab content</Tab.Pane>
                      <Tab.Pane eventKey="third" className="project-p ">third tab content</Tab.Pane>

                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
