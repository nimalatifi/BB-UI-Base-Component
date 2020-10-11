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
<<<<<<< HEAD
        {this.ButtonProps.height = 100}
        return <p >{this.ButtonProps.height} ButtonProps The result is </p>
=======
        return  <p >{this.getInstance} ButtonProps Test mmt </p>

>>>>>>> e1a1944e71a45368368e8a6219df116a965c5518
    }
}

export default BigBangButton;

