import * as React from 'react'
import {useState} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {DayRange ,DayValue, Day, DatePickerProps , CalendarProps, Value} from 'react-modern-calendar-datepicker'

export  interface  IBigBangUiDatePickerProps extends CalendarProps<null>{
    title?: string
}

export interface  BigBangUiDatePickerState  {
    day: DayValue,
    setDay: DayValue,
    locale:string

}
export interface IBigBangUiDatePickerDatePickerInstance{
    locale:string,
    value:DayValue,
}

export  class BigBangUiDatePicker extends React.Component<IBigBangUiDatePickerProps, BigBangUiDatePickerState> {
    constructor(props:IBigBangUiDatePickerProps){
        super(props);
        this.state={
            setDay:null,
            day:null,
            locale:"fa"
        }
    }

    getInstance():IBigBangUiDatePickerDatePickerInstance{
        let self= this;
        return{
            get value(){
                return self.state.day
            },
            set value(val:DayValue){
                self.setState({
                    day:val
                })
            },
            get locale(){
                return self.state.locale
            },
            set locale(value:string) {
                self.setState({
                    locale:value
                })
            },
        }
    }
    
    onChange=(value:DayValue)=>{
        console.log(value);
        this.setState({day:value})
    }

    
    render() {
     
        return (
            <DatePicker 
             locale={this.state.locale}
             onChange={this.onChange}
             {...this.props}
             />
        )
        
    }
}


