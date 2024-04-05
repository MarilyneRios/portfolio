# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# packages :
npm install react-bootstrap bootstrap
npm install react-router-bootstrap
npm install react-router-dom
npm i react-multi-carousel

# npm install react-scroll

**1/ Dans Hearder :**

    import { Link } from 'react-scroll';

    <Link 
    activeClass="active"
    to="skills"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
    onClick={() => onUpdateActiveLink('skills')}
    >
    <FaAward /> Compétences
    </Link>

**2/ Dans le HomeScreen :**
    <div id="skills">
    <Skills />
    </div>

# Pour le formulaire email :
 1/ emailJS

 https://www.emailjs.com/
 https://www.emailjs.com/docs/examples/reactjs/

tuto
 https://www.youtube.com/watch?v=bMq2riFCF90


 **npm install --save @emailjs/browser**

