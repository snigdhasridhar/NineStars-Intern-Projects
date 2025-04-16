import React from "react";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import TaskDetail from "./TaskDetail";

import './App.css';

function App() {
  return (
    <div className="app-container">
    <Sidebar  />
    <MainSection  />
    <TaskDetail  />
  </div>
  );
}

export default App;

