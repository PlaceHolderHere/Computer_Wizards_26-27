import './Navbar.css';
import MenuSVG from '../svgLogos/menu';
import CloseSVG from '../svgLogos/close';
import { useEffect } from 'react';

interface nav_links{
    home: string;
    about: string;
    activities: string;
    objectives: string;
    isAnimated: boolean;
}

function initNavbarObserver(){
  const trigger = document.querySelector('#nav-trigger') as HTMLElement | null;
  const navbar = document.querySelector('#navbar') as HTMLElement | null;

  // Retry if Components arent yet rendered
  if (!trigger || !navbar) {
    setTimeout(initNavbarObserver, 50);
    return;
  }

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) {
      navbar.classList.add('visible');
      navbar.classList.remove('hidden');
    } else {
      navbar.classList.remove('visible');
      navbar.classList.add('hidden');
    }
  }, { threshold: 0 });

  observer.observe(trigger);

  return () => observer.disconnect();
};

function Navbar ({home, about, activities, objectives, isAnimated} : nav_links) {
    if (isAnimated){
        useEffect(() =>{
            const cleanup = initNavbarObserver();
            return () => {
                if (cleanup) cleanup();
            };
        }, []);
    }

    return (
        <nav className="navbar" id="navbar">
            {/* Home Link */}
            <a href={home} className="navbar-home">
                <img className="navbar-logo" src="/comwiz-svg.svg" alt="Computer Wizards Logo"/>
                <h4 className='navbar-title link_underline'>Computer Wizards</h4>
            </a>    
            
            {/* SideBar Toggle for Mobile */}
            <input type="checkbox" id="toggleSidebar"/>
            <label id="overlay" htmlFor='toggleSidebar'></label>
            <label htmlFor="toggleSidebar" className='openSidebar'>
                <MenuSVG
                    width={32}
                    height={32}>
                </MenuSVG>
            </label>

            {/* Href Links */}
            <div className='linksContainer'>
                <label htmlFor='toggleSidebar' className='closeSidebar'>
                    <CloseSVG 
                        width={32} 
                        height={32}>
                    </CloseSVG>
                </label>

                <a className='nav-link link_underline' href={objectives}>Objectives</a>
                <a className='nav-link link_underline' href={about}>About Us</a>
                <a className='nav-link link_underline' href={activities}>Activities</a>
            </div>
            
        </nav>
    )
}

export default Navbar;