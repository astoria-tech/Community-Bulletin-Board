import React from "react"
import classes from "./container.module.css"
import { Link } from "gatsby"

const Container = ({ title, link, children }) => {
  return (
    <section className={classes.Container}>
      <header className={classes.Header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.Content}>{children}</div>
      <div className={classes.LinkContainer}>
        <Link to={`${link.to}`}>{link.text}</Link>
      </div>
    </section>
  )
}

export default Container
