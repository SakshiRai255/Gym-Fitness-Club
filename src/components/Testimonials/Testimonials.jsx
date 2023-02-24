import React, { useState } from 'react';
import {testimonialsData} from '../../data/testimonialsData.js';
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import "./Testimonials.css";

function Testimonials() {
  const [selected ,setSelected] = useState(0);
  const tLength = testimonialsData.length
  return (
    <div className='Testimonials'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name}</span>
          <span>{testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
      <img src={testimonialsData[selected].image} alt="" />
      <div className="arrows">
        <img onClick={()=>{
          selected===0 ? setSelected(tLength-1):setSelected((prev)=>prev-1)
        }} src={leftArrow} alt="leftArrow" />
        <img onClick={()=>{
          selected===tLength-1 ? setSelected(0) :setSelected((prev)=>prev+1)
        }} src={rightArrow} alt="rightArrow" />
      </div>
      </div>
    </div>
  )
}

export default Testimonials