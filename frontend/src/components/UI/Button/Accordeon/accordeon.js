import React, { useState } from "react"
import classes from './accordeon.module.css'

export const Accordeon = props => {
  const [show, setShow] = useState(false)
  const readMore = show ? classes.Content : classes.NotShow
  return (
    <section>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div className={readMore}>{children}</div>
    </section>
  )
}

export default Accordeon
