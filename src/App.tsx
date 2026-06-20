// Sections
import Home from "./Sections/Home"
import Objectives from "./Sections/Objectives"
import Activities from "./Sections/Activities"

// Components
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="app">
        <Navbar 
            home="#home" 
            about="#about" 
            objectives="#objectives" 
            activities="#activities"
            isAnimated={true}>
        </Navbar>
        <Home></Home>
        <Objectives></Objectives>
        <Activities></Activities>
        <Footer></Footer>
    </div>
  )
}

export default App
