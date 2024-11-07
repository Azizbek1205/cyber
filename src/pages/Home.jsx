import React from "react";
import oypon from "../assets/oypon.svg";

function Home() {
  return (
    <div>
      <div className="home-box">
        <div className="home">
          <div className="home-top">
            <div className="home-t-left">
              <h4>Pro.Beyond.</h4>
              <h1>
                IPhone 14 <span>Pro</span>
              </h1>
              <p>Created to change everything for the better. For everyone</p>
              <button className="t-white-btn">Shop Now</button>
            </div>
            <div className="home-t-right">
              <img src={oypon} alt="" />
            </div>
          </div>
          <div className="home-bottom">
            <div className="home-b-left">
              <div className="home-b-l-top"></div>
              <div className="home-b-l-bottom">
                <div className="home-b-l-b-left"></div>
                <div className="home-b-l-b-right"></div>
              </div>
            </div>
            <div className="home-b-right">
              <div className="home-b-r-left">
                <h1>
                  Macbook <span>Air</span>
                </h1>
                <p>
                  The new 15‑inch MacBook Air makes room for more of what you
                  love with a spacious Liquid Retina display.
                </p>
                <button className="t-black-btn">Shop Now</button>
              </div>
              <div className="home-b-r-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
