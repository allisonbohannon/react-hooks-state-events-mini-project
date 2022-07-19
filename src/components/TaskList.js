import React, { useState } from "react";
import Task from "./Task"

function TaskList({ tasks, onItemDelete }) {


  const tasksToDisplay = tasks.map(task => {
    return ( 
      <Task key={task.text} 
            text={task.text} 
            category={task.category}
            onItemDelete={onItemDelete}
            />
            )
    })
 
  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
