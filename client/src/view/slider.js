import React, { useState } from "react";
import Title from "../component/title";

const Slider = () => {
  const [value, setValue] = useState(0); // Initial slider value

  return (
    <>
      <Title title="Slider" />
      <div className="p-4">
        <div className="text-2xl">Slider</div>
        <div className="mt-8 border-2 border-slate-300">
          <div>
            <span className="border-t-2 border-blue-400">Slider</span>
          </div>
          <div className="border-t-2 border-slate-300 h-40 flex  flex-col  justify-center">
            <div className="w-[100%] ">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-[80%] ml-[10%]"
              />
            </div>
            <div className="mt-4 ml-[10%]">Current Slider Value : {value}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
