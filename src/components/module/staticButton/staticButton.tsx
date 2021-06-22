import React from 'react'
import classes from './staticButton.module.scss'

let button=["Undo Batch","Assign Supplier","Generate PO"]

const StaticButton=()=>{
return<div className={classes.container}>
    <div className={classes.flex}>{button.map((elem,i)=><div key={i} className={classes.item}><p>{elem}</p></div>)}</div>
</div>
}

export default StaticButton