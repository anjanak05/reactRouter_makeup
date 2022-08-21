import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Eyes from "./Eyes";
import MakeupFace from "./MakeupFace";
import Lips from "./Lips";
import Nail from "./Nail";
import SingleProdPage from "./SingleProdPage";
import Cart from "./Cart";
import Login from "./Login"
import PrivateRoute from "../Components/PrivateRoute";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path="/Eyes" element={<Eyes />} />
        <Route path="/Eyes/:id" element={<SingleProdPage/>} />

        <Route path="/Lips" element={<Lips />}></Route>
        <Route path="/Lips:id" element={<SingleProdPage/>} />

        <Route path="/MakeupFace" element={<MakeupFace />}></Route>
        <Route path="/MakeupFace:id" element={<SingleProdPage/>} />

        <Route path="/Nail" element={<Nail />}></Route>
        <Route path="/Nail:id" element={<SingleProdPage/>} />

        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Login" element={<Login/>}></Route>



      </Routes>
    </div>
  );
};

export default AllRoutes;
