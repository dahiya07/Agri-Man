import React, { useState } from "react";
import OrderListItem from "../orderListItem.tsx/orderListItem";
import classes from "./orderItem.module.scss";
import { CSVLink } from "react-csv";
import { ToCSV } from "../../../utils/toCsv";

const OrderItem = (props: Idata) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.flex}>
          <div
            className={`${classes.items} ${classes.flex}`}
            onClick={() => setShow(!show)}
          >
            <div className={classes.content}>
              <p>AGBUY_{props.id}</p>
            </div>
            <div style={{ marginRight: "20px" }}>
              {show ? (
                <img
                  style={{ width: "25px", height: "30px" }}
                  src="./images/upper.png"
                  alt="upper arrow"
                ></img>
              ) : (
                <img
                  style={{ width: "25px", height: "30px" }}
                  src="./images/down.png"
                  alt="down arrow"
                ></img>
              )}
            </div>
            <div className={classes.divider}></div>
          </div>
          <div className={`${classes.items} ${classes.flex}`}>
            <div>
              <img src="./images/user.png" alt="user"></img>
            </div>
            <div className={classes.content}>
              <p>{props.name}</p>
              <span>{props.time}</span>
            </div>
            <div className={classes.divider}></div>
          </div>
          <div className={`${classes.items} ${classes.flex}`}>
            <div>
              <img src="./images/excel.png" alt="excel Logo"></img>
            </div>
            <CSVLink
              {...ToCSV(props.orders)}
              filename={`RFQ_${props.download}.csv`}
              className={classes.flex}
            >
              <div className={classes.content}>
                <p>RFQList_{props.download}</p>
              </div>
              <div>
                <img
                  style={{ width: "30px", height: "25px" }}
                  src="./images/download.png"
                  alt="download"
                ></img>
              </div>
            </CSVLink>
          </div>
        </div>
      </div>
      {show ? <OrderListItem data={props.orders} /> : null}
    </>
  );
};

export default OrderItem;
