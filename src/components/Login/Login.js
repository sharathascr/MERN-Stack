import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/LoginContext";
import axios from "axios";
import "./Login.css";
import { IoMdPerson } from "react-icons/io";
function Login() {
  let { setLogin } = useContext(Context);

  let [err, setErr] = useState(false);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  let formSubmit = async (userObj) => {
    let result = await axios.put(`http://localhost:4000/user/login`, {
      user: userObj.user,
      password: userObj.password,
    });

    if (result.data.msg === "login success") {
      setLogin(true);
      sessionStorage.setItem("user", userObj.user);
      navigate("/listOfProducts");
    } else {
      alert("invalid username or password");
      setErr(true);
    }
  };
  return (
    <div className="loginapp p-5">
      <div className="card col-lg-4 col-md-6 col-sm-8 col-10 mx-auto  border-0 shadow-lg">
        <div className="card-body">
          <p className="lgicon">
            <IoMdPerson />
          </p>
          <p className="login">Login to Your Account</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="m-3">
              {err && (
                <label className="text-danger font-weight-bold text-center">
                  Invalid Username / Password
                </label>
              )}
              <input
                className="form-control rounded"
                name="username"
                type="text"
                placeholder={`username`}
                {...register("user", { required: true })}
              />

              {errors.user?.type === "required" && (
                <p className="text-danger errs">*Username is required</p>
              )}
              <br />
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="password"
                {...register("password", { required: true })}
              />

              {errors.password?.type === "required" && (
                <p className="text-danger errs">*Password is required</p>
              )}
              <br />
              <div className="text-center">
                <button className="btn btn-block btn-login" type="submit">
                  Login
                </button>
                <p className="p-3 lgnlastp">
                  Don't have an account?{" "}
                  <span
                    className="text-primary"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
