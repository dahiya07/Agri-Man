import React, { useState } from "react";
import Dialog from "../dialog/dialog";
import classes from "./orderlist.module.scss";

interface Props {
  data: Array<IOrders>;
}

const OrderListItem = (props: Props) => {
  const [dialog, setDialog] = useState(-1);

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <div className={`${classes.id} ${classes.list}`}></div>
        <div className={`${classes.category} ${classes.list}`}>
          Agri-Input Category
        </div>
        <div className={`${classes.image} ${classes.list}`}> Product Image</div>
        <div className={`${classes.description} ${classes.list}`}>
          Product Description
        </div>
        <div className={`${classes.quantity} ${classes.list}`}>Quantity</div>
      </div>
      {props.data.map((elem, i) => (
        <div className={classes.flex2} key={i}>
          <div className={`${classes.id} ${classes.list}`}>{elem.id}</div>
          <div className={`${classes.category} ${classes.list}`}>
            {elem.item}
          </div>
          <div className={`${classes.image} ${classes.list}`}><img src={elem.img} alt="imag"></img></div>
          <div className={`${classes.description} ${classes.list}`}>
            {elem.description}
          </div>
          <div
            className={`${classes.quantity} ${classes.list}`}
          >
            {elem.quantity}
          </div>
          <div className={`${classes.list} ${classes.redirect}`} onClick={() => setDialog(elem.id)}>
            <img src="./images/redirect.png" alt="open modal"></img>
          </div>
          {dialog === elem.id ? (
            <Dialog
              name={elem.item}
              description={elem.description}
              quantity={elem.quantity}
              close={() => setDialog(-1)}
            ></Dialog>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default OrderListItem;
