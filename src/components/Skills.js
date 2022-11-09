import { useState, React } from "react";



import "../components/Skills.css";


import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsBraces } from "react-icons/bs";


import { CgDatabase } from "react-icons/cg";

import { SiHtml5 } from "react-icons/si";
import { TiCss3 } from "react-icons/ti";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";




import { SiJava } from "react-icons/si";
import { TbCSharp } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiBlazor } from "react-icons/si";
import { GrMysql } from "react-icons/gr";


 
const Skills = () => {





   return (

      <section className="skills" id="skills">

         <div className="section_label" >
            <h2>My Skills</h2>
         </div>

         <div className="skill_container container">
            
            <div>

               <div>
                  <h3 className="section_label">Frontend</h3>
               </div>

               <div className="skill_card_container">

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <SiHtml5 className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>HTML</p>
                        </div>
                     </div>
                  </div>

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <TiCss3 className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>CSS</p>
                        </div>
                     </div>
                  </div>

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <BsFillBootstrapFill className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>Bootstrap</p>
                        </div>
                     </div>
                  </div>

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <SiJavascript className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>Java Script</p>
                        </div>
                     </div>
                  </div>

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <SiReact className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>React</p>
                        </div>
                     </div>
                  </div>

               </div>

            </div>

            <div>

               <h3 className="section_label">Backend</h3>

               <div className="skill_card_container">

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <SiJava   className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>Java</p>
                        </div>
                     </div>
                  </div>

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <TbCSharp   className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>C#</p>
                        </div>
                     </div>
                  </div>

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <DiMongodb     className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>Mongo DB</p>
                        </div>
                     </div>
                  </div>

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <SiBlazor GrMysql className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>Blazor Framework</p>
                        </div>
                     </div>
                  </div>

                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           < GrMysql className="skill_logo" />
                        </div>
                        <div class="flip-card-back">
                           <p>MySQL</p>
                        </div>
                     </div>
                  </div>

               </div>

            </div>

         </div>

      </section>

   )


}

export default Skills;