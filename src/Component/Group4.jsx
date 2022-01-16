import React from 'react'
import leaf from "../img/Leaf.png";
import chiml from "../img/ChimlaMirch.png";
import burger from "../img/Burger.png";
export default function Group4() {
    return (
        <div>
             <div className="group4">
        <div className="row" id="group4row1">
          <div className="col-4" id="group4row1chi"><img src={chiml} alt="" /> </div>
          <div className="col-4" id="group4row1bur"><img src={burger} alt="" /></div>
          <div className="col-4" id="group4row1lea"><img src={leaf} alt="" /></div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-4" id="row1group4h1">
            <h1>Best Burger</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            <button type="submit">ORDER NOW</button>
          </div>
          <div className="col-6" id="row1group4"><img src="./image/Burger Group 3.png" alt="" /></div>
        </div>
      </div>
        </div>
    )
}
