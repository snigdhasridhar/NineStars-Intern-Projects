import React from "react";
import './MainSection.css';
import { FiPlus, FiCalendar, FiChevronRight } from "react-icons/fi";

function MainSection() {
  return (
    <div className="main-section">
      <div className="main-header">
        <h2 className="today-text">Today</h2>
        <span className="task-count">5</span>
      </div>

      <div className="add-task-bar">
        <FiPlus className="plus-icon" />
        Add New Task
      </div>

      <ul className="task-list">
      <li className="task-item">
          <div className="task-left">
            <input type="checkbox" />
            <span className="task-title">Research content ideas</span>
          </div>
          <FiChevronRight className="arrow" />
        </li>


        <li className="task-item">
          <div className="task-left">
            <input type="checkbox" />
            <span className="task-title">Create a database of guest authors</span>
          </div>
          <FiChevronRight className="arrow" />
        </li>

        <li className="task-item">
  <div className="task-left vertical-align">
    <input type="checkbox" />
    <div>
      <div className="task-title">Renew driver’s license</div>
      <div className="tags-row horizontal-tags">
        <span className="date">
          <FiCalendar /> 22-03-22
        </span>
        <span className="tag gray">1 Subtasks</span>
        <span className="tag red">Personal</span>
      </div>
    </div>
  </div>
  <FiChevronRight className="arrow" />
</li>


        <li className="task-item">
          <div className="task-left">
            <input type="checkbox" />
            <div>
             
              <div className="task-title">Consult accountant</div>
            </div>
            <div className="meta-row">
                <span className="tag yellow">List</span>
                <span className="tag gray">3 Subtasks</span>
              </div>
          </div>
          <FiChevronRight className="arrow" />
        </li>

        <li className="task-item">
          <div className="task-left">
            <input type="checkbox" />
            <span className="task-title">Print business card</span>
          </div>
          <FiChevronRight className="arrow" />
        </li>
      </ul>
    </div>
  );
}

export default MainSection;
