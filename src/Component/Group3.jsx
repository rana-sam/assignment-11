import React from "react";
import burger from "../img/Burger Group 3.png";
export default function Group3() {
  return (
    <div>
      <div className="group3">
        <div className="row">
          <div className="col-6" id="row1group3">
            <img src={burger} alt="" />
          </div>
          <div className="col-4" id="row1group3h1">
            <h1>Best Burger</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
            <button type="submit">ORDER NOW</button>
          </div>
          <div className="col-2" />
        </div>
        <div className="row">
          <div className="col-6" />
          <div className="col-6"> </div>
        </div>
      </div>
    </div>
  );
}
