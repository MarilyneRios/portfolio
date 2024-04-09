import Projects from "../components/Projects";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const HomeScreen = () => {

  return (
    <div>
      <Banner />
      <div id="skills">
        <Skills />
      </div>
      
      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default HomeScreen;
