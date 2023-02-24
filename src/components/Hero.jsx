import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";

function Hero() {
  return (
    <div className="Hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best add */}
        <div className="the-best-add">
          <div></div>
          <span>the best fitness club in town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="span">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs </span>
          </div>
        </div>
        {/* Hero Button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span> <span>145 bpm</span>
        </div>

        {/* Hearo Images */}

        <img src={hero_image} alt="hero_image" className="hero_image" />
        <img
          src={hero_image_back}
          alt="hero_image_back"
          className="hero_image_back"
        />

        <div className="calories">
            <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
             <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
