import React from "react";
import SideBar from "../module/sideBar/sideBar";
import classes from "./layout.module.scss";

const MainLayout = (props: any) => {
  return (
    <div className={classes.layout}>
      <SideBar />
      {props.children}
    </div>
  );
};

export default MainLayout;
