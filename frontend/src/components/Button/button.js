import React from "react"
import { Link } from "gatsby"
import classes from "./button.module.css"

//for internal navigation only as it uses <Link />
const button = props => {
  return (
    <Link to={props.link}>
      <button className={classes.Button}>{props.children}</button>
    </Link>
  )
}

export default button
