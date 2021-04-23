import React from "react"
import { Link } from "gatsby"
import classes from "./navigationitems.module.css"

const NavigationItems = () => {
  return (
    <div className={classes.NavigationItems}>
      <ul>
        <li>
          <Link to="/roles">Open Volunteer Roles</Link>
        </li>
        <li>
          <Link to="/submitRole">Submit A New Role</Link>
        </li>{" "}
        <li>
          <Link to="/directory">Community Directory</Link>
        </li>{" "}
        <li>
          <Link to="/submitOrganization">Add Your Organization</Link>
        </li>{" "}
        <li>
          <Link to="/">Bulletin Board Home</Link>
        </li>{" "}
        <li>
          <a href="https://astoria.digital/">Astoria Digital</a>
        </li>
        <li>
          <a href="https://github.com/astoria-tech/Community-Bulletin-Board/">
            Github For This Project
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavigationItems
