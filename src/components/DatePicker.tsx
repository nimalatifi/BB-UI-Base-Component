import * as React from 'react'
import OriginalDatePicker from './OriginalDatePicker'
export interface IDatepickerProps{
    title: string,
}
interface IDatePickerState{
    locale?:string,
}


export interface IDatePickerInstance{
    locale:string,
    title:string,
}

export class  Mydatepicker extends React.Component<IDatepickerProps,IDatePickerState> {
    constructor(props:any){
        super(props);
        this.state={locale:'fa'}
    }
    
    getInstance():IDatePickerInstance{
        let self= this;
        return{
            get title(){
                return self.props.title
            },
            get locale(){
                return self.state.locale
            },
            set locale(value) {
                self.setState({
                    locale:value
                })
            }
        }
    }
    render(){
    return(<div>
       <OriginalDatePicker title="kk"/>
        {this.state.locale}
        </div>)
    }

}