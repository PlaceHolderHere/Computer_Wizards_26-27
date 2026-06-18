import React from "react";
import './Navbar.css';

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <a>About Us</a>
            <a>Activities</a>
            <a>Objectives</a>
            <div className="navbar-home">
                <img className="navbar-logo" src="/comwiz-svg.svg" alt="Computer Wizards Logo"/>
                <h4>Computer Wizards</h4>
            </div>
        </nav>
    )
}
