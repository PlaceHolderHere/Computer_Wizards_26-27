import './Footer.css';
import InstaLogo from '../svgLogos/instagram';
import FacebookLogo from '../svgLogos/facebook';
import EmailLogo from '../svgLogos/email';

function Footer(){
    return(
        <footer>
            <a href="#home" className="footer-brand">
                <img className="footer-logo" src="/comwiz-svg.svg" alt="Computer Wizards Logo"/>
                <h3 className='footer-title link_underline'>Computer Wizards</h3>
            </a>
            
            <div className='contacts'>
                <h3 className='footer-title'>Contact Us!</h3>
                <div className='links'>
                    <a 
                        href="https://www.facebook.com/AdduCWC/"
                        className='contact_link'
                        target="_blank">
                        <FacebookLogo
                            logoWidth={32}
                            logoHeight={32}>
                        </FacebookLogo>
                        <p className="link-title link_underline">Addu SHS-Computer Wizards Club</p>
                    </a>

                    <a 
                        href="https://www.instagram.com/comwiz.addushs/" 
                        target="_blank"
                        className='contact_link'>
                        <InstaLogo
                            logoWidth={32}
                            logoHeight={32}>
                        </InstaLogo>
                        <p className="link-title link_underline">comwiz.addushs</p>
                    </a>

                    <a 
                        href="mailto:shs.computerwizards@addu.edu.ph"
                        target="_blank"
                        className='contact_link'>
                        <EmailLogo
                            logoWidth={32}
                            logoHeight={32}>
                        </EmailLogo>
                        <p className="link-title link_underline">shs.computerwizards@addu.edu.ph</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;