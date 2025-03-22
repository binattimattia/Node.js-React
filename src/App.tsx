import './App.css'
import {NavBar_avanzata} from "./components/Navbar.tsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
    return (
    <>
   <Router>
   <NavBar_avanzata />
   <div>
       <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
       </ Routes>
    </div>
    </Router>
    </>
  )
}

export default App
