import React, {useEffect} from 'react'
import Logo from '../../Logo/Logo'
import classes from './SideDrawer.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {


    return(
        <React.Fragment>
            <div className={classes.SideDrawer} style={{transform : props.show ? "translateX(0)" : "translateX(-100%)"}} >
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems />
                </nav>
                
            </div>
            <Backdrop show={props.show} backdropClick={props.backdropClick} className={classes.Media} />
        </React.Fragment>
    )
}

export default SideDrawer;

