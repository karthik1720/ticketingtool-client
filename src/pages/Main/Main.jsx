import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import "./main.css";
import Navbar from "../../components/Navbar/Navbar";

import Incident from "../Incident/Incident";
import View from "../../components/view/View";

const Main = () => {
  return (
    <div className="MainContainer">
      <Navbar></Navbar>
      <div className="MainContainer2">
        <Sidebar></Sidebar>
        <div className="MainScreen">
          <Routes>
            <Route path="*" element={<div>Page not found</div>}></Route>
            <Route path="/" element={<div>This is main screen</div>}></Route>
            <Route path="/incident" element={<Incident />}></Route>
            <Route path="/view" element={<View></View>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Main;
