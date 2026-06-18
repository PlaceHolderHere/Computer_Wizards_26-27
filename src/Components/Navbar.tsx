import React from "react";
import './Navbar.css';

interface nav_links{
    home: string;
    about: string;
    activities: string;
    objectives: string;
}

export const Navbar: React.FC<nav_links> = ({home, about, activities, objectives}) => {
    return (
        <nav className="navbar">
            <a href={about}>About Us</a>
            <a href={activities}>Activities</a>
            <a href={objectives}>Objectives</a>
            <a href={home} className="navbar-home">
                <img className="navbar-logo" src="/comwiz-svg.svg" alt="Computer Wizards Logo"/>
                <h4>Computer Wizards</h4>
            </a>
        </nav>
    )
}
