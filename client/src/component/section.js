import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUserCircle, HiUserGroup } from "react-icons/hi";
import { RiHome4Fill, RiIndentIncrease, RiSettings5Fill } from "react-icons/ri";
import { MdCreate, MdOutlineSearch } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";

const Section = ({ position, showSection, setShowSection }) => {
  const [viewEmp, setViewEmp] = useState(false);
  const [viewMore, setViewMore] = useState(false);

  const moreTabs = [
    {
      name: "Multiple Tabs",
      path: "/tabs",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Autocomplete",
      path: "/autocomplete",
    },
    {
      name: "Collapsible Content",
      path: "/collapsible-content",
    },
    {
      name: "Images",
      path: "/images",
    },
    {
      name: "Slider",
      path: "/slider",
    },
    {
      name: "ToolTips",
      path: "/tooltips",
    },
    {
      name: "Popups",
      path: "/popups",
    },
    {
      name: "Links",
      path: "/links",
    },
    {
      name: "CSS Properties",
      path: "/css-properties",
    },
    {
      name: "IFrames",
      path: "/iframe",
    },
  ];
  return (
    <div>
      <div
        className="absolute block md:hidden top-10 left-2 z-50"
        onClick={() => setShowSection(!showSection)}
      >
        <div className="text-black z-10">
          <GiHamburgerMenu />
        </div>
      </div>
      <div
        className={`bg-slate-500 absolute
          ${!showSection ? "block" : "hidden"}
          ${position === "absolute" ? "block" : "z-10"}
       top-0 z-0 min-h-screen w-52 pt-20 text-black`}
      >
        <div className="pl-2 flex">
          <HiUserCircle className="w-12 h-12  text-white bg-black rounded-full" />
          <span className="ml-1 flex flex-col">
            <span>Guest User</span>
            <span>user</span>
          </span>
        </div>
        <div className="mt-2 pl-4 py-1 hover:bg-slate-700">
          <Link to="/">
            <span className="flex items-center">
              <span>
                <RiHome4Fill />
              </span>
              <span className="ml-2">Home</span>
            </span>
          </Link>
        </div>
        <div
          onClick={() => setViewEmp(!viewEmp)}
          className="pl-4 py-1 hover:bg-slate-700 items-center flex"
        >
          <span>
            <HiUserGroup />
          </span>
          <span className="ml-2">Employee</span>
        </div>
        {viewEmp && (
          <div>
            <div className="pl-6 py-1 hover:bg-slate-700">
              <Link to="/employee/create">
                <span className="flex items-center">
                  <span>
                    <MdCreate />
                  </span>
                  <span className="ml-2">Create</span>
                </span>
              </Link>
            </div>
            <div className="pl-6 py-1 hover:bg-slate-700">
              <Link to="/employee/search">
                <span className="flex items-center">
                  <span>
                    <MdOutlineSearch className="text-xl" />
                  </span>
                  <span className="ml-1">Search</span>
                </span>
              </Link>
            </div>
          </div>
        )}
        <div
          onClick={() => setViewMore(!viewMore)}
          className="pl-4 py-1 hover:bg-slate-700 flex items-center"
        >
          <span>
            <RiIndentIncrease />
          </span>
          <span className="ml-2">More</span>
        </div>
        {viewMore && (
          <div>
            {moreTabs.map((item) => {
              return (
                <div key={item.name} className="pl-6 py-1 hover:bg-slate-700">
                  <Link to={item.path} className="flex items-center">
                    <span key={item.name + "1"}>
                      <FaHandPointRight />
                    </span>
                    <span key={item.path + "1"} className="ml-2">
                      {item.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        <div className="pl-4 py-1 hover:bg-slate-700 items-center flex">
          <span>
            <RiSettings5Fill />
          </span>
          <span className="ml-2">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Section;
