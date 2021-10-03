import React from "react";
import { SpinerArea } from './styled.js';
import Spinner from '../../img/spinner.gif'

export default () => {
    return (
        <SpinerArea>
            <img src={Spinner} />
        </SpinerArea>
    )
}