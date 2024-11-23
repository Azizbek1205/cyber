import React from "react";
import logo from "../assets/w-logo.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="foot-top">
            <div className="foot-left">
              <img src={logo} alt="" />
              <p>
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
            <div className="foot-center">
              <h4>Services</h4>
              <p>Bonus program</p>
              <p>Gift cards</p>
              <p>Credit and payment</p>
              <p>Service contracts</p>
              <p>Non-cash account</p>
              <p>Payment</p>
            </div>
            <div className="foot-right">
              <h4>Assistance to the buyer</h4>
              <p>Find an order</p>
              <p>Terms of delivery</p>
              <p>Exchange and return of goods</p>
              <p>Guarantee</p>
              <p>Frequently asked questions</p>
              <p>Terms of use of the site</p>
            </div>
          </div>
          <div className="foot-bottom">
            <FaTwitter />
            <FaFacebookF />
            <FaTiktok />
            <FaInstagram />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
