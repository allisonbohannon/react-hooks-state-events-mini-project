import React from "react";

function Task({ text, category, onItemDelete }) {

  function handleDelete(event) {
   const itemToDelete = event.target.parentNode.id
   onItemDelete(itemToDelete)
  }

  return (
    <div className="task" id={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
