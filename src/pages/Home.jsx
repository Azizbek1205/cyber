import React from "react";
import oypon from "../assets/oypon.svg";
import macbook from "../assets/macbook.svg";
import PS5 from "../assets/PS5.svg";
import headphones from "../assets/headphones.svg";
import applevision from "../assets/applevision.svg";
import Phone from "../assets/Phone.svg";
import SmartWatch from "../assets/Smart Watch.svg";
import Camera from "../assets/Camera.svg";
import Headphone from "../assets/Headphone.svg";
import Computer from "../assets/Computer.svg";
import Gaming from "../assets/Gaming.svg";
import Items from "../assets/Items.svg";
import IpadPro from "../assets/IpadPro.svg";
import SamsungZ from "../assets/SamsungZ.svg";
import Macbookfull from "../assets/Macbookfull.svg";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import ArrivalsFetch from "../Fetchs/ArrivalsFetch";

function Home() {
  const { data } = ArrivalsFetch("https://28e73a81b2da8393.mokky.dev/arrivals");
  return (
    <div>
      <div className="home">
        <div className="home-top-box">
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
        </div>
        <div className="home-bottom">
          <div className="home-b-left">
            <div className="home-b-l-top">
              <div className="home-b-l-t-left">
                <img src={PS5} alt="" />
              </div>
              <div className="home-b-l-t-right">
                <h2>Playstation 5</h2>
                <p>
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </div>
            </div>
            <div className="home-b-l-bottom">
              <div className="home-b-l-b-left">
                <div className="home-b-l-b-l-left">
                  <img src={headphones} alt="" />
                </div>
                <div className="home-b-l-b-l-right">
                  <h2>
                    Apple AirPods <span>Max</span>
                  </h2>
                  <p>Computational audio. Listen, it's powerful</p>
                </div>
              </div>
              <div className="home-b-l-b-right">
                <div className="home-b-l-b-r-left">
                  <img src={applevision} alt="" />
                </div>
                <div className="home-b-l-b-r-right">
                  <h2>
                    Max Apple Vision <span>Pro</span>
                  </h2>
                  <p>An immersive way to experience entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-b-right">
            <div className="home-b-r-left">
              <h2>
                Macbook <span>Air</span>
              </h2>
              <p>
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
              <button className="t-black-btn">Shop Now</button>
            </div>
            <div className="home-b-r-right">
              <img src={macbook} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="browse-box">
        <div className="browse">
          <div className="browse-top">
            <div className="browse-left">
              <h3>Browse By Category</h3>
            </div>
            <div className="browse-right">
              <GoChevronLeft />
              <GoChevronRight />
            </div>
          </div>
          <div className="browse-bottom">
            <Link to={"/productphone"}>
              <div className="browse-card">
                <img src={Phone} alt="" />
                <h5>Phones</h5>
              </div>
            </Link>
            <div className="browse-card">
              <img src={SmartWatch} alt="" />
              <h5>Smart Watches</h5>
            </div>
            <div className="browse-card">
              <img src={Camera} alt="" />
              <h5>Cameras</h5>
            </div>
            <div className="browse-card">
              <img src={Headphone} alt="" />
              <h5>Headphones</h5>
            </div>
            <div className="browse-card">
              <img src={Computer} alt="" />
              <h5>Computers</h5>
            </div>
            <div className="browse-card">
              <img src={Gaming} alt="" />
              <h5>Gaming</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="arrivals">
        <div className="arrivals-top">
          <h4 className="arrivals-top-text">New Arrival</h4>
          <h4>Bestseller</h4>
          <h4>Featured Products</h4>
        </div>
        <div className="arrivals-bottom">
          {data &&
            data
              .filter((e) => e.prefix == "new")
              .map((item) => {
                return (
                  <Link to={`/detail/${item.id}`}>
                    <div key={item.id} className="arrivals-card">
                      <CiHeart />
                      <img src={item.img} alt="" />
                      <h4>{item.title}</h4>
                      <h2>{item.price}</h2>
                      <button className="black-btn">Buy Now</button>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
      <div className="items">
        <div className="item-1">
          <div className="item-head">
            <img src={Items} alt="" />
          </div>
          <div className="item-body">
            <h1>Popular Products</h1>
            <p>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="t-black-btn">Shop Now</button>
          </div>
        </div>
        <div className="item-2">
          <div className="item-head">
            <img src={IpadPro} alt="" />
          </div>
          <div className="item-body">
            <h1>Ipad Pro</h1>
            <p>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="t-black-btn">Shop Now</button>
          </div>
        </div>
        <div className="item-3">
          <div className="item-head">
            <img src={SamsungZ} alt="" />
          </div>
          <div className="item-body">
            <h1>Samsung Galaxy </h1>
            <p>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="t-black-btn">Shop Now</button>
          </div>
        </div>
        <div className="item-4">
          <div className="item-head">
            <img src={Macbookfull} alt="" />
          </div>
          <div className="item-body">
            <h1>Macbook Pro</h1>
            <p>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <button className="t-white-btn">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="discount">
        <div className="discount-top">
          <h3>Discounts up to -50%</h3>
        </div>
        <div className="discount-bottom">
          {data &&
            data
              .filter((e) => e.discount == "has")
              .map((item) => {
                return (
                  <Link to={`/detail/${item.id}`}>
                    <div key={item.id} className="arrivals-card">
                      <CiHeart />
                      <img src={item.img} alt="" />
                      <h4>{item.title}</h4>
                      <h2>{item.price}</h2>
                      <button className="black-btn">Buy Now</button>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
      <div className="sale">
        <h1>
          Big Summer <span>Sale</span>
        </h1>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <button className="t-white-btn">Shop Now</button>
      </div>
    </div>
  );
}
export default Home;
