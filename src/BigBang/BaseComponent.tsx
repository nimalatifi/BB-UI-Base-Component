import * as React from 'react'

import "./BaseStyle"
import {BaseDirection} from './BaseDirection'
import {BaseProps} from './BaseProps'
import {BaseState} from './BaseState'


export default class BaseComponent<T,Z>extends React.Component<BaseProps,BaseState> {
    static defultProps : BaseProps = {
        width:'auto',
        height:'auto',
        visible:true,
        direction:BaseDirection.ltr
    }
   
getInstance(){
   
}


    render() {
        return <p> The result is </p>
    }
}





