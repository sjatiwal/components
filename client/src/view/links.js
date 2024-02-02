import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiLinkedinBoxFill, RiYoutubeFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Title from "../component/title";

const Links = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tab = (data) => {
    setActiveTab(data);
  };

  const links = [
    {
      link: "Link1",
      textColor: "text-blue-400",
      path: "https://www.google.com",
    },
    {
      link: "Link2",
      textColor: "text-red-400",
      path: "https://www.youtube.com",
    },
    {
      link: "Link3",
      textColor: "text-green-400",
      path: "https://www.chatgpt.com",
    },
  ];

  const brokenLinks = [
    {
      link: "Link1",
      textColor: "text-blue-400",
      path: "/www.google.com/",
    },
    {
      link: "Link2",
      textColor: "text-red-400",
      path: "/www.youtube.com/",
    },
    {
      link: "Link3",
      textColor: "text-green-400",
      path: "/www.chatgpt.com/",
    },
  ];

  const statusCode = [
    {
      satus: "200",
      textColor: "text-green-400",
      path: "https://www.restapitutorial.com/httpstatuscodes.html",
    },
    {
      satus: "301",
      textColor: "text-blue-400",
      path: "https://magnus.jalatechnologies.com/ErrorHandler/RedirectPermanently",
    },
    {
      satus: "404",
      textColor: "text-red-400",
      path: "https://magnus.jalatechnologies.com/ErrorHandler/NotFound",
    },
    {
      satus: "500",
      textColor: "text-red-400",
      path: "https://magnus.jalatechnologies.com/ErrorHandler/InternalServerErrors",
    },
  ];

  const imgLink = [
    {
      img: <RiLinkedinBoxFill className="w-20 h-20" />,
      id: "1",
      path: "https://www.linkedin.com",
    },
    {
      img: <FcGoogle className="w-20 h-20" />,
      id: "2",
      path: "https://www.google.com",
    },
    {
      img: <RiYoutubeFill className="w-20 h-20 text-red-600" />,
      id: "3",
      path: "https://www.youtube.com",
    },
  ];
  return (
    <>
      <Title title="Links" />
      <div className="p-4">
        <div className="text-2xl">Links</div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row">
            <span
              className={`${
                activeTab === 1
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 `}
              onClick={() => tab(1)}
            >
              Working Links
            </span>
            <span
              className={`${
                activeTab === 2
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
              onClick={() => tab(2)}
            >
              Broken Links
            </span>
            <span
              className={`${
                activeTab === 3
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
              onClick={() => tab(3)}
            >
              Image Links
            </span>
            <span
              className={`${
                activeTab === 4
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
              onClick={() => tab(4)}
            >
              Status Code
            </span>
          </div>
          <div className="border-2 border-slate-300 h-60 overflow-scroll flex justify-center items-center">
            {activeTab === 1 &&
              links.map((item) => {
                return (
                  <Link
                    key={item.link}
                    to={item.path}
                    className={`${item.textColor} m-2`}
                    target="_blank"
                  >
                    {item.link}
                  </Link>
                );
              })}
            {activeTab === 2 &&
              brokenLinks.map((item) => {
                return (
                  <Link
                    key={item.link}
                    to={item.path}
                    className={`${item.textColor} m-2`}
                    target="_blank"
                  >
                    {item.link}
                  </Link>
                );
              })}
            {activeTab === 3 &&
              imgLink.map((item) => {
                return (
                  <Link
                    target="_blank"
                    key={item.id}
                    to={item.path}
                    className="m-2"
                  >
                    {item.img}
                  </Link>
                );
              })}

            {activeTab === 4 &&
              statusCode.map((item) => {
                return (
                  <Link
                    target="_blank"
                    key={item.satus}
                    className={`${item.textColor} m-2`}
                    to={item.path}
                  >
                    {item.satus}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
