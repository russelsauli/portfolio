import React from "react";



import "../components/ContactMe.css";

import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPinMapFill } from "react-icons/bs";



const ContactMe = () => {




    return (

        <section className="contact_me" id="contact_me">

            <div className="container">

                <h2>Contact Me</h2>
                <p>Get in touch</p>

                <div className="contact_me_container">

                    <div className="contact_me_info">

                        <div className="contact_me_info_data_container">
                            
                            <div className="contact_me_info_data">
                                <BsFillTelephoneFill className="contact_me_icon" />
                                <h3>Call ME<p>999-777-666</p></h3>
                            </div>

                            <div className="contact_me_info_data">
                                <BsFillEnvelopeFill className="contact_me_icon" />
                                <h3>Email<p>alawtayo@gmail.com</p></h3>
                            </div>

                            <div className="contact_me_info_data">
                                <BsPinMapFill className="contact_me_icon" />
                                <h3>Localtion<p>Manila, Philippines</p></h3>
                            </div>

                        </div>



                    </div>

                    <div className="contact_me_form_container">

                        <form className="contact_me_form">
                            <div className="form_container_name">
                                <input type="text" placeholder="Name" className="form_name" />
                                <input type="text" placeholder="Email" className="form_name" />
                            </div>

                            <input type="text" placeholder="Project" className="form_project" />
                            <textarea type="text" placeholder="Message" className="form_nMessage" />
                            <button className="form_submit"> Send Message</button>
                        </form>

                    </div>

                </div>


            </div>


        </section>

    )


}

export default ContactMe;