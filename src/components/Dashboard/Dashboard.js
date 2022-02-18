import React, { useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Dashboard = ({ currentUser, setCurrentUser }) => {
  const [currentState, setCurrentState] = useState("Overview");

  return (
    <div>
      <div className="flex justify-between">
        <Sidebar
          currentUser={currentUser}
          currentState={currentState}
          setCurrentUser={setCurrentUser}
          setCurrentState={setCurrentState}
        />
        <Main currentUser={currentUser} currentState={currentState} />
      </div>
    </div>
  );
};

export default Dashboard;
