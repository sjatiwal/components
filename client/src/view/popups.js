import React, { useState } from "react";
import Title from "../component/title";

const Popups = () => {
  const [inWindowPopup, setInWindowPopup] = useState(false);
  const popup = (url) => {
    // const popupUrl = "https://google.com";
    const options =
      "width=400px,height=300px,toolbar=no,location=no,resizable=yes";
    window.open(url, "Popup Window", options);
  };

  const alert1 = () => {
    alert("This is an alert box");
  };

  const confirm1 = () => {
    const result = window.confirm("confirm Message Box");

    if (result) {
      // alert("You confirmed the action.");
    } else {
      // alert("You canceled the action.");
    }
  };

  const prompt1 = () => {
    const userInput = window.prompt("Please enter your name:", "Mr. X");

    if (userInput !== null) {
      // alert("Hello, " + userInput + "!");
    } else {
      // alert("You canceled or left the prompt empty.");
    }
  };

  const inWindow1 = () => {
    setInWindowPopup(true);
  };

  const duplicateTab1 = () => {
    const currentUrl = window.location.href;
    window.open(currentUrl, "_blank");
  };
  const labels = [
    { label: "Popup One", func: () => popup("https://google.com") },
    { label: "Popup Two", func: () => popup("https://youtube.com") },
    { label: "Popup Three", func: () => popup("https://w3schools.com") },
    { label: "Popup Duplicate", func: () => popup("https://chatgpt.com") },
    { label: "Duplicate Tab", func: duplicateTab1 },
    { label: "In Window Popup", func: inWindow1 },
    { label: "Alert Box", func: alert1 },
    { label: "Confirm Box", func: confirm1 },
    { label: "Prompt Box", func: prompt1 },
  ];
  return (
    <>
      <Title title="Popup" />
      <div className="p-4 ">
        <div className="text-2xl">Popups</div>
        <div className="mt-8">
          <div>
            <span className="bg-white border-t-2 border-blue-400 px-2 py-1">
              Popups
            </span>
          </div>

          <div className="border-2 border-slate-300 p-4 ">
            <div className="flex flex-col m-2 md:grid grid-cols-3 gap-8">
              {labels.map((item) => {
                return (
                  <div
                    className="bg-blue-400 items-center justify-center px-2 py-2"
                    onClick={item.func}
                    key={item.label}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
            <div
              className={`inWindow absolute left-[25%] top-[25%] bg-slate-200 w-[50%] h-1/2 flex items-center justify-center ${
                inWindowPopup ? "block" : "hidden"
              }`}
            >
              <div>World is beautiful</div>
              <div
                onClick={() => setInWindowPopup(false)}
                className="absolute right-2 bottom-2 bg-red-600 py-1 px-2"
              >
                Close
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popups;
