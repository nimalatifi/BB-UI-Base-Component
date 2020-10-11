import * as React from 'react'
import BaseComponent from '../../../BigBang/BaseComponent'
import {BaseDirection} from '../../../BigBang/BaseDirection'
import {BaseProps} from '../../../BigBang/BaseProps'
import {BaseState} from '../../../BigBang/BaseState'
import "./MyBigBang.css"
export interface ButtonProps extends BaseProps{
   enabled: boolean
}

interface ButtonState {
    direction? :BaseDirection,
    visible:boolean,
    width?:string|number,
    height?:string|number
}


export class BigBangButton extends BaseComponent<ButtonProps,ButtonState> {

//    constructor(props:ButtonInstance){
//        super(props);
//        this.state={
//            direction : BaseDirection.ltr,
//            visible: true

//        }
//    }
    getInstance() : ButtonState {
        let self = this;
        return{
            get visible(){
                return self.state.visible
            },
            set visible(value){
                 self.setState({visible:value})
            },
            get direction(){
                return self.state.direction
            },
            set direction(value){
                self.setState({direction:value})
            },
            get width(){
                return self.state.width
            },
            set width(value){
                self.setState({width:value})
            },
            get height(){
                return self.state.height
            },
            set height(value){
                self.setState({height:value})
            }


        }
    }
    render() {
        return  <p >{this.getInstance} ButtonProps Test mmt </p>
    }
}

export default BigBangButton;

