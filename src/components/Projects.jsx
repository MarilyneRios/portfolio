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
  
              </div>
              <Tab.Container id="left-tabs-project" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="justify-content-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                              <p>Javascript native</p>                              
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second"><p>Javascript native</p> </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12} className="my-2 d-flex justify-content-center">
                    <Tab.Content >
                      <Tab.Pane eventKey="first" className="project-p">   {
                        
                        <ProjectCard
                          title="Astuces d'apprentissage"
                          description="Des conseils pédagogiques à destination des collègiens"
                          image={Astuces}
                          site="https://astucesdapprentissage.netlify.app/"
                          gitHub="https://github.com/MarilyneRios/Astuces-D-Apprentissage"
                        />
                      
                        }</Tab.Pane>
                      <Tab.Pane eventKey="second" className="project-p ">
                      <ProjectCard
                          title="Philo-Sentence"
                          description="Lire des phrases philosophiques aléatoires"
                          image={Philo}
                          site="https://philosentence.netlify.app/"
                          gitHub="https://github.com/MarilyneRios/philoSentence.git"
                        />
                      </Tab.Pane>
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
