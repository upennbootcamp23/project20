import React from 'react';
import portfolio from '../data';
import ProjectCards from '../components/project';
import '../App.css';
import '../portfolio.css';

let MyPortfolio = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="header">
                                    <h3>My Portfolio</h3>
                                </div>
                                <div className="modal-footer" />

                                <div className="grid-container vertical-line">
                                    {portfolio.map((challenge) => (
                                        <ProjectCards
                                            projID={challenge.id}
                                            projKey={challenge.id}
                                            projPic={challenge.image}
                                            projname={challenge.name}
                                            projGit={challenge.github}
                                            projdeploy={challenge.deploy}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MyPortfolio;