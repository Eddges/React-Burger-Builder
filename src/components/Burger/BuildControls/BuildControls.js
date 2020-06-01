import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {

    const controls = [
        { label : 'Salad', type : 'salad' },
        { label : 'Cheese', type : 'cheese' },
        { label : 'Meat', type : 'meat'},
        { label : 'Bacon', type : 'bacon'}
    ]

    return(
        <div className={classes.BuildControls} >
            <p>Current Price : {props.price.toFixed(2)}$ </p>
            { controls.map(control => <BuildControl label={control.label} key={control.label} addHandler={ ()=>props.addHandler(control.type)} removeHandler={()=> props.removeHandler(control.type)} disabledState={ props.disabledState } type={control.type} /> )}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.showModal} >Order</button>
        </div>
    )

}

export default BuildControls