import React from 'react'
import classes from './Orders.module.css'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends React.Component{

    state={
        orders : [],
        loading : true,
        totalPrice : 0
    }

    componentDidMount() {
        axios.get('/order.json')
        .then((response, reject) => {
            let orders = [];
            for(let iterator in response.data){
                orders.push({
                    ...response.data[iterator],
                    id : iterator,
                })
            }
            this.setState({
                loading : false,
                orders : orders
            })
            // setTimeout(()=> {
            //     this.state.orders.map(iterator => {
            //         console.log(iterator.ingredients.meat)
            //     })
            // }, 0)
            console.log(this.state)
        })
        .catch(err => {
            this.setState({
                loading : false
            })
            alert("Some error occured")
            
        })
    }

    

    render(){
        return(
            <div className={classes.Orders}>
                {
                    this.state.orders.map(iterator => (
                        <Order ingredients={iterator.ingredients} key={iterator.id} totalPrice={iterator.totalPrice} />
                    ))
                }
                {/* <Order /> */}
            </div>
        )
    }
}

export default Orders