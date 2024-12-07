import React from 'react'
import Token from './Token'
import PageMarquee from './PageMarquee'
import banana from "../assets/img/banana.png"
export default function Banner() {
  return (
    <div className='banner'>
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
