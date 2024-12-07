import React from 'react'
import brnshap from "../assets/img/banner-shap.png"
import Token from './Token'
export default function Banner() {
  return (
    <div className='banner'>
      <div className="container">
        <div className="banner-content">
          <h1>UNPEEL THE FUTURE: <span>IT'S BLUE!</span></h1>
          <p>This is a rare blue banana. Hodl and you’ll become a bananillionaire. Ignore, and you’ll fail forever.</p>
          <Token />
        </div>
      </div>
      <img className='brnshap' src={brnshap} alt="" />
    </div>
  )
}
