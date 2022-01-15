import React from 'react'
import logo from '../img/Logo.png'
export default function Group1() {
    return (
        <div>
             <div className="group1">
        <div className="row">
          <div className="col-1" />
          <div className="col-3">
            <img src={logo} alt="" />
          </div>
          <div className="col-8" id="group1header">
            <div className="li"><a href>Home</a></div>
            <div className="li"><a href>Products</a></div>
            <div className="li"><a href>Promo</a></div>
            <div className="li"><a href>About</a></div>
            <div className="li"><a href>Contact Us</a></div>
          </div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-6" id="row2group1">
            <h1>Get CashBack Up To 50%</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-6" id="row3group1">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur justo eu nunc
              consequat.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-2" id="row4group1">
            <button type="submit">ORDER NOW</button>
          </div>
        </div>
      </div>
        </div>
    )
}
