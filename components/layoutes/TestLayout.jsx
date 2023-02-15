import React from "react";
import { Outlet } from "react-router-dom";

const TestLayout = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1>navbar</h1>
      </div>
      <div className="container">
        <Outlet />
      </div>
      <div className="container">
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default TestLayout;
