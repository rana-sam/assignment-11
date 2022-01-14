import React from 'react'
import fri from '../img/Fries.png'
import mush from '../img/Mushroom.png'
import leaf from '../img/Leaf.png'
import burg from '../img/Burger.png'
import gar from '../img/Garlic.png'
import chi from '../img/ChimlaMirch.png'
export default function Group8() {
    return (
        <div>
            <div className="group8">
        <div className="textgroup8">
          <h1>Don't Miss Our Updates</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
        </div>
        <div className="formgroup8">
          <form action>
            <input type="text" placeholder="Your Email" />
            <button type="submit">SUBSACRIBE</button>
          </form>
        </div>
        <div className="imagegroup8">
          <img className="frigroup8" src={fri} alt="" />
          <img className="musgroup8" src={mush} alt="" />
          <img className="leagroup8" src={leaf} alt="" />
          <img className="lea1group8" src={leaf} alt="" />
          <img className="burgroup8" src={burg} alt="" />
          <img className="gargroup8" src={gar} alt="" />
          <img className="chigroup8" src={chi} alt="" />
          <img className="chi1group8" src={chi} alt="" />
        </div>
      </div>
        </div>
    )
}
