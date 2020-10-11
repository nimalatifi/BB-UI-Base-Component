import {BaseDirection} from '../BigBang/BaseDirection'
export interface BaseState {
    height?:string | number,
    width?:string | number,
    visible?:boolean,
    direction?:BaseDirection
 }