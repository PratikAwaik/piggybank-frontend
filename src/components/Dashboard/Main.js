import React from "react";

const Main = ({ currentUser, currentState }) => {
  return (
    <div className="w-4/5 p-5">
      <div>
        <h2 className="font-bold text-blue text-3xl m-5">
          Welcome {currentUser.username}
        </h2>

        <p className="font-bold text-xl text-blue m-5">{currentState}</p>
      </div>
    </div>
  );
};

export default Main;
