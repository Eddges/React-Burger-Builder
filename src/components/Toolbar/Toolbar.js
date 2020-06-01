import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItems from '../Layout/NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'

const Toolbar = (props) => {
    return(
        <header className={classes.Toolbar} >
            <div className={classes.MenuShow} onClick={props.showSideDrawer}>Menu</div>
            <Logo className={classes.NavItems} />
            <nav  className={classes.NavItems}  >
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar