import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import {withRouter} from 'react-router-dom'


class Burger extends React.Component{

    componentDidMount(){
    }

    render(){
        const transformedIngredients = Object.keys(this.props.ingredients)
    
    let ingredientsCall = transformedIngredients.map( ig => [...Array(this.props.ingredients[ig])].map((_, index) => <BurgerIngredients key={ig + index} type={ig} />) ).reduce((acc, el) => acc.concat(el))
    // const reducedIngredientsCall = ingredientsCall.reduce((acc, el) => acc.concat(el))

    if(ingredientsCall.length ===0) {
        ingredientsCall = <p>Please start adding ingredients</p>
    }
        return(
            <div className={classes.Burger} >
                <BurgerIngredients type="bread-top" />
                { ingredientsCall}
                <BurgerIngredients type="bread-bottom" />
            </div>

        )
    }
    
}

export default withRouter(Burger)