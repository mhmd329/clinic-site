import React from "react";
import looo from "../asset/looo.png";
import download from '../asset/download.png'
import downloa from '../asset/downloa.png'
import downlo from '../asset/downlo.png'
import downl from '../asset/downl.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Foter = () => {
  return (
    <footer>
    
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img alt="s" src={looo} />
            <p>
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="footer-contact d-flex">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />
             </div>
             <div className="footer-text">
                <h6>contact us</h6>
                <h4>011349230249</h4>
             </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>quick links</h3>
            <a href="#s">about us</a>
            <a href="#s">services</a>
            <a href="#s">booking</a>
            <a href="#s"> blogs</a>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>our services</h3>
            <a href="#s"> dental care</a>
            <a href="#s"> cardiac clinic</a>
            <a href="#s"> massege theraby</a>
            <a href="#s"> cardiolgy</a>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>subscibe</h3>
            <input type="email" placeholder="email adress" />
            <button type="submit">subscibe now</button>
            <div className="d-flex">
<a href="#s"> <img alt="s" src={download}/> </a>
<a href="#s"> <img alt="s" src={downloa}/> </a>
<a href="#s"> <img alt="s" src={downlo}/> </a>
<a href="#s"> <img alt="s" src={downl}/> </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Foter;
