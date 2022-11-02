import React from "react";



import "../components/Experience.css";
import { GoKeyboard } from "react-icons/go";
import { SiJava } from "react-icons/si";
import { TbCSharp } from "react-icons/tb";

const Experience = () => {

    return (


        <section className="experience" id="experience">

            <div className="experience_container container">

                <h2 >My Experience</h2>

                <div className="experience_card_container">

                    <div className="experience_item">
                        <GoKeyboard className="experience_icon"/>
                        <h3>Encoder</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>


                    
                    <div className="experience_item">
                        <TbCSharp className="experience_icon"/>
                        <h3>C# Software Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className="experience_item">
                        <SiJava className="experience_icon" />
                        <h3>Software Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>

            </div>





        </section>

    )


}

export default Experience;