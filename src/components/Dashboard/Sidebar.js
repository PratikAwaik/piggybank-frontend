import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setCurrentUser, currentState, setCurrentState }) => {
  const navigate = useNavigate();
  const logOut = () => {
    window.localStorage.clear();
    setCurrentUser(null);
    navigate({ pathname: "/" });
  };

  const changeState = (state) => {
    setCurrentState(state);
  };

  const styleCurrentState = (state) => {
    return currentState === state ? "bg-blue-800 text-white rounded-lg" : "";
  };

  return (
    <div className="dashboard-sidebar w-80 bg-gray-50 shadow-lg h-screen overflow-y-hidden">
      <div className="px-10 py-5 h-full">
        <h3 className="font-bold text-2xl text-blue my-10">Piggy Bank</h3>
        <div className="flex flex-col justify-between h-5/6">
          <ul className="">
            <li
              role="button"
              className={`text-lg flex items-center p-3 hover:bg-blue-800 hover:text-white hover:rounded-lg mb-3 ${styleCurrentState(
                "Overview"
              )}`}
              onClick={() => changeState("Overview")}
            >
              <i className="ri-home-3-line text-xl mr-2"></i> Overview
            </li>
            <li
              role="button"
              className={`text-lg flex items-center p-3 hover:bg-blue-800 hover:text-white hover:rounded-lg mb-3 ${styleCurrentState(
                "Cards"
              )}`}
              onClick={() => changeState("Cards")}
            >
              <i className="ri-refund-line text-xl mr-2"></i> Cards
            </li>
            <li
              role="button"
              className={`text-lg flex items-center p-3 hover:bg-blue-800 hover:text-white hover:rounded-lg mb-3 ${styleCurrentState(
                "Payments"
              )}`}
              onClick={() => changeState("Payments")}
            >
              <i className="ri-secure-payment-fill text-xl mr-2"></i> Payments
            </li>
            <li
              role="button"
              className={`text-lg flex items-center p-3 hover:bg-blue-800 hover:text-white hover:rounded-lg mb-3 ${styleCurrentState(
                "Reports"
              )}`}
              onClick={() => changeState("Reports")}
            >
              <i className="ri-folder-chart-line text-xl mr-2"></i> Reports
            </li>
            <li
              role="button"
              className={`text-lg flex items-center p-3 hover:bg-blue-800 hover:text-white hover:rounded-lg mb-3 ${styleCurrentState(
                "Contacts"
              )}`}
              onClick={() => changeState("Contacts")}
            >
              <i className="ri-contacts-line text-xl mr-2"></i> Contacts
            </li>
          </ul>

          <ul>
            <li
              role="button"
              className={`text-lg flex items-center p-3 hover:bg-blue-800 hover:text-white hover:rounded-lg mb-3 ${styleCurrentState(
                "Settings"
              )}`}
              onClick={() => changeState("Settings")}
            >
              <i className="ri-settings-2-line text-xl mr-2"></i> Settings
            </li>

            <li
              role="button"
              onClick={logOut}
              className="text-lg flex items-center p-3 hover:bg-blue-800 hover:text-white hover:rounded-lg mb-3"
            >
              <i className="ri-logout-circle-r-line text-xl mr-2"></i> Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
