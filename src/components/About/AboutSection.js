import React from 'react';
import './About.css';
import img1 from './AboutImage.jpg';
import Services from '../Projects/Services';
import FooterSection from '../Footer/FooterSection';


const AboutSection = () => {
    return (
            <div className="aboutPage">

                <h1>About Me</h1>
                <div className="aboutWrapper">
                    <div className="aboutWrap">
                        <div className="aboutTerminal">

                            <div className="terminal">
                                <div className="dotRed"></div>
                                <div className="dotYellow"></div>
                                <div className="dotGreen"></div>
                            </div>

                            <div className="fileName">about.jsx</div>

                        </div>
                        <div className="aboutInfo">
                            <div>
                                <span className="zero">const Person = </span>
                                <span className="two">[ </span>
                            </div>
                            <div>
                                <span className="one">First name :</span>
                                <span className="three"> Beverley,</span>
                            </div>
                            <div>
                                <span className="one">Last name :</span>
                                <span className="three"> Johannie,</span>
                            </div>
                            <div>
                                <span className="two ">]</span>
                            </div>
                            <div>
                                <span className="zero">const What I do =  </span>
                                <span className="two">[</span>
                            </div>
                            <div>
                                <span className="one">Profession : </span>
                                <span className="three"> Developer</span>
                            </div>
                            <div>
                                <span className="one">Skills : </span>
                                <span className="three"> HTML5 , CSS3 , JavaScript , React , Bootstrap</span>
                            </div>
                            <div>
                                <span className="one">Backend : </span>
                                <span className="three">PHP, SQL</span>
                            </div>
                            <div>
                                <span className="two">]</span>
                            </div>
                        </div>
                    </div>

                    <div className="aboutText">
                        <div>
                            <p className="aboutParagOne">
                            I am a developer with a can-do attitude and a strong user focus. I aim to grow my career in computing by broadening my experience and skills with main focus on computer languages. I have strong knowledge in web development, ReactJS, HTML5, CSS3, JavaScript and PHP.
                            </p>
                        </div>
                        <div>
                            <p className="aboutParagTwo">
                            I receive infomation and instructions and establish the facts. I research and come up with a strategic plan. I put thoughts and ideas together. This work flow is how l bring my digital work to life. Since l began my journey, l have done freelance work and l am looking to join a team where growth is encouraged at every level.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="aboutImage">
                    <div><img src={img1} alt=""  className="image" /></div>
                    <div><h5>Frontend Web Developer & Designer</h5></div>
                </div>

            </div>
    )
}

export default AboutSection;