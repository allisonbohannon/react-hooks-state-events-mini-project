import React, {useState} from "react";

function CategoryFilter({ categories, onFilter }) {

  const [categoriesList, setCategoriesList] = useState(setInitialList)
  
  function setInitialList() {
    return categories.map( category =>  {
      return {
        key: category, 
        name: category, 
        clicked: ''
    }
  })
  }

  function handleClick(event) {
    const criteria = event.target.value
    const newList = categoriesList.map(category => {
      if (category.name === criteria) {
        return {...category, clicked: "selected"}
      }
      else {
        return {...category, clicked:"" }
      }
    })
    setCategoriesList(newList)
    onFilter(criteria)

  }; 

  const renderCategories = categoriesList.map(category => {   
    return (
          <button key={category.name}
            onClick={handleClick}
            className={category.clicked}
            value={category.name}
          >
            {category.name}
          </button>
        )
      } )
     

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories}
    </div>
  );
}

export default CategoryFilter;
