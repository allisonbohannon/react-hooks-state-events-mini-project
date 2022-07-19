import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("")

  const categoriesList = categories.map(category => {
    if (category !== "All") {
      return (
        <option key={category}>
          {category}
        </option>
      )
    }
    })

  function handleDetailsChange(event) {
    setDetails(event.target.value)
    console.log(event.target.value)
  }

  function handleCategoryChange(event) {
    setNewItemCategory(event.target.value)
    console.log(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    const newTask = {
      text: details, 
      category: newItemCategory
    }
    onTaskFormSubmit(newTask)
    setNewItemCategory('')
    setDetails('')
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} value={details}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={newItemCategory}>
          {categoriesList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
