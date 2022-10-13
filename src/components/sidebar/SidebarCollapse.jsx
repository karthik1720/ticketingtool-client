import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useCollapse from "react-collapsed";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function SidebarCollapse(props) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse();

  return (
    <div className="SidebarCollapse">
      <div
        className="SidebarCollapse2"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <div className="CollapseButton">{props.title}</div>
        <ArrowDropDownIcon></ArrowDropDownIcon>
      </div>

      <div {...getCollapseProps()} className="CollapseListsDiv">
        <ul className="CollapseLists">
          {props.list.map((list, _index) => (
            <li className="CollapseList" key={_index}>
              <Link className="Link" to={list.link}>
                {list.subtitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarCollapse;
