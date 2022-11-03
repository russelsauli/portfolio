import React from "react";
import Typewriter from "typewriter-effect";


import "../components/Banner.css";
import profile from '../img/profile_pic.png';


import { GrLinkedinOption } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { TiArrowRightOutline } from "react-icons/ti";


const Banner = () => {

    return (

        <section className="banner" id="banner">

            <div className="container banner_container ">
                
                <div className="social_media_container">

                    <a><GrLinkedinOption className="banner_social_media" /></a>
                    <a><GrMail className="banner_social_media" /></a>
                    <a><GrFacebookOption className="banner_social_media" /></a>

                </div>

                <div className="profile_introduction">

                    <h1 className="profile_Name">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Lessur ma ! Ih")
                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("Hi! am Russel")
                                    .start();
                            }}
                        />

                    </h1>

                    <h3>Software Engineer</h3>

                    <p className="profile_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <button className="banner_button">Hire me <TiArrowRightOutline className="arrow_icon" /></button>

                </div>

                <div className="profile_image">

                    <div className="unEvenCircle">
                        <img src={profile} className="profile_image_image" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Banner;