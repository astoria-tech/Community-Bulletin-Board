import React from "react"
import classes from "./about.module.css"

export const about = () => (
  <>
    <div className={classes.AboutContainer}>
      <h1>
        ABOUT THE <br className="mobileOnly" /> BULLETIN BOARD
      </h1>
      <br />
      <p>
        This was created by a group of volunteers from{" "}
        <a href="https://astoria.digital/">Astoria Digital</a>, collaborating
        with the{" "}
        <a href="https://www.astoriamutualaid.com/">
          Astoria Mutual Aid Network
        </a>
        . The aim of this project is to engage volunteers with much needed
        organizing and long term roles. You can contribute to this project on{" "}
        <a href="https://github.com/astoria-tech/Community-Bulletin-Board">
          GitHub
        </a>
        , and reach out to us with questions or suggestions.
      </p>
      <br />
      <br />
      <h1>CONTACT US</h1>
      <br />
      <p>
        Reach out to us at team@astoria.digital if you have questions, or would
        like to set up a bulletin board for your neighborhood!
      </p>
    </div>
  </>
)

export default about
