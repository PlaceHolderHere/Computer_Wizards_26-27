import './AboutUs.css'

function AboutUs(){
    return(
        <section className="about" id="about">
            <h2 className="title">About Us</h2>
            <div className="aboutGrid">
                <div className='imageSection'>
                    <img 
                        className="about-photo" 
                        src="src/assets/about-us-1.jpg" 
                        alt="About Us 1"
                    />
                </div>
                <div className='description'>
                    <h3>The Official Computer Club of AdDU-SHS</h3>
                    <p>Here at the Computer Wizards Club, we strive to help curious students develop their programming skills and fundamentals through hands-on club meetings, activities, and workshops.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;