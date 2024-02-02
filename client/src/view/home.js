import React from "react";
import Title from "../component/title";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Title title="Magnus" />
      <div className=" text-center bg-slate-300 z-10 h-[calc(100vh-7.5rem)]">
        <div className="text-3xl pt-40">Welcome to JALA Academy</div>
        <div className="mt-10 ">
          <b>
            Do you want to Learn Selenium Automation completely with Practical
            Scenarios in 7 Days?
          </b>
        </div>
        <div className=" mx-4 mt-6 border-t-4 border-blue-400 bg-white py-6">
          You Learn Everything by doing projects if you are very serious to gat
          a software job in 60 days contact us :
          <Link
            target="_blank"
            to="http://jalatechnologies.com"
            className="text-blue-400"
          >
            http://jalatechnologies.com/contact-us.html
          </Link>
        </div>
        <div className="mx-4 mt-6 border-t-4 border-blue-400 bg-white py-6 text-left px-4">
          <div className="bg-yellow-300">
            For working people can double the salery in 60 Days
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
