import React from 'react';
import {Main} from './styles';

const Input = ({onKeyDown}) => {

    return(
        <Main  onKeyDown = {onKeyDown} placeholder = "Country Name here..."/>
    )
}

export default Input;