import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filterTerm, setFilterTerm] = useState('All')
  const [tasks, setTasks] = useState(TASKS)

  function handleFilter(criteria) {
    setFilterTerm(criteria)
  }; 

  function onItemDelete(itemToDelete) {
    const updatedList = tasks.filter(task => task.text !== itemToDelete)
    setTasks(updatedList); 
  }

  function onTaskFormSubmit(newTask) {
    const updatedList = [...tasks, newTask]
    setTasks(updatedList)
  }

  const filteredTasks = tasks.filter(task => {
    if (filterTerm === 'All') {
      return true; 
    }
    return task.category === filterTerm
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onItemDelete={onItemDelete}/>
    </div>
  );
}

export default App;
