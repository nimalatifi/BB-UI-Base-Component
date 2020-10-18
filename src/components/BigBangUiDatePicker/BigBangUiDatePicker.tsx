import * as React from 'react'
import {useState} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {DayRange ,DayValue, Day, DatePickerProps , CalendarProps, Locale} from 'react-modern-calendar-datepicker'

type ValueType= DayValue | Day[] | DayRange;
export  interface  IBigBangUiDatePickerProps extends DatePickerProps<ValueType|any>{
    title?: string
}

export interface  BigBangUiDatePickerState  {
    value: DayValue,
    locale: string| Locale

}
export interface IBigBangUiDatePickerDatePickerInstance{
    locale: string | Locale,
    value:DayValue,
}

export  class BigBangUiDatePicker extends React.Component<IBigBangUiDatePickerProps, BigBangUiDatePickerState> {
    constructor(props:IBigBangUiDatePickerProps){
        super(props);
        this.state={
            value: this.props.value,
            locale: this.props.locale
        }
    }

    getInstance():IBigBangUiDatePickerDatePickerInstance{
        let self= this;
        return{
            get value(){
                return self.state.value
            },
            set value(val:DayValue){
                self.setState({
                    value:val
                })
            },
            get locale(){
                return self.state.locale as any
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
        this.setState({value:value})
    }

    
    render() {
      console.log(this.props)
        return (
            <DatePicker 
            {...this.props}
             locale={this.state.locale}
             onChange={this.onChange}
             value={this.state.value}
              
             />
        )
        
    }
}


