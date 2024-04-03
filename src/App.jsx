import Header from "./components/Header"
import Footer from "./components/Footer"
import {Outlet} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './App.css'

function App() {


  return (
    <>
    <Header/>
    <Container className=" w-100" style={{marginTop: '5rem'}}/>
    <div className="">
     <Outlet />
    </div>
    
     <Footer />
    
    </>
  )
}

export default App
