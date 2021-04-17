import React, { useState } from "react"
import classes from "./accordeon.module.css"

export const Accordeon = props => {
  const [show, setShow] = useState(true)
  const readMore = show ? classes.Content : classes.NotShow
  return (
    <section>
      <header className={classes.Header}>
        <h5>{props.title}</h5>{" "}
        <button
          className={classes.Button}
          onClick={() => {
            setShow(prev => !prev)
          }}
        >
          {show ? "-" : "+"}
        </button>
      </header>
      <div className={readMore}>{props.children}</div>
    </section>
  )
}

export default Accordeon
