import * as React from 'react'

import "./MyBigBang.css"
import {Direction} from '../../BigBang/Direction'




class BigBangUIComponent<T> extends React.Component<BigBangUIProps> {
    static defultProps : BigBangUIProps = {
        width:'auto',
        height:'auto',
        visiable:true,
        direction:Direction.ltr
    }
   

    render() {
        return <p> The result is </p>
    }
}




