import React from "react";
import classes from "./dialog.module.scss";
import OnClickAway from "../onClickAway/onClickAway";

interface Props {
  name: string;
  description: string;
  quantity: number;
  close: () => void;
}

const Dialog = (props: Props) => {
  return (
    <div className={classes.dialogBox}>
      <div className={classes.container}>
        <OnClickAway onClick={props.close}>
          <div className={classes.heading}>
            <h6>ROW SUMMARY</h6>
          </div>
          <div className={classes.content}>
            <p>
              You have selected{" "}
              <span className={classes.bold}>{props.name}</span>
            </p>
            <p style={{ fontWeight: "bold" }}>{props.description}</p>
            <p>
              Units are : <span className={classes.bold}>{props.quantity}</span>
            </p>
          </div>
          <div className={classes.button} onClick={props.close}>
            <p>Close</p>
          </div>
        </OnClickAway>
      </div>
    </div>
  );
};

export default Dialog;
