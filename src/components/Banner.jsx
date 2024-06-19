import { useState, useEffect } from "react"
import { LinkContainer } from "react-router-bootstrap";
import { Container,Row, Col, Button } from "react-bootstrap"
import { FaArrowCircleRight } from "react-icons/fa"
import Avatar from "../assets/avatar.png"
import Moi from "../assets/moi.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const toRotate = ["m'appelle Marilyne Rios","suis une déveppeuse web. ","suis une déveppeuse React."];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState (200 - Math.random() * 100);
    const period = 500;
    const delay = 1000;

    useEffect (() => {
        let ticker = setInterval(()=>{
            tick();
        }, delta)
        return ()=> {clearInterval(ticker)}
    }, [text, delta]) 

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDelete ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
       if (!isDelete && text === fullText) { 
            setIsDelete(true);
            setDelta(period);
        } else if (isDelete && text === '') {
            setIsDelete(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
   
    }

  return (
    <section className="banner" id="home">
        <Container >
            <Row >
                <Col  xs={12} md={6} xl={7} className="d-flex flex-column justify-content-center  align-items-center">
                    <span className="mt-5 tagline">
                        Bienvenue sur mon portfolio
                    </span>
                    <h1 className="typeWriter">{`Bonjour, je `}
                        <span className="wrap">
                            {text}
                        </span>
                    </h1>
                    <p>
                        Le développement web et d&apos;applications est pour moi une expérience gratifiante. 
                        C&apos;est l&apos;art de résoudre des problèmes, de penser de manière créative, 
                        et de donner vie à mes idées.
                    </p>
                    <p>
                        De plus, il y a toujours de nouvelles compétences à acquérir, de nouveaux défis à relever,
                        ce qui rend ce métier stimulant et passionnant.
                    </p>
                    <p>
                        Vous pouvez consulter mon github et mon profil linkedin.
                    </p>
                    <div>
                         <Link
                            to="https://github.com/MarilyneRios"
                            target="_blank"
                            className="link-underline-light link-primary  mx-4"
                            >
                            <FaGithub size={50}/>
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/marilyne-rios-59a13015b"
                            target="_blank"
                            className="link-underline-light link-primary "
                            >
                            <TiSocialLinkedinCircular  size={70}/>
                        </Link>
                    </div>
                    <LinkContainer to="/contact">
                        <Button className="my-3">Me contacter  <FaArrowCircleRight size={25}/></Button>
                    </LinkContainer>

     
                   
                </Col>
                <Col xs={12} md={6} xl={5} className="d-flex  justify-content-center  align-items-center">
                        <img src={Moi} alt="mon avatar"  className="m-5 avatar"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner