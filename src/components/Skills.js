import { useState, React } from "react";



import "../components/Skills.css";
import skillImage from "../img/skillset.svg";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsBraces } from "react-icons/bs";


import { CgDatabase } from "react-icons/cg";
import { SiJava } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { TiCss3 } from "react-icons/ti";

import { BsFillBootstrapFill } from "react-icons/bs";
import { TbCSharp } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiBlazor } from "react-icons/si";
import { GrMysql } from "react-icons/gr";


const Skills = () => {

    const [activeSkill, setactiveSkill] = useState("");



    return (


        <section className="skills" id="skills">

            <h2>Skills</h2>
            <p>My technical skills</p>


            <div className="skill_container container">

                <div>
                    <img src={skillImage} className="skill_set_img" />
                </div>


                <div className="skill_set_card">
                    <div className="skill_set_card_item">

                        <div className="skill_header">
                            <CgDatabase className="skill_header_img" />

                            <h3>Frontend developer</h3>


                            {activeSkill === "fontend" ? <MdKeyboardArrowUp className="skill_arrow" onClick={() => { setactiveSkill("") }} /> : <MdKeyboardArrowDown className="skill_arrow" onClick={() => { setactiveSkill("fontend") }} />}
                        </div>

                        <div className={activeSkill === "fontend" ? "skill_info" : "hide_content"}>

                            <div className="skill_item">
                                <SiHtml5 className="skill_icons" />
                                <p>100%</p>
                            </div>
                            <div className="skil_bar"></div>

                            <div className="skill_item">
                                <TiCss3 className="skill_icons" />
                                <p>80%</p>
                            </div>
                            <div className="skil_bar"></div>

                            <div className="skill_item">
                                <SiJavascript className="skill_icons" />
                                <p>80%</p>
                            </div>
                            <div className="skil_bar"></div>

                            <div className="skill_item">
                                <SiReact className="skill_icons" />
                                <p>80%</p>
                            </div>
                            <div className="skil_bar"></div>

                        </div>

                    </div>


                    <div className="skill_set_card_item">

                        <div className="skill_header">
                            <BsBraces className="skill_header_img" />

                            <h3>Backend developer</h3>


                            {activeSkill === "Backend" ? <MdKeyboardArrowUp className="skill_arrow" onClick={() => { setactiveSkill("") }} /> : <MdKeyboardArrowDown className="skill_arrow" onClick={() => { setactiveSkill("Backend") }} />}
                        </div>

                        <div className={activeSkill === "Backend" ? "skill_info" : "hide_content"}>

                            <div className="skill_item">
                                <SiHtml5 className="skill_icons" />
                                <p>100%</p>
                            </div>
                            <div className="skil_bar"></div>

                            <div className="skill_item">
                                <TiCss3 className="skill_icons" />
                                <p>80%</p>
                            </div>
                            <div className="skil_bar"></div>

                            <div className="skill_item">
                                <SiJavascript className="skill_icons" />
                                <p>80%</p>
                            </div>
                            <div className="skil_bar"></div>

                            <div className="skill_item">
                                <SiReact className="skill_icons" />
                                <p>80%</p>
                            </div>
                            <div className="skil_bar"></div>

                        </div>

                    </div>


                </div>



            </div>


        </section>

    )


}

export default Skills;