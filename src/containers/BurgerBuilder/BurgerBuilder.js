import React from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import classes from './BurgerBuilder.module.css'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICE = {
    salad : 0.5,
    cheese : 0.5,
    bacon : 1,
    meat : 1.5
}

class BurgerBuilder extends React.Component {
    state = {
        ingredients : null,
        totalPrice : 2,
        purchasable : false,
        showModal : false,
        ordering : false,
        showBurger : false
    }

    addIngredientHandler = (type) => {

        const oldList = { ...this.state.ingredients }
        const newList = {...oldList}
        newList[type] = oldList[type] + 1
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + INGREDIENT_PRICE[type]
        this.setState({
            ingredients : newList,
            totalPrice : newPrice
        })
        setTimeout(()=> {
            console.log(`TotalPrice : ${this.state.totalPrice}`)
        })
        this.updatePurchaseState(newList)
    }

    removeIngredientHandler = (type) => {
        const oldList = { ...this.state.ingredients }
        const newList = {...oldList}
        newList[type] = oldList[type] - 1
        if(newList[type]>=0) {
            const oldPrice = this.state.totalPrice
            const newPrice = oldPrice - INGREDIENT_PRICE[type]
            this.setState({
                ingredients : newList,
                totalPrice : newPrice
            })
            setTimeout(()=> {
                console.log(`TotalPrice : ${this.state.totalPrice}`)
            })
        }
        else {
            console.log(`Can't remove`)
        }

        this.updatePurchaseState(newList)
    }

    updatePurchaseState = (updatedIngredients) => {
        console.log(updatedIngredients)
        let ingredientsArray = Object.keys(updatedIngredients)
        let ingredientTotal = Array(ingredientsArray.length)
        ingredientTotal = ingredientsArray.map((ingredient, index) => ingredientTotal[index] = updatedIngredients[ingredient]).reduce((sum, el) => sum+el, 0)
        if(ingredientTotal <=0) {
            this.setState({
                purchasable : false
            })
        }
        else {
            this.setState({
                purchasable : true
            })
        }
    }

    showModal = () => {
        this.setState({
            showModal : !this.state.showModal
        })
    }

    backdropClick = () => {
        this.setState({
            showModal : !this.state.showModal
        })

        setTimeout(()=>{
            console.log(this.state.showModal)
        }, 1)
    }

    handleCheckOut = () => {


        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price='+ this.state.totalPrice)
        const queryString = queryParams.join('&')

        this.props.history.push({
            pathname : '/checkout',
            search : '?' + queryString
        })
    }

    componentDidMount() {
        axios.get('/ingredients.json')
        .then(res => {
            this.setState({
                ingredients : res.data,
                showBurger : true
            })
        })
    }

    DeleteGiggle = () => {
        axios.get('/order.json')
        .then(res => {
            const obj = {...res.data}
            const arr = Object.entries(obj)
            let id = ''
            console.log(arr)
            for(let i = 0; i<arr.length; i++) {
                if(arr[i][1].customer.name==='Giggle') {
                    console.log(arr[i][0])
                    id = arr[i][0]
                }
            }
            axios.delete(`/order/${id}.json`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log("error", err)
            })
        })
    }

    render() {
        let disabledState = {...this.state.ingredients}
        for(let i in disabledState) {
            disabledState[i] = this.state.ingredients[i] <=0 
        }

        let orderRes = null;

        let showBurger = <Spinner />

        if(this.state.showBurger){
            showBurger = (
                <React.Fragment>
                    <Burger ingredients={ this.state.ingredients } />
                    <BuildControls addHandler={this.addIngredientHandler} removeHandler={ this.removeIngredientHandler } disabledState={ disabledState } price={this.state.totalPrice} purchasable={this.state.purchasable} showModal={ this.showModal } />
                </React.Fragment>
            )
            orderRes = <OrderSummary ingredients={this.state.ingredients} showModal={ this.showModal } price={this.state.totalPrice} checkOut={this.handleCheckOut} />

        }
        if(this.state.ordering) {
            orderRes = <Spinner />
        }


        return(
            <React.Fragment>
                <Modal showModal={this.state.showModal} backdropClick={this.backdropClick} >
                    {orderRes}
                </Modal>
            
                { showBurger }
                {/* <button onClick={this.DeleteGiggle}>Delete Giggle</button> */}
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;