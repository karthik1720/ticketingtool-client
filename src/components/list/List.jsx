import React, { useEffect } from "react";
import "./list.css";
import { Link } from "react-router-dom";
import httpService from "../../httpService";
const List = (props) => {
  return (
    <div className="ListContainer">
      <div className="ListTitleWrapper">
        <h4 className="ListTitle">Number</h4>
        <h4 className="ListTitle">Title</h4>
        <h4 className="ListTitle">Description</h4>
        <h4 className="ListTitle">Created On</h4>
        <h4 className="ListTitle">Ends On</h4>
        <h4 className="ListTitle">Priority</h4>
      </div>
      {props.list.map((l, _index) => (
        <div className="ListItems" key={_index}>
          <h5 className="ListItem">{l.ID}</h5>
          <h5 className="ListItem"> {l.TITLE}</h5>
          <h5 className="ListItem">{l.DESCRIPTION}</h5>
          <h5 className="ListItem">{l.CREATED_ON}</h5>
          <h5 className="ListItem">{l.ENDS_ON}</h5>
          <h5 className="ListItem">{l.PRIORITY}</h5>
        </div>
      ))}
    </div>
  );
};

export default List;
