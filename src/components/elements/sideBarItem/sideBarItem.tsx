import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./sidebarItem.module.scss";

interface Props {
  label: string;
  route: string;
}

const SidebarItem = (props: Props) => {
  return (
    <div className={classes.itemContainer}>
      <NavLink to={props.route} activeClassName={classes.active}>
        <h6>{props.label}</h6>
      </NavLink>
    </div>
  );
};

export default SidebarItem;
