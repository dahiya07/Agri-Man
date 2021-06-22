import React from "react";
import classes from "./navBarItems.module.scss";

interface Props {
  label: string;
  id: number;
  selected: boolean;
}

const NavBarItems = (props: Props) => {
  return (
    <div
      className={`${classes.itemContainer} ${
        props.selected ? classes.selected : null
      }`}
    >
      <div className={`${classes[`item${props.id}`]} ${classes.item}`}>
        <span>{props.id}</span>
      </div>
      <div className={classes.content}>
        <p>{props.label}</p>
      </div>
    </div>
  );
};

export default NavBarItems;
