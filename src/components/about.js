import React from 'react';
import ProfilePic from '../assets/images/profilepic.PNG';
import RowanLogo from '../assets/images/berkeley.png';
import CCCLogo from '../assets/images/pittsburgh.png';
import CHHSELogo from '../assets/images/carleton.png';
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
                                        Software Engineer with a demonstrated history of working on production web and mobile applications. Deep
                                        understanding and technical expertise in Computer Science fundamentals, Javascript, ReactJS, Redux, VueJS, Vuex, NodeJS, MongoDB, CSS,
                                        HTML and other technologies.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University Of California, Berkeley</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www.berkeley.edu/' target='_blank'><img className='university-logo' src={BerkeleyLogo} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>University Of Pittsburgh</div>
                                        <div className='title-concentration'>Master of Science in Medical Product Engineering</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://www.pitt.edu/' target='_blank'><img className='university-logo' src={PittsburghLogo} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Carleton University</div>
                                        <div className='title-concentration'>Bachelor of Electrical and Biomedical Engineering</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://carleton.ca/' target='_blank'><img className='university-logo' src={CarletonLogo} /></a>
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