import React from "react"
import { Link } from "gatsby"
import classes from "./button.module.css"

//for internal navigation only as it uses <Link />
const button = props => {
  //since Link element is always be keyboard focusable, we remove focus from button by using negative tabindex
  return (
    <Link to={props.link}>
      <button tabIndex="-1" className={classes.Button}>{props.children}</button>
    </Link>
  )
}

export default button
