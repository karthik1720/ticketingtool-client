import "./sidebar.css";
import SidebarCollapse from "./SidebarCollapse";
import sidebarData from "./sidebardata.json";
const Sidebar = () => {
  const list = sidebarData;
  return (
    <div className="SidebarContainer">
      {list.map((list, _index) => (
        <div className="SidebarMenu" key={_index}>
          <SidebarCollapse
            title={list.title}
            list={list.contents}
          ></SidebarCollapse>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
