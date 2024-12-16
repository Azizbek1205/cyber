import React from "react";
import { useParams } from "react-router-dom";
import ArrivalsFetch from "../Fetchs/ArrivalsFetch";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiStorefront } from "react-icons/pi";
import { PiSealCheckLight } from "react-icons/pi";
import { BsPhoneFill } from "react-icons/bs";
import { FiCpu } from "react-icons/fi";
import { GoCpu } from "react-icons/go";
import { IoMdCamera } from "react-icons/io";
import { IoMdReverseCamera } from "react-icons/io";
import { GiBattery75 } from "react-icons/gi";

function Detail() {
  const { id } = useParams();
  const { data } = ArrivalsFetch(
    `https://28e73a81b2da8393.mokky.dev/arrivals/` + id
  );
  return (
    <div>
      <div className="detail-box">
        {data && (
          <div className="detail">
            <div className="detail-left">
              <img src={data.img} alt="" />
            </div>
            <div className="detail-right">
              <div className="detail-r-top">
                <h1>{data.title}</h1>
                <div className="price">
                  <h3>{data.price}</h3>
                  <p>$1499</p>
                </div>
                <div className="color">
                  <p>Select color :</p>
                  <div className="black"></div>
                  <div className="purple"></div>
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="white"></div>
                </div>
                <div className="memories">
                  <button className="memory">128GB</button>
                  <button className="memory">256GB</button>
                  <button className="memory">512GB</button>
                  <button className="memory">1TB</button>
                </div>
                <div className="detail-top-cards">
                  <div className="detail-top-card">
                    <div className="detail-t-card-left">
                      <BsPhoneFill />
                    </div>
                    <div className="detail-t-card-right">
                      <h6>Screen size</h6>
                      <h5>6.7"</h5>
                    </div>
                  </div>
                  <div className="detail-top-card">
                    <div className="detail-t-card-left">
                      <FiCpu />
                    </div>
                    <div className="detail-t-card-right">
                      <h6>CPU</h6>
                      <h5>Apple A16 Bionic</h5>
                    </div>
                  </div>
                  <div className="detail-top-card">
                    <div className="detail-t-card-left">
                      <GoCpu />
                    </div>
                    <div className="detail-t-card-right">
                      <h6>Number of Cores</h6>
                      <h5>6</h5>
                    </div>
                  </div>
                  <div className="detail-top-card">
                    <div className="detail-t-card-left">
                      <IoMdCamera />
                    </div>
                    <div className="detail-t-card-right">
                      <h6>Main camera</h6>
                      <h5>48-12 -12 MP</h5>
                    </div>
                  </div>
                  <div className="detail-top-card">
                    <div className="detail-t-card-left">
                      <IoMdReverseCamera />
                    </div>
                    <div className="detail-t-card-right">
                      <h6>Front-camera</h6>
                      <h5>12 MP</h5>
                    </div>
                  </div>
                  <div className="detail-top-card">
                    <div className="detail-t-card-left">
                      <GiBattery75 />
                    </div>
                    <div className="detail-t-card-right">
                      <h6>Battery capacity</h6>
                      <h5>4323 mAh</h5>
                    </div>
                  </div>
                </div>
                <p>
                  Enhanced capabilities thanks toan enlarged display of 6.7
                  inchesand work without rechargingthroughout the day.
                  Incredible photosas in weak, yesand in bright lightusing the
                  new systemwith two cameras <span>more...</span>
                </p>
              </div>
              <div className="detail-r-center">
                <button className="t-black-btn">Add to Wishlist</button>
                <button className="black-btn">Add to Card</button>
              </div>
              <div className="detail-r-bottom">
                <div className="detail-bottom-card">
                  <div className="detail-b-card-left">
                    <CiDeliveryTruck />
                  </div>
                  <div className="detail-b-card-right">
                    <h6>Free Delivery</h6>
                    <h5>1-2 day</h5>
                  </div>
                </div>
                <div className="detail-bottom-card">
                  <div className="detail-b-card-left">
                    <PiStorefront />
                  </div>
                  <div className="detail-b-card-right">
                    <h6>In Stock</h6>
                    <h5>Today</h5>
                  </div>
                </div>
                <div className="detail-bottom-card">
                  <div className="detail-b-card-left">
                    <PiSealCheckLight />
                  </div>
                  <div className="detail-b-card-right">
                    <h6>Guaranteed</h6>
                    <h5>1 year</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="details-box">
        <div className="details">
          <h4>Details</h4>
          <p>
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both
            critics and mass consumers always praise the quality of the picture
            provided by the products of the Californian brand. And last year's
            6.7-inch Retina panels, which had ProMotion, caused real admiration
            for many.
          </p>
          <div className="screen">
            <div className="screen-top">
              <h5>Screen</h5>
            </div>
            <div className="screen-bottom">
              <div className="screen-card">
                <h5>Screen diagonal</h5>
                <p>6.7"</p>
              </div>
              <div className="screen-card">
                <h5>The screen resolution</h5>
                <p>2796x1290</p>
              </div>
              <div className="screen-card">
                <h5>The screen refresh rate</h5>
                <p>120 Hz</p>
              </div>
              <div className="screen-card">
                <h5>The pixel density</h5>
                <p>460 ppi</p>
              </div>
              <div className="screen-card">
                <h5>Screen type</h5>
                <p>OLED</p>
              </div>
              <div className="screen-card">
                <h5>Additionally</h5>
                <p>
                  Dynamic Island
                  <br />
                  Always-On display
                  <br />
                  HDR display
                  <br />
                  True Tone
                  <br />
                  Wide color (P3)
                </p>
              </div>
            </div>
          </div>
          <div className="cpu">
            <div className="cpu-top">
              <h5>CPU</h5>
            </div>
            <div className="cpu-bottom">
              <div className="screen-card">
                <h5>CPU</h5>
                <p>A16 Bionic</p>
              </div>
              <div className="screen-card">
                <h5>Number of cores</h5>
                <p>6</p>
              </div>
            </div>
          </div>
          <button className="t-black-btn">View More</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
