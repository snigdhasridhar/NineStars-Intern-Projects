import React from "react";
import './Sidebar.css';
import { FiMenu, FiSearch } from "react-icons/fi"; 
import {
  HiOutlineChevronDoubleRight,
  HiOutlineViewList,
  HiOutlineCalendar,
  HiOutlineTemplate
} from "react-icons/hi";
import { FiSliders, FiLogOut } from 'react-icons/fi';




const taskItems = [
  { icon: <HiOutlineChevronDoubleRight />, label: "Upcoming", count: 12,  },
  { icon: <HiOutlineViewList />, label: "Today", count: 5 },
  { icon: <HiOutlineCalendar />, label: "Calendar" },
  { icon: <HiOutlineTemplate />, label: "Sticky Wall" }
];


// const listItems = [
//   { icon: <FaCircle style={{ color: 'hotpink', fontSize: '16px' }} />, label: "Personal", count: 6 },
//   { icon: <FaCircle style={{ color: 'gold', fontSize: '16px' }} />, label: "Work", count: 3 },
//   { icon: <FaCircle style={{ color: 'skyblue', fontSize: '16px' }} />, label: "List 1", count: 6 },
//   {icon:<FaPlus  style={{ color: 'grey', fontSize: '16px' }}/>,label:"Add New List"}
// ];
const listItems = [
  {
    iconClass: "square-icon red",
    label: "Personal",
    count: 3,
  },
  {
    iconClass: "square-icon cyan",
    label: "Work",
    count: 6,
  },
  {
    iconClass: "square-icon yellow",
    label: "List 1",
    count: 3,
  },
];

function Sidebar() {
  return (

    <aside className="sidebar">
  <div className="sidebar-header">
    <span className="menu-label">Menu</span>
    <FiMenu className="menu-icon" />
  </div>

  <div className="search-container">
    <FiSearch className="search-icon" />
    <input type="text" placeholder="Search" className="search-input" />
  </div>

  {/* Rest of your sidebar content goes here */}




      <div className="section">
        <p className="section-title">TASKS</p>
        <ul className="tasks-align">
          {taskItems.map((item, idx) => (
           <li
           key={idx}
           className={`${item.active ? "active" : ""} ${item.label === "Today" ? "highlighted" : ""}`}
         >
             <div className="task-aligns-items">
             <span className={`square-icon ${item.colorClass || ""}`}>
  {item.icon && !item.colorClass && item.icon}
</span>
               <span>{item.label}</span>
              </div> 
              {item.count !== undefined && <span>{item.count}</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <p className="section-title">LISTS</p>
        <ul className="tasks-align">
          {listItems.map((item, idx) => (
            <li key={idx} className={item.active ? "active" : ""}>
              <div className="task-aligns-items">
              <span className={item.iconClass}></span>


                <span>{item.label}</span>
              </div>
              {item.count !== undefined && <span>{item.count}</span>}
            </li>
          ))}
        </ul>
      </div>

   

{/* <div className="section">
  <p className="section-title">LISTS</p>
  <ul className="tasks-align">
    {listItems.map((item, idx) => (
      <li key={idx} className={item.active ? "active" : ""}>
        {item.colorClass ? (
          <span className={item.colorClass}></span>
        ) : (
          <span className="plus-icon">+</span>
        )}
        {item.label}
        {item.count !== undefined && <span>{item.count}</span>}
      </li>
    ))}
  </ul>
</div> */}


<div className="section">
  <p className="section-title">TAGS</p>
  <div className="tags-container">
  <span className="tag tag-cyan">Tag 1</span>
  <span className="tag tag-pink">Tag 2</span>
  <span className="tag tag-gray">+ Add Tag</span>
</div>
</div>



<div className="footer">
  <div className="footer-item">
    <FiSliders className="footer-icon" />
    <span>Settings</span>
  </div>
  <div className="footer-item">
    <FiLogOut className="footer-icon" />
    <span>Sign out</span>
  </div>
</div>

    </aside>
  );
}

export default Sidebar;
