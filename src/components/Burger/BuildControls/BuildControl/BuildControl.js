import React from 'react'
import classes from './BuildControl.module.css'

const BuildControl = (props) => {

    // let btnStatus = false;
    // if(props.ingredients[props.type]===0) {
    //     btnStatus = true
    // }

    return(
        <div className={classes.BuildControl} >
            <div className={classes.Label} >{ props.label }</div>
            <button className={classes.Less} onClick={ props.removeHandler} disabled={props.disabledState[props.type]} >Remove</button>
            <button className={classes.More} onClick={ props.addHandler } >Add</button>
        </div>
    )
}

export default BuildControl