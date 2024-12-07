import React from "react";
import "./home.css";
import doctor from "../asset/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSquare } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button>
              <a href="#cc">Read More</a>
            </button>
            <span>+</span>
          </div>
          <div className="col-6">
            <div className="header-ee">
              <img alt="s" src={doctor} />
              <FontAwesomeIcon icon={faSquare} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Home;
