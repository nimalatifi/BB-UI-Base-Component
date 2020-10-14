import * as React from "react"
import * as ReactDOM from "react-dom"
import {IBigBangUiDatePickerProps,  BigBangUiDatePicker, IBigBangUiDatePickerDatePickerInstance} from "./BigBangUiDatePicker";

    export default class DatepickerWrappper {
        static create(datePickerConfig: IDatepickerWrapperConfig) {
            const container = document.createElement("div");
            const dp = ReactDOM.render(React.createElement(BigBangUiDatePicker, datePickerConfig), container);
            const instance = dp.getInstance()as IDatepickerWrapperInstance;
            instance.element = container;
            
            instance.destroy= ()=>{
                ReactDOM.unmountComponentAtNode(container);
                container.remove();
            }
            return instance; 
        }
    }


interface IDatepickerWrapperConfig extends IBigBangUiDatePickerProps {
        colorPrimary:string;
}

interface  IDatepickerWrapperInstance extends IBigBangUiDatePickerDatePickerInstance{
    element?: HTMLElement,
    destroy():void
}
