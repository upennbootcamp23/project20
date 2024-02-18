import React from 'react';
import '../App.css';
import '../portfolio.css';

function ProjectCards(data) {
    return (
        <div className={`grid-item gallery__item--${props.id}`}>
            <img src={data.image} alt={data.name}
                 className="gallery__img"/>
            <div className="desc">
                <h5>{data.name}</h5>
            </div>

            <div className='dep-links'>
                <a href={data.github} target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github Repository" id="project-icon"/></a>
                <a href={data.deploy} target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Application" id="project-icon"/></a>
            </div>
        </div>
    );
}

export default ProjectCards;