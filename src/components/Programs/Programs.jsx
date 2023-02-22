import React from 'react';
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png';
import "./Programs.css";

function Programs() {
  return (
    <div className='Programs' id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span className=''>Programs</span>
            <span className='stroke-text'>to Shape You</span>
        </div>

        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="RightArrow" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs