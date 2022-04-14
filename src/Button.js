import React from 'react';
import {MdAdd} from 'react-icons/md';
import './Button.scss';


const Button=()=>{
    const handleClick=()=>{
        document.location.href='/add'
    }
    return(
        
            <div onClick={handleClick} className = "Button">
                <MdAdd />
            </div>
        
    );
}



export default Button;