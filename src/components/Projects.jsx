import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ProjectCard from '../components/ProjectCard';
import Astuces from '../assets/astucesdapprentissage.png';
import basicAuthB from '../assets/auth-react-bootstrap.png';
import basicAuth from '../assets/basicAuth.png';

import moviesQuiz from '../assets/moviesQuiz.png';

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
                              <p>Projet 1</p>                              
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second"><p>Projet 2</p> </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Projet 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Projet 4</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12} className="my-2 d-flex justify-content-center">
                    <Tab.Content >
                      <Tab.Pane eventKey="first" className="project-p">   {
                        
                        <ProjectCard
                          className="ProjectCard"
                          title="HTML/CSS/JS"
                          description="Astuces d'apprentissage, conseils pédagogiques à destination des collègiens"
                          image={Astuces}
                          site="https://astucesdapprentissage.netlify.app/"
                          gitHub="https://github.com/MarilyneRios/Astuces-D-Apprentissage"
                        />
                      
                        }</Tab.Pane>

                      <Tab.Pane eventKey="second" className="project-p ">
                      <ProjectCard
                          title="Basic MERN authentification Tailwind"
                          description="Un starter pour une APP Web full-stack MERN avec authentification."
                          image={basicAuth}
                          site="https://basic-auth-caqe.onrender.com/"
                          gitHub="https://github.com/MarilyneRios/basic-auth"
                        />
                      </Tab.Pane>

                      <Tab.Pane eventKey="third" className="project-p ">     <ProjectCard
                          title="Basic MERN authentification Bootstrap"
                          description="Un starter pour une APP Web full-stack MERN avec authentification"
                          image={basicAuthB}
                          site="https://auth-react-bootstrap.onrender.com"
                          gitHub="https://github.com/MarilyneRios/auth-React-Bootstrap/tree/main"
                        /></Tab.Pane>

                      <Tab.Pane eventKey="fourth" className="project-p ">     <ProjectCard
                          title="React avec JS"
                          description="Quiz, exercice d'apprentissage de React + Bootstrap 5"
                          image={moviesQuiz}
                          site="https://movies-quiz.netlify.app/"
                          gitHub="https://github.com/MarilyneRios/moviesQuiz"
                        /></Tab.Pane>

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
