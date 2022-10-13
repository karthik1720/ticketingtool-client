import List from "../list/List";
import "./view.css";
import httpService from "../../httpService";
import { useEffect } from "react";
import { useState } from "react";
const View = () => {
  const [dummy, setDummy] = useState([]);
  useEffect(() => {
    httpService.get("/incident/view").then((response) => {
      setDummy(response.data);
    });
  }, [1]);

  console.log(dummy);

  return (
    <div className="ViewContainer">
      <div className="ViewTopbar">
        <span className="ViewTopbar1">Incidents</span>
        <button className="ViewTopbarButton">New</button>
        <label className="ViewTopbarLabel">Go to</label>
        <div className="ViewTopbarSearch">
          <select className="ViewTopbarSelect">
            <option>Number</option>
            <option>Opened</option>
            <option>State</option>
            <option>Priority</option>
          </select>
          <input type="text" className="ViewTopbarInput" />
        </div>
      </div>
      <List list={dummy}></List>
    </div>
  );
};

export default View;
