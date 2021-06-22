import React, { useContext } from "react";
import NavBarItems from "../../elements/navBarItem/navBarItems";
import classes from "./navBar.module.scss";
import AgriRequestContext from "../../../context/agriRequestContext";

interface Props {
  data: Array<string>;
}

const NavBar = (props: Props) => {
  const ctx = useContext(AgriRequestContext);

  const handleClick = (str: string) => {
    switch (str) {
      case "executed":
        ctx.setType({ type: "executed" });
        break;
      case "executing":
        ctx.setType({ type: "executing" });
        break;
      case "completed":
        ctx.setType({ type: "completed" });
        break;
      default:
        ctx.setType({ type: "pending" });
        break;
    }
  };

  return (
    <div className={classes.navBarContainer}>
      {props.data.map((elem, i) => (
        <div key={i} onClick={() => handleClick(elem)}>
          <NavBarItems label={elem} id={i + 1} selected={elem === ctx.Type} />
        </div>
      ))}
    </div>
  );
};

export default NavBar;
