import React from "react";
import './TaskDetail.css';

function TaskDetail() {
  return (
    <div className="task-detail">
      <div className="meta-row">
        
        <div className="task-meta-info">
          
        </div>
      </div>
      
      <h3 className="task-heading">Task</h3>
      
      <textarea className="text" type="text"placeholder="Renew driver's license" />

      <div className="task-meta">
        <div className="meta-row">
          <div className="form-group">
            <label>List</label>
            <select>
              <option>Personal</option>
              <option>Work</option>
            </select>
          </div>

          <div className="form-group">
            <label>Due date</label>
            <input type="date" defaultValue="2022-03-11" />
          </div>
        </div>

        <div className="form-group">
          <label>Tags</label>
          <div className="tags">
            <span className="tag cyan">Tag 1</span>
            <span className="tag gray">+ Add Tag</span>
          </div>
        </div>
      </div>

      <h3 className="subtask-heading">Subtasks:</h3>
      <div className="subtask-section">
        <div className="subtask-add">➕ Add New Subtask</div>
        <label className="checkbox-label">
          <input type="checkbox" />
          Subtask
        </label>
      </div>

      <div className="btn-row">
        <button className="delete">Delete Task</button>
        <button className="save">Save changes</button>
      </div>
    </div>
  );
}

export default TaskDetail;