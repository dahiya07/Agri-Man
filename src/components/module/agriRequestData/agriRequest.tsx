import React, { useContext } from "react";
import classes from "./agriRequest.module.scss";
import agriRequestContext from "../../../context/agriRequestContext";
import OrderItem from "../../elements/orderItem/orderItem";
import StaticButton from '../../module/staticButton/staticButton'

interface Props {
  data: Idata[];
}

const AgriRequestData = (props: Props) => {
  const ctx = useContext(agriRequestContext);

  var table = props.data
    .filter((elem) => elem.type === ctx.Type)
    .map((elem,i) => (
      <OrderItem
      key={i}
        name={elem.name}
        id={elem.id}
        time={elem.time}
        orders={elem.orders}
        download={elem.download}
        type={elem.type}
      />
    ));

  return (
    <div>
      {table !== undefined && table.length > 0 ? (
        <div className={classes.container}>{ctx.Type==="executing"?<StaticButton/>:null} {table}</div>
      ) : (
        <div>{ctx.Type}</div>
      )}
    </div>
  );
};

export default AgriRequestData;
