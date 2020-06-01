import React, {useEffect} from 'react'
import classes from './OrderSummary.module.css'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {

    useEffect(()=>{
        console.log("OrderSummary Updated")
    })

    let x = Object.keys(props.ingredients)

    console.log(x)
    let ingredientSummary = x.map((ingredient, index) => {
        return <li key={ingredient+index} style={{margin : "0px", padding : "0px"}} ><span style={{textTransform: "capitalize"}} >{ingredient}</span>: {props.ingredients[ingredient]}</li>;
    })

    return(
        <React.Fragment>
            <h3 className={ classes.h3}>Total Price : { props.price }$</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <button className={classes.Button} onClick={ props.checkOut }>Checkout</button>
            <Button btnType="Danger" onClick={ props.showModal } click={props.showModal}>Cancel</Button>
    </React.Fragment>
    )
}

export default OrderSummary