import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-[50%] flex flex-col justify-center items-center">
      <div className="text-3xl"> Page Not Found</div>
      <div className="flex justify-center mt-4 text-blue-600 underline underline-offset-4">
        <Link to="/">Visit to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
