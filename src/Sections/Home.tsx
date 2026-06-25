import Button from "../Components/Button"
import "./Home.css"

function Home(){
    return(
        <section id="home" className="home">
            <img 
                className="home-logo" 
                src="/comwiz-svg.svg" 
                alt="Computer Wizards Logo"
                id="nav-trigger"
            />
            <h1 className="home-title">Computer Wizards</h1>
            <Button text="Learn more →" hrefLink="#about"/>
        </section>
    )
}

export default Home