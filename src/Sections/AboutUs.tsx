import './AboutUs.css'
import aboutPhoto from '../assets/about-us-1.jpg'

function AboutUs(){
    return(
        <section className="about" id="about">
            <h2 className="about-title">About Us</h2>
            <div className="aboutGrid">
                <div className='imageSection'>
                    <img 
                        className="about-photo" 
                        src={aboutPhoto}
                        alt="About Us"
                    />
                </div>
                <div className='about-description'>
                    <h3 className='about-sub-title'>The Official Computer Club of AdDU-SHS</h3>
                    <p className="about-body">Here at the Computer Wizards Club, we strive to help curious students develop their programming skills and fundamentals through hands-on club meetings, activities, and workshops.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;