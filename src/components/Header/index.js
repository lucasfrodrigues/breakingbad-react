import React from 'react';
import { HeaderArea } from './styled.js';
import Logo from '../../img/logo.png'

export default () => {
    return (
        <HeaderArea>
            <img src={Logo} />
        </HeaderArea>
    )
}