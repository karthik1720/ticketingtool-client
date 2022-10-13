import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavbarLeft">
        <h1 className="NavbarLogo">Tool</h1>
      </div>
      <div className="NavbarCenter">
        <SearchIcon className="NavbarSearchIcon"></SearchIcon>
        <input type="text" className="NavbarSearch" />
      </div>
      <div className="NavbarRight">Profile</div>
    </div>
  );
};

export default Navbar;
