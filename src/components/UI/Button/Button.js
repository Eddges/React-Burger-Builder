import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return(
        <div className={[classes.Button, classes[props.btnType]].join(" ")} onClick={props.click}>{props.children}</div>
    )
}

export default Button