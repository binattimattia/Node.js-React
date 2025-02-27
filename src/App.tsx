import './App.css'
import Title from "./components/Title.tsx";
import Buttons from "./components/Buttons.tsx";
import {NavBar_base, NavBar_avanzata} from "./components/Navbar.tsx";

function App() {
    return (
    <>
        <div><NavBar_avanzata></NavBar_avanzata></div>
        <div><NavBar_base></NavBar_base></div>
      <div>
        <Title />
      </div>
        <div><Buttons></Buttons></div>
    </>
  )
}

export default App
