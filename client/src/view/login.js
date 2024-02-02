import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  // register,
  login,
} from "../action/userAction";
import Title from "../component/title";

import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showError, setShowError] = useState(false);

  const { error, isAuthenticated } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (email !== "" && password !== "") {
      // dispatch(register(email, password));
      dispatch(login(email, password));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error !== undefined) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  }, [error]);
  return (
    <>
      <Title title="Login" />
      <div className="absolute top-0 left-0 z-50 w-[100%] min-h-screen bg-slate-200 pt-8 text-center">
        <div className="text-3xl">JALA Academy</div>
        <div className="text-2xl">Login Credentials</div>
        <div className="mt-[5px]">Email : training@jalaacademy.com</div>
        <div className="mt-[5px]">Password : jobprogram</div>
        <div className=" flex justify-center">
          <div className="bg-yellow-200 w-[450px]">
            Learn Everything on Real-Time Scenarios
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <form
            className="loginForm bg-white w-[90%]  h-[400px] md:w-[450px]"
            onSubmit={signUp}
          >
            <div className="relative mt-4 flex justify-center items-center">
              {showError && (
                <div className="absolute bg-red-500 w-full py-1">{error}</div>
              )}
            </div>

            <div className="mt-4">Sign In</div>
            <div className="mt-4">
              <input
                placeholder="Email or Mobile No"
                type="text"
                value={email}
                autoComplete="on"
                onChange={(e) => [
                  setEmail(e.target.value),
                  setEmailError(false),
                ]}
                className="border-2  border-slate-300 w-[80%] md:w-[350px] p-2 "
              />
            </div>
            {emailError && (
              <div className="relative">
                <div className="text-red-500 absolute left-12 px-1">
                  Please enter email or mobile no.
                </div>
              </div>
            )}
            <div className="mt-8">
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => [
                  setPassword(e.target.value),
                  setPasswordError(false),
                ]}
                className="border-2 border-slate-300 w-[80%] md:w-[350px] p-2"
              />
            </div>
            {passwordError && (
              <div className="relative">
                <div className="text-red-500 absolute left-12 px-1">
                  Please enter password.
                </div>
              </div>
            )}
            <div className="justify-between flex flex-row mt-8 px-14">
              <div>
                <input type="checkbox" className="w-6 h-6" />
                <span className="ml-4 align-super">Remember Me</span>
              </div>
              <div>
                <input
                  type="submit"
                  value="Sign In"
                  className="bg-blue-400 px-4 py-1"
                />
              </div>
            </div>
            <div className="mt-4">-OR-</div>
            <Link to="/forgotPassword">
              <input
                type="button"
                value="Forgot Password"
                className="bg-blue-400 w-[80%] md:w-[350px]  py-2 mt-4"
              />
            </Link>
            <div className="mt-4 text-blue-700">
              <Link to="/account/admin">Admin Login</Link>
            </div>
          </form>
        </div>
        <div className="bg-blue-400 m-4 p-4">
          JALA Academy offers Job Guaranteed Programs for Freshers to 12 years’
          experience on Full Stack Development / Automation Testing / Dev-Ops /
          QA/ SDET/Cyber Security / RPA / Cloud Technologies. Training would be
          completely on live Project scenarios Read our website JALA Academy for
          more details : https://jalaacademy.com/
        </div>
      </div>
    </>
  );
};

export default Login;
