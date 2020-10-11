import * as React from 'react'
import BaseComponent from '../../../BigBang/BaseComponent'
import {BaseDirection} from '../../../BigBang/BaseDirection'
import {BaseProps} from '../../../BigBang/BaseProps'




class BigBangButton extends BaseComponent<BaseProps> {

    ButtonProps: BaseProps;
    
    render() {
        {this.ButtonProps.height = 100}
        return <p >{this.ButtonProps.height} ButtonProps The result is </p>
    }
}

export default BigBangButton;

