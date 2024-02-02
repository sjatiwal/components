import React, { useState } from "react";
import Title from "../component/title";

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  return (
    <>
      <Title title="Tooltip" />
      <div className="p-4">
        <div className="text-2xl">Tooltip</div>
        <div className="mt-8">
          <div>
            <span className="bg-white border-t-2 border-blue-400 px-2 py-1">
              Tooltips
            </span>
          </div>
          <div className="border-2 relative h-40 border-slate-300 p-4 flex justify-center items-center flex-col">
            <button
              className={`bg-blue-400 px-2 py-1 absolute`}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setBtnClicked(true)}
            >
              Check The Tooltip Before You Click.
            </button>
            {showTooltip && (
              <div
                className="mt-20"
                style={{
                  top: "-25px",
                  left: "50%",
                  width: "0",
                  height: "0",
                  borderTop: "0",
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderBottom: "15px solid black",
                }}
              ></div>
            )}
            {showTooltip && !btnClicked && (
              <div className="bg-black  text-white rounded px-2 py-1  ">
                You Have Not Clicked This Button.
              </div>
            )}
            {showTooltip && btnClicked && (
              <div className="bg-black  text-white rounded px-2 py-1 ">
                Thankyou for being here.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooltip;
