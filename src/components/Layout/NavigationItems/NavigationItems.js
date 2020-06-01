import React from 'react'
import classesItems from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItem/NavigationItem.module.css'

const NavigationItems = (props) => {
    return(
        <ul className={classesItems.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems