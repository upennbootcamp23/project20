import React from 'react';
import HTMLogo from '../assets/images/htmlogo.png';
import CSSLogo from '../assets/images/csslogo.png';
import MySQLogo from '../assets/images/mysqlogo.png';
import JavaScriptLogo from '../assets/images/js-logo.png'

import '../App.css';
import '../portfolio.css';

const MyResume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>Download Resume Here: <a href="https://github.com/upennbootcamp23/project20/blob/main/src/assets/Egerev_Resume2023.docx.pdf">Alexander Egerev</a>
                                </h3>
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Computer Science Prowess</div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Performed analysis and
                                                               design of information
                                                               systems and database
                                                              solutions</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'> Obtained knowledge in
                                                                business, programming, and
                                                                application software for a
                                                                business/ organizational IT
                                                                environment</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'> Applied state-of-the-art
                                                                programming techniques and
                                                                application software to solve
                                                                business /
                                                                organizational information
                                                                systems issues</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies Used</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <img src={HTMLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={CSSLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MySQLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={JavaScriptLogo} className='img-skills' />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Languages</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>English (native fluency)</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Spanish (Intermediate)</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Russian (Advanced)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Programming Languages</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Javascript</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>CSS</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>HTML</p>
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

export default MyResume;