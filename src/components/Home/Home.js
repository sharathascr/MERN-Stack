import React from "react";
import "./Home.css";
import img1 from "../../images/6fff28f4-8f7e-416e-af0b-172b67040b94.png";

import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="bgimg row ">
      <div className="col-lg-5 col-md-5 col-sm-5 mx-auto homediv1 ">
        <p className="display-4 pt-5 homecnt1">
          Get your favourite product wishlist ready.
        </p>
        <div className="m-4 ">
          <button className="regbtn" onClick={() => navigate("/register")}>
            {" "}
            Register
          </button>
          <button className="lgnbtn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-5 mx-auto homediv2 m-5">
        <img src={img1} className="w-100 mt-5 py-5" alt="homelogo" />
      </div>
    </div>
  );
}

export default Home;
