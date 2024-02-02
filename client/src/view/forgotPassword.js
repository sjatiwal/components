import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Title from "../component/title";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    if (email === "") {
      setEmailError(true);
      setValidEmail(false);
    }

    if (email !== "") {
      var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setValidEmail(!emailPattern.test(email));
    }
  };

  return (
    <>
      <Title title="Forgot Your Password?" />
      <div className="absolute top-0 left-0 z-50 w-[100%] h-[100vh] bg-slate-200  overflow-hidden flex flex-col items-center">
        <div className="text-center pt-10 text-3xl">Magnus</div>
        <form className="w-[400px] mt-10 bg-white h-auto" onSubmit={formSubmit}>
          <div className="pt-4 text-center">Forgot Password</div>
          <div className="absolute right-4 top-4 w-72 ">
            {email === "" && message && (
              <div className="relative bg-red-500 mx-4 h-8 flex justify-center items-center">
                Please Enter Email
                <RiCloseFill
                  className="absolute right-1"
                  onClick={() => setMessage(false)}
                />
              </div>
            )}

            {email !== "" && message && !validEmail && (
              <div className="relative bg-red-500 mx-4 h-8 flex justify-center items-center">
                Your Email does not exist
                <RiCloseFill
                  className="absolute right-1"
                  onClick={() => setMessage(false)}
                />
              </div>
            )}

            {email !== "" && message && validEmail && (
              <div className="relative bg-red-500 mx-4 h-8 flex justify-center items-center">
                Please Enter a Valid Email
                <RiCloseFill
                  className="absolute right-1"
                  onClick={() => setMessage(false)}
                />
              </div>
            )}
          </div>
          <div className="felx flex-col mx-4 mt-4">
            <div>
              <input
                className="border-2 border-slate-300 w-full px-2"
                placeholder="Email"
                value={email}
                onChange={(e) => [
                  setEmail(e.target.value),
                  setEmailError(false),
                ]}
              />
            </div>
            {emailError && (
              <div className="text-red-500">Please enter Email</div>
            )}
            {validEmail && (
              <div className="text-red-500">Please enter a valid email.</div>
            )}
          </div>
          <div className="flex justify-between mt-6 mx-4 pb-5">
            <Link to="/login">
              <input className="text-blue-600" type="button" value="Back" />
            </Link>
            <input
              type="submit"
              value="Get Password"
              className="bg-blue-400 px-2 py-1"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
