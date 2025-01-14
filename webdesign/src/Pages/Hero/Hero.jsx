import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './Hero.css';

function Hero() {
  const handleScrollToAboutSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='hero-container section' id='home'>
      <div className='hero-content'>
        <h1 className='hero-title'>
          <span className='left'>From Strategy to Success:</span>
          <span className='right'>E-Commerce Solutions for Every Stage of Your Growth</span>
        </h1>
       
      </div>
    </section>
  );
}

export default Hero;
