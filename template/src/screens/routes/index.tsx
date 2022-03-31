import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "../home";

export const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
    </ReactRoutes>
  );
};
