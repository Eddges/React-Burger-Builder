import React from 'react'
import classes from './Input.module.css'

const InputEl = (props) => {

    let inputElement = null;
    switch(props.inputtype){
        case('input') : 
            inputElement = <input type={props.type} placeholder={props.placeholder} onChange={(e) => props.changeHandler(e)}  />
            break;
        case('text-area') : 
            inputElement = <textarea />
            break;
        case('select') : 
            const options = props.options.map(iterator => {
                return(
                    <option>{iterator.displayValue}</option>
                )
            })
            inputElement = <select onChange={(e) => props.changeHandler(e)}>
                {options}
            </select>
            break;
        default : 
            inputElement = <input />
    }

    return(
        <div className={classes.InputEl}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default InputEl