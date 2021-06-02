import PropTypes from "prop-types"
import React from "react"
import classes from "./header.module.css"
import HamburgerMenu from "react-hamburger-menu"
import Drawer from "../Toolbar/Drawer/Drawer"
import { MainIcon } from "../../assets"
import { Link } from "gatsby"

const Header = ({ siteTitle, menuOpen, menuClicked, closeMenu }) => (
  <header className={classes.Header}>
    <div className={classes.HeaderContainer}>
      <div
        className={
          menuOpen
            ? [classes.HamburgerMenuContainer, classes.Open].join(" ")
            : classes.HamburgerMenuContainer
        }
      >
        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={menuClicked}
          width={30}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.1}
        />
      </div>
      <Link to="/">
        <img src={MainIcon} />
        <h1>
          Astoria Community <br /> Bulletin Board
        </h1>
      </Link>
    </div>

    <Drawer open={menuOpen} closeMenu={closeMenu} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
