import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutFive from '../elements/about/AboutFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import Separator from "../elements/separator/Separator";
import ProgressbarTwo from "../elements/progressbar/ProgressbarTwo";
import BrandFour from "../elements/brand/BrandFour";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import PortfolioSkill from '../data/portfolio/PortfolioSkill.json'
import PortfolioProjects from '../data/portfolio/PortfolioProjects.json'
import PortfolioData from '../data/portfolio/PortfolioData.json'
import ServiceOne from "../elements/service/ServiceOne";
var BlogListData = BlogClassicData.slice(0, 3);


const PersonalPortfolio = () => {
    return (
        <>
            <SEO title="Rian Iregho" />
            <main className="page-wrapper">

                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-perosonal-portfolio height-750 bg_image" data-black-overlay="1" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/myweb/bannerweb.png)`}}>
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="col-12">
                                <div className="inner text-center text-md-start">
                                    <h1 className="title">Hey! I'm</h1>
                                    <h1 id="about" className="title"><span className="theme-gradient">Rian Iregho</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <AboutFive />

                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--90 mt_dec--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <BrandFour brandStyle="brand-style-2 variation-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}


                {/* Start Portfolio Area  */}
                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Career"
                                    title = "Check My Recent Career!"
                                    description = "Working for big, reliable, and scalable company is a very wonderful journey of me."
                                />
                            </div>
                        </div>
                        <PortfolioOne filter={true} data={PortfolioData} Column="col-lg-4 col-md-6 col-12 mt--30 portfolio"  />
                    </div>
                </div>
                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Project"
                                    title = "Check Projects I've Done!"
                                    description = "Working for big, reliable, and scalable company is a very wonderful journey of me."
                                />
                            </div>
                        </div>
                        <PortfolioOne filter={false} data={PortfolioProjects} Column="col-lg-4 col-md-6 col-12 mt--30 portfolio"  />
                    </div>
                </div>
                {/* End Portfolio Area  */}


                <Separator />
                {/* Start Elements Area  */}
                <div className="rwt-about-area rn-section-gap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <SectionTitle
                                    textAlign = "text-start"
                                    radiusRounded = ""
                                    subtitle = "See my All Skill."
                                    title = "Technical Skill"
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                            <div className="col-lg-6">
                                <div className="rbt-progress-style-1">
                                    <ProgressbarTwo data={PortfolioSkill.technical_skill} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="rwt-about-area rn-section-gap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <SectionTitle
                                    textAlign = "text-start"
                                    radiusRounded = ""
                                    subtitle = "See my All Skill."
                                    title = "Soft Skill"
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                            <div className="col-lg-6">
                                <div className="rbt-progress-style-1">
                                    <ProgressbarTwo data={PortfolioSkill.soft_skill} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="rwt-about-area rn-section-gap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <SectionTitle
                                    textAlign = "text-start"
                                    radiusRounded = ""
                                    subtitle = "Communication Skill."
                                    title = "Language"
                                    description = "We provide company and finance service for <br /> startups and company business."
                                />
                            </div>
                            <div className="col-lg-6">
                                <div className="rbt-progress-style-1">
                                    <ProgressbarTwo data={PortfolioSkill.language} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* End Elements Area  */}


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "I also own an IT Consultant named GLOBAL INTERACTIVE TECHNOLOGY <br/> We are happy to help you grow your business through Technology"
                                />
                            </div>
                        </div>
                        <ServiceOne
                            serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                            textAlign = "text-center"
                        />
                    </div>
                </div>
                {/* End Service Area  */}


                {/*<Separator />*/}
                {/* Start Elements Area  */}
                {/*<div className="rwt-testimonial-area rn-section-gap">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-lg-12 mb--10">*/}
                {/*                <SectionTitle*/}
                {/*                    textAlign = "text-center"*/}
                {/*                    radiusRounded = ""*/}
                {/*                    subtitle = "Client Feedback"*/}
                {/*                    title = "Awesome Clients Feedback."*/}
                {/*                    description = "We provide company and finance service for <br /> startups and company business."*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <TestimonialOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one" />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* End Elements Area  */}



                <Separator />
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default PersonalPortfolio;
