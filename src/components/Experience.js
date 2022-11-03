import React from "react";



import "../components/Experience.css";
import { GoKeyboard } from "react-icons/go";
import { SiJava } from "react-icons/si";
import { TbCSharp } from "react-icons/tb";

const Experience = () => {

    return (


        <section className="experience" id="experience">

            <div className="experience_container container">

                <h2 >Experience</h2>
                <h3 >Work</h3>

                <div className="experience_card_container">

                    <div className="experience_item">
                        <GoKeyboard className="experience_icon" />
                        <h3>Encoder</h3>
                        <p className="experience_year">Dec 2019 -July 2021</p>
                    </div>


                    <div className="experience_item">
                        <TbCSharp className="experience_icon" />
                        <h3>C# Software Engineer</h3>
                        <p className="experience_year">Oct 2021-March 2022</p>
                       
                    </div>

                    <div className="experience_item">
                        <SiJava className="experience_icon" />
                        <h3>Software Engineer</h3>
                        <p className="experience_year">April 2022 -Present</p>
                    </div>

                </div>

            </div>





        </section>

    )


}

export default Experience;