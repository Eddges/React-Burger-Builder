import React from 'react'
import classes from './Checkout.module.css'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'

class Checkout extends React.Component{

    

    state={
        ingredients : null,
        totalPrice : 0
    }

    componentWillMount() {
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()) {
            if(param[0]==='price'){
                price=param[1]
            }
            else{
                ingredients[param[0]] = +param[1]
            }
            
        }
        this.setState({
            ingredients : ingredients,
            totalPrice : price
        })

    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }


    render(){
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} onCheckoutCancel={this.checkoutCancelHandler} onCheckoutContinue={this.checkoutContinueHandler} />
                <Route path={this.props.match.path + "/contact-data"} render={(props)=>(
                    <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />
                )} />
            </div>
        )
    }
}

export default Checkout