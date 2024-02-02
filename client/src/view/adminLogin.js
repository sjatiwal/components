import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Title from "../component/title";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [adminLogin, setAdminLogin] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (email !== "" && password !== "") {
      setAdminLogin(true);
    }
  };

  return (
    <>
      <Title title="Admin Login" />
      <div className="absolute top-0 left-0 z-50 w-[100%] h-[100vh] overflow-hidden bg-slate-200  flex flex-col items-center">
        <div className="text-center pt-10 text-3xl">Magnus</div>
        <form
          className="w-[300px] md:w-[400px] mt-10 bg-white h-auto"
          onSubmit={formSubmit}
        >
          <div className="pt-4 text-center">Admin-Sign In</div>
          {adminLogin && (
            <div className="relative bg-red-500 mx-4 h-8 flex justify-center items-center">
              Invalid Email or Password
              <RiCloseFill
                className="absolute right-1"
                onClick={() => setAdminLogin(false)}
              />
            </div>
          )}
          <div className="felx flex-col mx-4 mt-4">
            <div>
              <input
                className="border-2 border-slate-300 w-full px-2"
                placeholder="Email or Mobile No"
                value={email}
                onChange={(e) => [
                  setEmail(e.target.value),
                  setEmailError(false),
                ]}
              />
            </div>
            {emailError && (
              <div className="text-red-500">
                Please enter email or mobile no.
              </div>
            )}
            <div className="mt-3">
              <input
                className="border-2 border-slate-300 w-full px-2"
                placeholder="Password"
                value={password}
                onChange={(e) => [
                  setPassword(e.target.value),
                  setPasswordError(false),
                ]}
              />
            </div>
            {passwordError && (
              <div className="text-red-500">Please enter password.</div>
            )}
          </div>

          <div className="flex justify-between mt-6 mx-4 pb-5">
            <Link to="/login">
              <input className="text-blue-600" type="button" value="Back" />
            </Link>
            <input
              type="submit"
              value="Sign In"
              className="bg-blue-400 px-2 py-1"
            />
          </div>
        </form>
        <div className="bg-blue-400 mt-10 mx-8 px-4 py-2">
          JALA Technologies offers Job Guaranteed Programs for Freshers to 10
          years’ experience on JAVA/.Net / Automation Testing / Dev-Ops /
          Middleware Technologies / WebLogic / JBoss / Tomcat /
          Python/AI/DataScience and for those who want to be a software engineer
          in 90 Days. Contact Details:
          http://jalatechnologies.com/contact-us.html
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
