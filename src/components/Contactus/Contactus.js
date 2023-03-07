import React from "react";
import { MdBackHand } from "react-icons/md";
import "./Contactus.css";
function Contactus() {
  return (
    <div>
      <div className="row ">
        <div className="col-lg-4 col-md-5 col-sm-8 col-10 mx-auto m-5 cdiv1">
          <div className="cdiv">
            <p className="cdivcontent">Let's chat.</p>
            <p className="cdivcontent">Tell me about your product</p>
            <p className="cdivc">
              Lets create something together
              <span className="text-warning ms-1">
                <MdBackHand />
              </span>
            </p>
          </div>
        </div>
        <div className="card col-lg-4 col-md-5 col-sm-8 col-10 mx-auto m-5  shadow-lg rounded cdiv2">
          <div className="m-4">
            <p className="fs-5" style={{ color: "blueviolet" }}>
              Send us a message
            </p>
            <input
              type="text"
              placeholder="Enter your name*"
              className="w-100 m-1 form-control"
            />
            <input
              type="text"
              placeholder="Email Address*"
              className="w-100 m-1 form-control"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-100 m-1 form-control"
            />
            <p className="textmessage">Tell us more about your product*</p>
            <textarea
              rows="5"
              placeholder="Enter your message*"
              className="w-100 m-1 form-control"
            />
            <div className="btndiv">
              <button className="contactbtn ">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
