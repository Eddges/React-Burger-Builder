import React from 'react'
import classes from './ContactData.module.css'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import InputEl from '../../../components/UI/Input/Input'

class ContactData extends React.Component{

    state={
        orderForm : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your name'
                },
                value : '',
                label : 'Name'
            },
            street : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Street'
                },
                value : '',
                label : 'Street'
            },
            postalCode : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Postal Code'
                },
                value : '',
                label : 'Postal Code'
            },
            email : {
                elementType : 'email',
                elementConfig : {
                    type : 'email',
                    placeholder : 'eMail'
                },
                value : '',
                label : 'eMail'
            },
            deliveryMethod : {
                elementType : 'select',
                elementConfig : {
                    options : [
                        {value : "fastest", displayValue : 'Fastest'},
                        {value : "cheapest", displayValue : 'Cheapest'}
                    ]
                },
                value : '',
                label : 'Delivery Method'
            }
        }
    }

    handleClick = () => {
        console.log(this.props)
        this.setState({
            ordering : true
        })
        const order = {
            ingredients : this.state.ingredients,
            totalPrice : this.props.totalPrice,
            customer : {
                name : "Shivam Shekhar",
                address : {
                    city : "Ranchi",
                    location : "Harmu"
                }
            },
            delivery : "fastest"
        }
        axios.post('/order.json', order)
        .then((response,reject) => {
            console.log(response)
            this.setState({
                ordering : false,
                showModal : false
            })
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error)
            this.setState({
                ordering : false,
                showModal : false
            })
        })
    }

    componentDidMount(){
        console.log(this.props)
    }

    changeHandler = (e, label) => {
        console.log(e.target.value + label)
    }

    render(){

        const inputCallArray = [];

        for(let entries in this.state.orderForm){
            inputCallArray.push(this.state.orderForm[entries])
        }
        
        const inputCall = inputCallArray.map(iterator => {
            console.log(iterator)
            // if(iterator.elementType === 'select'){

            // }
            return(
                <InputEl label={iterator.label} key={iterator.label} inputtype={iterator.elementType} type={iterator.elementConfig.type} placeholder={iterator.elementConfig.placeholder} options={iterator.elementConfig.options} changeHandler={(e) => this.changeHandler(e, iterator.label)} />
            )
        })

        return(
            <div className={classes.ContactData}>
                <h4>Please enter your details</h4>
                <form>
                    {inputCall}
                    <Button btnType="Success" click={this.handleClick} >ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData