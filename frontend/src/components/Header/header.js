import PropTypes from "prop-types"
import React from "react"
import classes from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={classes.Header}>
    <div className={classes.HeaderContainer}>
      <h1>
        Astoria Community <br /> Bulletin Board
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
