import React from "react";
import { Banner } from "../banner/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import './contact.css'
const Contact = () => {
  return (
    <div>
      <Banner title="Contact us" smtitle="contact" />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <form>
                <div className="form-control">
                  <input placeholder="your name" />
                </div>
                <div className="form-control">
                  <input placeholder="your phone" />
                </div>
                <div className="form-control">
                  <input placeholder="your name" />
                </div>
                <select>
                  <option>select department</option>
                  <option>one</option>
                  <option>tow</option>
                  <option>three</option>
                </select>
                <div className="form-control">
                  <textarea placeholder="message"></textarea>
                </div>
                <button>submit</button>
              </form>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="side">
                    <div className="overlay">
                        <h3>Contact Us For Any Informations</h3>
                        <li><FontAwesomeIcon icon={faMap}/>location</li>
                        <hr></hr>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
