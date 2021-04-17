import React from "react"
import classes from "./about.module.css"

export const about = () => (
  <section className={classes.AboutContainer}>
    <h5>ABOUT THE BULLETIN BOARD</h5>
    <p>
      This was created by a group of volunteers from{" "}
      <a href="https://astoria.digital/">Astoria Digital</a>, collaborating with
      the{" "}
      <a href="https://www.astoriamutualaid.com/">Astoria Mutual Aid Network</a>
      . The aim of this project is to engage volunteers with much needed
      organizing and long term roles. You can contribute to this project on{" "}
      <a href="https://github.com/astoria-tech/Community-Bulletin-Board">
        GitHub
      </a>
      , and reach out to us with questions or suggestions.
    </p>
  </section>
)

export default about
