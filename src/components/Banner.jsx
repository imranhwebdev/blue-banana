import React, { useEffect } from 'react';
import Token from './Token'
import AOS from 'aos';
import PageMarquee from './PageMarquee'
import banana from "../assets/img/banana.png"
import bannertopshap from "../assets/img/bannertopshap.png"
export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className='banner'>
      <img className='bannertopshap' src={bannertopshap} alt="" data-aos="fade-down" data-aos-duration="1500" />
      <div className="container">
        <div className="banner-content">
          <h1>UNPEEL THE FUTURE: <span>IT'S BLUE BANANA!</span></h1>
          <p>This is a rare blue banana. Hodl and you’ll become a bananillionaire. Ignore, and you’ll fail forever.</p>
          <Token />
          <img src={banana} alt="" />
        </div>
      </div>
      <PageMarquee />
    </div>
  )
}
