import React from "react";
import "./Aboutus.css";
import { MdLocationCity } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

function Aboutus() {
  return (
    <div className="aboutuspage ">
      <div className="bgcolor ">
        <p className="display-5 text-center pt-5 ">About us</p>
        <p className="fs-5 text-center">
          Get in touch and let us know how we can help.
        </p>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-5 col-8 card shadow-lg border-0 mx-auto">
            <p className="text-center fs-1">
              <MdLocationCity />
            </p>
            <div className="ms-5 mt-2 me-5 mb-3">
              <p>
                DLF Cyber City, Indira Nagar, Gachibowli, Hyderabad, Telangana,
                500032
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-5 col-8 card shadow-lg border-0 mx-auto">
            <p className="text-center fs-1">
              <BsFillTelephoneFill />
            </p>
            <div>
              <p className="ms-5 mt-2 me-5 mb-3">
                <span style={{ fontWeight: "bold" }}>phone</span>: +91 99999
                66666
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-5 col-8 card shadow-lg border-0 mx-auto">
            <p className="text-center fs-1">
              <HiMail />
            </p>
            <div>
              <p className="ms-5 mt-2 me-5 mb-3">
                <span style={{ fontWeight: "bold" }}>mail</span>:
                contact@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
