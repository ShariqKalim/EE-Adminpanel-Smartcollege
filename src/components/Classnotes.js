import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Classnotes = () => {
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
    } else {
      history.push("/");
    }
  }, []);
  return (
    <>
      <img src="images/S.png" alt="logo" className="mx-auto" />
      <div className="w-8/12 mx-auto flex flex-wrap justify-around mt-20">
        <NavLink to="/ECT_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Electric Circuit Theory</h5>
          </div>
        </NavLink>
        <NavLink to="/MATH_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Mathematics-III</h5>
          </div>
        </NavLink>
        <NavLink to="/EFT_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Electromagnetic Field Theory</h5>
          </div>
        </NavLink>
        <NavLink to="/AE_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Analog Electronics</h5>
          </div>
        </NavLink>
        <NavLink to="/EM_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Engineering Mechanics</h5>
          </div>
        </NavLink>
        <NavLink to="/BFE_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Biology for Engineers</h5>
          </div>
        </NavLink>
        <NavLink to="/IC_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Indian Constitution</h5>
          </div>
        </NavLink>
        <NavLink to="/NM_PANEL" className="no-underline text-gray-900">
          <div className="w-72 p-5 border-2 shadow-lg transform mt-10 hover:scale-110">
            <h4 className="text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium w-full">
              Classnotes
            </h4>
            <h5 className="text-center p-5">Numerical Methods Lab</h5>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Classnotes;
