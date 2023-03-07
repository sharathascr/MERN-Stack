import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { BsPersonPlusFill } from "react-icons/bs";

function Register() {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let formSubmit = async (userObj) => {
    let result = await axios.post(
      "http://localhost:4000/user/create-user",
      userObj
    );

    if (result.data === "user already exist") {
      alert("user already existed");
    } else {
      alert("user registration successful");
      navigate("/login");
    }
  };
  return (
    <div className="regApp p-4">
      <div className="card col-lg-4 col-md-6 col-sm-8 col-10 mx-auto  border-0 shadow-lg cardapp">
        <div className="card-body">
          <p className="regicon">
            <BsPersonPlusFill />
          </p>
          <p className="heading1">Create Account</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="m-3">
              <input
                className="form-control"
                type="text"
                placeholder="username"
                {...register("user", { required: true })}
              />
              {errors.user?.type === "required" && (
                <p className="text-danger errs">*username is required</p>
              )}{" "}
              <br />
              <input
                className="form-control"
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-danger errs">*email is required</p>
              )}
              <br />
              <input
                className="form-control"
                type="password"
                placeholder="password"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <p className="text-danger errs"> *password is required</p>
              )}
              <br />
              <div className="text-center">
                <button className="btn2 btn" type="submit">
                  Register
                </button>
              </div>
              <p className="pt-5 reglastp">
                Have already an account?{" "}
                <span className="regspan" onClick={() => navigate("/login")}>
                  Login here
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
