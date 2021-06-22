import React from "react";
import SidebarItem from "../../elements/sideBarItem/sideBarItem";
import classes from "./sidebar.module.scss";

const SideBar = () => {
  return (
    <div className={classes.sideContainer}>
      <div>
        <div className={classes.heading}>
          <h2>Agri-Purchase Management</h2>
        </div>
        <div className={classes.list}>
          <SidebarItem
            label="Agri-input Master Maintance"
            route="/agriMaintance"
          />
          <SidebarItem
            label="Supplier Master Maintance"
            route="/supplierMaintance"
          />
          <SidebarItem
            label="Agri-input Purchase Request"
            route="/agriRequest"
          />
        </div>
      </div>
      <div className={classes.bottomHeading}>
        <h2>Tax Master Maintainance</h2>
      </div>
    </div>
  );
};

export default SideBar;
