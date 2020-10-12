import * as React from 'react'
import {useState} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue, Day } from 'react-modern-calendar-datepicker'

// export default function OriginalDatePicker( props:any ) {
//   const [day, setDay] = React.useState<DayValue>(null);
 
//   return (
//     <>
//       <DatePicker value={day} locale={props.locale} onChange={setDay} />
//     </>
//   );
// }
type OriginalDatePickerProps = {
    title: string
}

type OriginalDatePickerState = {
    day: DayValue,
    setDay: DayValue,
    locale:string

}
export interface IOriginalDatePickerInstance{
    locale:string,
    day:Day,
    setDay:DayValue
}

export default class OriginalDatePicker extends React.Component<OriginalDatePickerProps, OriginalDatePickerState> {
    constructor(props:OriginalDatePickerProps){
        super(props);
        this.state={setDay:null,day:null,locale:"fa"}
    }
    // state: OriginalDatePickerState = {
    //     day:null,
    //     setDay:null
    // };
    getInstance():IOriginalDatePickerInstance{
        let self= this;
        return{
            get day(){
                return self.state.day
            },
            get locale(){
                return self.state.locale
            },
            set locale(value:string) {
                self.setState({
                    locale:value
                })
            },
            get setDay(){
                return self.state.setDay
            }
        }
    }
    
    onChange=(value:DayValue)=>{
        console.log(value);
        this.setState({day:value})
    }
    
    render() {
       
        return (
            <DatePicker value={this.state.day} locale={this.state.locale}  onChange={this.onChange} />
        )
        
    }
}


