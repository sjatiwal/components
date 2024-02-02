import React from "react";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { logout } from "../action/userAction";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute top-0 w-full flex direction-row justify-between px-10  bg-blue-500 h-16 items-center z-50">
      <div>Magnus</div>
      <div className="flex items-center">
        <div>
          <RiLogoutCircleRFill className="h-6 w-6" />
        </div>
        <div className="ml-2" onClick={() => dispatch(logout())}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
