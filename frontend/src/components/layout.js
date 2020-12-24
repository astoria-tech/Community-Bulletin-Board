/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/header"
import Footer from "./Footer/footer"
import classes from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={classes.MainContainer}>
      <Header />
      <main className={classes.Content}>{children}</main>
      <Footer>Astoria Digital 2020</Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
