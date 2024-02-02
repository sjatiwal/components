import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import Title from "../component/title";

const CssProperties = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tab = (data) => {
    setActiveTab(data);
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const [selectedAlert, setSelectedAlert] = useState([]);

  const showAlert = (data) => {
    setSelectedAlert([...selectedAlert, data]);
  };

  useEffect(() => {
    setTimeout(() => {
      setSelectedButton("");
    }, 500);
  }, [selectedButton]);

  const links = [
    {
      label: "Link1",
      path: "www.google.com",
      color: "text-red-400",
    },
    {
      label: "Link2",
      path: "www.youtube.com",
      color: "text-yellow-400",
    },
    {
      label: "Link3",
      path: "www.w3school.com",
      color: "text-blue-400",
    },
    {
      label: "Link4",
      path: "www.indeed.com",
      color: "text-green-400",
    },
    {
      label: "Link5",
      path: "www.google.com",
      color: "text-orange-400",
    },
  ];

  const labels = [
    {
      label: "Default",
      bgColor: "bg-slate-400",
    },
    {
      label: "Primary",
      bgColor: "bg-blue-300",
    },
    {
      label: "Success",
      bgColor: "bg-green-400",
    },
    {
      label: "Info",
      bgColor: "bg-sky-500",
    },
    {
      label: "Warning",
      bgColor: "bg-yellow-500",
    },
    {
      label: "Danger",
      bgColor: "bg-red-500",
    },
  ];

  const buttons = [
    {
      label: "Default",
      bgColor: "bg-slate-400",
    },
    {
      label: "Primary",
      bgColor: "bg-blue-300",
    },
    {
      label: "Success",
      bgColor: "bg-green-400",
    },
    {
      label: "Warning",
      bgColor: "bg-yellow-500",
    },
    {
      label: "Danger",
      bgColor: "bg-red-500",
    },
  ];

  const alerts = [
    {
      label: "Success! Indicates a successful or positive action.",
      bgColor: "bg-green-400",
      show: "1",
    },
    {
      label: "Info! Indicates a neutral informative change or action.",
      bgColor: "bg-sky-400",
      show: "2",
    },
    {
      label: "Warning! Indicates a warning that might need attention.",
      bgColor: "bg-yellow-500",
      show: "3",
    },
    {
      label: "Danger! Indicates a dangerous or potentially negative action.",
      bgColor: "bg-red-500",
      show: "4",
    },
  ];

  const bars = [
    {
      bgColor: "bg-green-400",
      width: "w-[90%]",
    },
    {
      bgColor: "bg-sky-400",
      width: "w-[50%]",
    },
    {
      bgColor: "bg-yellow-500",
      width: "w-[70%]",
    },
    {
      bgColor: "bg-red-500",
      width: "w-[40%]",
    },
  ];

  return (
    <>
      <Title title="CssProperty" />
      <div className="p-4">
        <div className="text-2xl">Css Properties</div>
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
              Links
            </span>
            <span
              className={`${
                activeTab === 2
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
              onClick={() => tab(2)}
            >
              Labels
            </span>
            <span
              className={`${
                activeTab === 3
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
              onClick={() => tab(3)}
            >
              Button
            </span>
            <span
              className={`${
                activeTab === 4
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
              onClick={() => tab(4)}
            >
              Alert
            </span>
            <span
              className={`${
                activeTab === 5
                  ? "bg-white border-t-2 border-blue-400"
                  : "bg-blue-400"
              } px-2 py-1 mt-2 md:mt-0 md:ml-2`}
              onClick={() => tab(5)}
            >
              Progress Bars
            </span>
          </div>
          <div className="border-2 border-slate-300 h-60 overflow-scroll flex justify-center items-center">
            {activeTab === 1 && (
              <div>
                {links.map((item) => {
                  return (
                    <Link
                      target="_blank"
                      key={item.label}
                      to={`https://${item.path}`}
                      className={`ml-4 ${item.color}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
            {activeTab === 2 && (
              <div>
                {labels.map((item) => {
                  return (
                    <label
                      key={item.label}
                      className={`${item.bgColor} ml-4 px-2 py-1`}
                    >
                      {item.label}
                    </label>
                  );
                })}
              </div>
            )}
            {activeTab === 3 && (
              <div className="flex flex-row">
                {buttons.map((item) => {
                  return (
                    <button
                      key={item.label}
                      className={`${item.bgColor} ml-4 px-2 py-1 ${
                        selectedButton === item.label
                          ? "border-2 border-black"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedButton(item.label);
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
            {activeTab === 4 && (
              <div className="w-full m-2">
                {alerts.map((item) => {
                  return (
                    !selectedAlert.includes(item.show) && (
                      <div
                        className={` ${item.bgColor} flex relative items-center justify-between mt-2`}
                        key={item.label}
                      >
                        <div key={item.bgColor} className={` m-2 px-2 py-1 `}>
                          {item.label}
                        </div>
                        <div
                          key={item.show}
                          className="pr-2"
                          onClick={() => showAlert(item.show)}
                        >
                          <RiCloseFill />
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            )}
            {activeTab === 5 && (
              <div className="w-full m-2 ">
                {bars.map((item) => {
                  return (
                    <div className="bg-slate-200">
                      <div
                        key={item.bgColor}
                        className={`${item.bgColor} ${item.width} h-8 my-2`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CssProperties;
