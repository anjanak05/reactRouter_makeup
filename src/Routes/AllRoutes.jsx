import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hair from "./Hair";
import Makeup from "./Makeup";
import Skin from "./Skin";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Skin" element={<Skin />}></Route>
        <Route path="/Hair" element={<Hair />}></Route>
        <Route path="/Makeup" element={<Makeup />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
