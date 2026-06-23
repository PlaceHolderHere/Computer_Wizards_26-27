import './Navbar.css';
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
            <a href={activities}>Activities</a>
            <a href={about}>About Us</a>
            <a href={objectives}>Objectives</a>
            <a href={home} className="navbar-home">
                <img className="navbar-logo" src="/comwiz-svg.svg" alt="Computer Wizards Logo"/>
                <h4>Computer Wizards</h4>
            </a>
        </nav>
    )
}

export default Navbar;