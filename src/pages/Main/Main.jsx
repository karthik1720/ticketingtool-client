import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./main.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Incident from "../Incident/Incident";
import View from "../../components/view/View";
import Success from "../Incident/Success";
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
      {/* <Footer /> */}

      {/* <Routes>
    <Route path="/" element={<MainAsda />}></Route>
    <Route path="yes" element={<Sidebar></Sidebar>}></Route>
  </Routes> */}

      {/* <div className="HomeGridRow">
  <div className="Sidebar">
  <Sidebar></Sidebar>
  </div>
  <div className="Main">
  <Main></Main>
  </div>
  </div>
  <div className="Footer">
  <Footer></Footer>
</div> */}
    </div>
  );
};

export default Main;
