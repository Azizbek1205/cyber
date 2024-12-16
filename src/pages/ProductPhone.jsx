import React from "react";
import ArrivalsFetch from "../Fetchs/ArrivalsFetch";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

function ProductPhone() {
  const { data } = ArrivalsFetch("https://28e73a81b2da8393.mokky.dev/arrivals");
  return (
    <div>
      <div className="productphone">
        <div className="prophone-left"></div>
        <div className="prophone-right">
          {data &&
            data
              .filter((e) => e.item == "phone")
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
    </div>
  );
}

export default ProductPhone;
