import React from 'react'
import classes from './CheckoutSummary.module.css'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const CheckoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>Get ready for a dose of deliciousness</h1>
            <div style={{widht : '300px', height : '400px', margin : 'auto'}} >
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" click={props.onCheckoutCancel} >Cancel</Button>
            <Button btnType="Success" click={props.onCheckoutContinue} >Continue</Button>
        </div>
    )
}

export default CheckoutSummary