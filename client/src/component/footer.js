import React from "react";

const Footer = ({ windowWidth }) => {
  return (
    <div className="z-[-5] h-auto p-4 w-[100%] border-t-2 border-slate-300 ">
      <div className={`${windowWidth > 768 ? "ml-52" : "ml-4"} text-left `}>
        Copyright © 2023 JALA Technologies. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
