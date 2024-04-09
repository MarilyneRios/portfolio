import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { SiNetlify } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoIosGitMerge } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="skills" id="skills">
      <Container className="">
        <Row className="align-items-center">
          <Col className="">
            <div className=" skills-container rounded">
              <div className="text-center">
                <h2 className="skills-title">Mes compétences</h2>
              </div>
              <div className="d-flex flex-column justify-centent-center align-items-center">
                <h4 className="skills-h4">Langages de programmation :</h4>

                <div className="langages">
                  <div className="langage">
                    {" "}
                    <FaHtml5 size={50} style={{ color: "#F06529" }} />
                  </div>
                  <div className="langage">
                    {" "}
                    <FaCss3Alt
                      size={50}
                      style={{ color: "rgba(4, 93, 218, 0.5)" }}
                    />
                  </div>{" "}
                  <div className="langage">
                    {" "}
                    <FaBootstrap
                      size={50}
                      style={{ color: "rgba(	102, 16, 242, 0.5)" }}
                    />
                  </div>
                  <div className="langage">
                    {" "}
                    <SiJavascript size={50} style={{ color: "#FFFF00" }} />
                  </div>
                  <div className="langage">
                    {" "}
                    <SiMongoose size={90} style={{ color: "#8B0000" }} />
                  </div>
                </div>
                
              </div>
              <div className="m-3 p-3 rounded">
                <h4 className="skills-h4">
                  Outils et technologies que j&apos;utilise :
                </h4>
                {/* Media query pour cacher le carousel pour petit écran */}
                <div className="d-none d-md-block">
                  <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    <div className="slider">
                      <FaReact size={50} style={{ color: "#61DAFB" }} />
                      <p className="logo-name">React</p>
                    </div>
                    <div className="slider">
                      <TbBrandVite size={50} style={{ color: "#646CFF" }} />
                      <p className="logo-name">Vite</p>
                    </div>

                    <div className="slider">
                      <FaReact size={50} style={{ color: "#2D2D2D" }} />
                      <p className="logo-name">React Native</p>
                    </div>
                    <div className="slider">
                      <TbBrandNextjs size={50} style={{ color: "#000000" }} />
                      <p className="logo-name">Next.js</p>
                    </div>
                    <div className="slider ">
                      <SiRedux size={50} style={{ color: "#764ABC" }} />
                      <p className="logo-name">Redux</p>
                    </div>
                    <div className="slider">
                      <FaNodeJs size={50} style={{ color: "#539E43" }} />
                      <p className="logo-name">Node.js</p>
                    </div>

                    <div className="slider">
                      <SiExpress size={50} style={{ color: "#808080" }} />
                      <p className="logo-name">Express</p>
                    </div>
                    <div className="slider">
                      <SiMongodb size={50} style={{ color: "#47A248" }} />
                      <p className="logo-name">MongoDB</p>
                    </div>
                    <div className="slider">
                      <TbBrandVercel size={50} style={{ color: "#000000" }} />
                      <p className="logo-name">Vercel</p>
                    </div>
                    <div className="slider">
                      <SiNetlify size={50} style={{ color: "#00C7B7" }} />
                      <p className="logo-name">Netlify</p>
                    </div>
                    <div className="slider">
                      <IoIosGitMerge size={50} style={{ color: "#F1502F" }} />
                      <p className="logo-name">Git</p>
                    </div>
                    <div className="slider">
                      <FaGithub size={50} style={{ color: "#181717" }} />
                      <p className="logo-name">GitHub</p>
                    </div>
                  </Carousel>
              </div>
                {/* Icons  pour petit écran */}
                <div className="d-md-none d-flex  flex-wrap">
                  <div className="col-4">
                    <div className="slider">
                          <FaReact size={50} style={{ color: "#61DAFB" }} />
                          <p className="logo-name">React</p>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <TbBrandVite size={50} style={{ color: "#646CFF" }} />
                      <p className="logo-name">Vite</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <FaReact size={50} style={{ color: "#2D2D2D" }} />
                      <p className="logo-name">React Native</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <TbBrandNextjs size={50} style={{ color: "#000000" }} />
                      <p className="logo-name">Next.js</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider ">
                      <SiRedux size={50} style={{ color: "#764ABC" }} />
                      <p className="logo-name">Redux</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <FaNodeJs size={50} style={{ color: "#539E43" }} />
                      <p className="logo-name">Node.js</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <SiExpress size={50} style={{ color: "#808080" }} />
                      <p className="logo-name">Express</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <SiMongodb size={50} style={{ color: "#47A248" }} />
                      <p className="logo-name">MongoDB</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <TbBrandVercel size={50} style={{ color: "#000000" }} />
                      <p className="logo-name">Vercel</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <SiNetlify size={50} style={{ color: "#00C7B7" }} />
                      <p className="logo-name">Netlify</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <IoIosGitMerge size={50} style={{ color: "#F1502F" }} />
                      <p className="logo-name">Git</p>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="slider">
                      <FaGithub size={50} style={{ color: "#181717" }} />
                      <p className="logo-name">GitHub</p>
                    </div>
                    </div>      
                </div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
