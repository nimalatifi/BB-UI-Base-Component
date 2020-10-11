import * as React from 'react'

import "./BaseStyle"
import {BaseDirection} from './BaseDirection'
import {BaseProps} from './BaseProps'



export default class BaseComponent<T> extends React.Component<BaseProps> {
    static defultProps : BaseProps = {
        width:'auto',
        height:'auto',
        visiable:true,
        direction:BaseDirection.ltr
    }
   

    render() {
        return <p> The result is </p>
    }
}





