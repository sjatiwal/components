import React from "react";
import Title from "../component/title";

const Iframe = () => {
  return (
    <>
      <Title title="Iframe" />
      <div className="p-4">
        <div className="text-2xl">Iframe</div>
        <div className="mt-8 ">
          <span className="border-x-2 border-slate-300">
            <span className="border-t-2 border-blue-400 px-2 ">Iframe</span>
          </span>
        </div>
        <div className="border-2 border-slate-300">
          <div className="text-center mt-8">Frame One</div>
          <div className="mt-4">
            <iframe width="50%" height="100%" title="First iframe" />
          </div>
          <div className="text-center mt-8">Frame Two</div>
          <div className="w-full h-[500px] mt-4">
            <iframe
              src="www.google.com"
              width="50%"
              height="100%"
              frameborder="0"
              className="ml-[25%]"
              title="Second iframe"
            />
          </div>
          <div className="text-center mt-8">Frame Three</div>
          <div className="mt-4">
            <iframe width="50%" height="100%" title="third iframe" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Iframe;
