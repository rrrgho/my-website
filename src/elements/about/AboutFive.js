import React from 'react';
import { FiPhone, FiMapPin, FiFile } from "react-icons/fi";


const AboutFive = () => {
    return (
        <div className="about-style-5 rn-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row row--0 about-wrapper align-items-center theme-shape">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img src={`${process.env.PUBLIC_URL}/images/myweb/gjj-medan.jpg`} alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                <div className="content">
                                    <div className="inner">
                                        <h4 className="title">IT Project Manager, Tech Lead Engineer, Software Engineer</h4>
                                        <p>Tech Lead Engineer and Software Engineer working for Telkomsel in Jakarta, Indonesia</p>
                                        <ul className="contact-address">
                                            <li><FiFile /> Project Manager | Techlead Engineer</li>
                                            <li><FiPhone /> +628 13 761 739 59</li>
                                            <li><FiMapPin /> Jakarta, Indonesia</li>
                                        </ul>
                                        <div className="download-button mt--20">
                                            <a className="btn-read-more" href="#"><span>Download My CV</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutFive;
