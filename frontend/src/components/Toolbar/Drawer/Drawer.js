import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './Drawer.module.css'

const Drawer = (props) => {
  let attachedClasses = ["drawer"];
  if (props.open) {
    attachedClasses = [classes.Drawer, classes.Open];
  } else {
    attachedClasses = [classes.Drawer, classes.Closed];
  }

  return (
    <>
      <div
        className={attachedClasses.join(" ")}
        onClick={() => props.closeMenu()}
      >
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default Drawer;
