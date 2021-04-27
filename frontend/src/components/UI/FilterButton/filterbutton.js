import React from "react"
import classes from "./filterButton.module.css"


const FilterButton = props => {

  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={props.click}
    >
      {props.children}
    </button>
  )
}

export default FilterButton
