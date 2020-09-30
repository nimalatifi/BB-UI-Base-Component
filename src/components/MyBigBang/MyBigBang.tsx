import * as React from 'react'

import "./MyBigBang.css"
import {Direction} from './BigBangUIDirection'

export interface BigBangUI {
   height?:string | number,
   width?:string | number,
   visiable?:boolean,
   direction?:Direction
}


class BigBangUIComponent<T> extends React.Component<BigBangUIProps<T>, BigBangUIState> {
    static defultProps : BigBangUIProps ={
        width:'auto',
        height:'auto',
        visiable:true,
        direction:Direction.ltr
    }
    constructor(props: BigBangUIProps<T>) {
        super(props);

    render() {
        return <p> The result is </p>
    }
}
}




