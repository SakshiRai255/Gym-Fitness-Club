import React from 'react';
import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.png';
import Image3 from '../../assets/image3.png';
import Image4 from '../../assets/image4.png';
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

import './Reasion.css';

function Reasions() {
  return (
    <div className='Reasions' id='reasions'>
        <div className='left-r'>
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
        </div>
        <div className="right-r">
            <span>some reasions</span>
            <div>
                <span className='stroke-text'>Why</span>
                <span> Choose us?</span>
            </div>

            <div className='details-r'>
                <div>
                    <img src={tick} alt="tick" />
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span style={{color:"var(--gray)",fontWeight:"normal"}}>OUR PARTNERS</span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasions