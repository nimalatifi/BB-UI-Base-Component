import * as React from 'react'
import BaseComponent from '../../../BigBang/BaseComponent'
import {BaseDirection} from '../../../BigBang/BaseDirection'
import {BaseProps} from '../../../BigBang/BaseProps'
import "./MyBigBang.css"


class BigBangButton extends BaseComponent<BaseProps> {

    ButtonProps: BaseProps;
    
    render() {
        return <p >{this.ButtonProps.height} ButtonProps The result is </p>
    }
}

