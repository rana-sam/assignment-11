import React from "react";
import aiden from "../img/Aiden.png";
import ethel from "../img/Ethel.png";
import fannie from "../img/Fannie.png";
import burger from "../img/Burger.png";
import chiml from "../img/ChimlaMirch.png";
import fri from "../img/Fries.png";
import garlic from "../img/Garlic.png";
import leaf from "../img/Leaf.png";
import mush from "../img/Mushroom.png";

export default function Group2() {
  return (
    <div className="group2">
      <div className="textGroup2">
        <h1 className="textGroup2h1">Our Chef</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
      <div className="cardGroup2">
        <div className="card1">
          <img src={aiden} alt="" />
          <span>
            <h2>Aiden Hunter</h2>
            <p>Founder</p>
          </span>
        </div>
        <div className="card2Group2">
          <img src={ethel} alt="" />
          <span>
            <h2>Ethel Ramsey</h2>
            <p>Co-founder</p>
          </span>
        </div>
        <div className="card3Group2">
          <img src={fannie} alt="" />
          <span>
            <h2>Fannie stewart</h2>
            <p>Co-founder</p>
          </span>
        </div>
      </div>
      <div className="designGroup2">
        <img className="designbugr" src={burger} alt="" />
        <img className="designchim" src={chiml} alt="" />
        <img className="designfri" src={fri} alt="" />
        <img className="designgar" src={garlic} alt="" />
        <img className="designmush" src={mush} alt="" />
        <img className="designlea" src={leaf} alt="" />
      </div>
    </div>
  );
}
