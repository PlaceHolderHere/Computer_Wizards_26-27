import Home from "./Sections/Home"
import Objectives from "./Sections/Objectives"
import { Navbar } from "./Components/Navbar"

function App() {
  return (
    <div className="app">
        <Home></Home>

        <Navbar 
            home="#home" 
            about="#about" 
            objectives="#objectives" 
            activities="#activities">
        </Navbar>
        <Objectives></Objectives>
    </div>
  )
}

export default App
