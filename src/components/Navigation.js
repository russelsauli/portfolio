

import React, { useState, useEffect } from 'react';


import "../components/navigation.css";

import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";


import AnchorLink from "react-anchor-link-smooth-scroll";


const Navigation = () => {

    const [activeNav, setActiveNav] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [modeDesign, setmodeDesign] = useState(" light_mode_bg light_mode_txt");
    const [activeSection, setactiveSection] = useState("home");


    if (activeNav === true) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "auto";
    }


    if (darkMode === true) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }


    return (


        <header className={activeNav? " navigation "+modeDesign:"navigation "+modeDesign} id="home">

            <div className="container">

                <nav className= {setmodeDesign + " navigation_container"}>

                    <div className="navigation_logo_container">

                        <h6 className="navigation_logo">JRS  {darkMode}</h6>

                        <div className="navigation_icon_display" onClick={
                            () => {
                                setActiveNav(!activeNav);
                            }}>
                            {activeNav ? <IoCloseSharp className="nav_icon" /> : <BsList className="nav_icon" />}

                        </div>
                    </div>

                    <div className={activeNav ? "navigation_list_container" : "navigation_list_container nav_close"} >
                        <ul className="navigation_list">

                            <li onClick={() => { setactiveSection("home"); setActiveNav(false); }} className={activeSection === "home" ? "activeSection" : ""} >
                                <AnchorLink href='#banner' className={darkMode ? "dark_mode_txt" : "light_mode_txt"}>Home</AnchorLink>
                            </li>

                            <li onClick={() => { setactiveSection("skills"); setActiveNav(false); }} className={activeSection === "skills" ? "activeSection" : ""}>
                                <AnchorLink href='#skills' className={darkMode ? "dark_mode_txt" : "light_mode_txt"}>Qualifications</AnchorLink>
                            </li>

                            <li onClick={() => { setactiveSection("contact_me"); setActiveNav(false); }} className={activeSection === "contact_me" ? "activeSection" : ""}>
                                <AnchorLink href='#contact_me' className={darkMode ? "dark_mode_txt" : "light_mode_txt"}>contact Me</AnchorLink>
                            </li>

                            <li onClick={() => {
                                
                                setDarkMode(!darkMode);

                                darkMode ? setmodeDesign(" light_mode_bg light_mode_txt") : setmodeDesign(" dark_mode_bg dark_mode_txt");

                            }} >
                                {darkMode ? < BsSun /> : <BiMoon />}


                            </li>
                        </ul>
                    </div>

                </nav>

            </div>



        </header>

    )


}

export default Navigation;