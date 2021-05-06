/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "./Header/header"
import Footer from "./Footer/footer"
import classes from "./layout.module.css"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  function toggleMenu() {
    setMenuOpen(prev => {
      return !prev
    })
  }

  function closeMenu() {
    setMenuOpen(false)
  }
  return (
    <div className={classes.MainContainer}>
      <Header
        menuClicked={toggleMenu}
        menuOpen={menuOpen}
        closeMenu={closeMenu}
      />

      <main className={classes.Content}>{children}</main>
      <Footer>Astoria Digital 2020</Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
