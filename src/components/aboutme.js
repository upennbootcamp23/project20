import React from 'react';
import ProfilePic from '../assets/images/profilepic.PNG';
import RowanLogo from '../assets/images/rowan.png';
import CCCLogo from '../assets/images/camdencc.png';
import CHHSELogo from '../assets/images/cheast.jpg';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={ProfilePic} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                    Hi, my name is Alexander Egerev. I live in Pennsylvania, about 30 minutes from Philadelphia. 
                                    Ever since I was a child, I always liked working with computers. 
                                    When I was 13 years old, I first started coding. My favorite programming languages are:
                                    <ul>
                                    <li> HTML</li>
                                    <li> CSS</li>
                                    <li> JavaScript</li>
                                    <li> Java</li>
                                    <li> C++</li>
                                    </ul>
                                    Aside from coding, I like to play chess, travel, and draw.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='university'>Rowan University, Glassboro, NJ</div>
                                        <div className='concentration'>B.A. in Computing and Informatics (with an emphasis on mobile development </div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www.rowan.edu/' target='_blank'><img className='logo' src={RowanLogo} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='university'>Camden County College, Blackwood, NJ</div>
                                        <div className='concentration'>Associate in Applied Science - Computer Information Systems</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://www.camdencc.edu/' target='_blank'><img className='logo' src={CCCLogo} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='school'>Cherry Hill High School East</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://www.chclc.org/east' target='_blank'><img className='university-logo' src={CHHSELogo} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;