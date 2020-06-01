import React from 'react'
import classes from './Order.module.css'

const Order = props => {

        return(
            <div className={classes.Order}>
                <strong>Summary : </strong>
                <p>Bacon : {props.ingredients.bacon}</p>
                <p>Cheese : {props.ingredients.cheese}</p>
                <p>Meat : {props.ingredients.meat}</p>
                <p>Salad : {props.ingredients.salad}</p>
                <p>Price : <strong>{props.totalPrice}</strong></p>
            </div>
        )


}

export default Order