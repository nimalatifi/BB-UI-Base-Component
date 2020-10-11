import * as React from "react"
import * as ReactDOM from "react-dom"
import {IDatepickerProps, Mydatepicker,IDatePickerInstance} from "./components/DatePicker";

    export default class DatepickerWrappper {
        static create(datePickerProps: IDatepickerWrapperConfig) {
            const container = document.createElement("div");
            const dp = ReactDOM.render(React.createElement(Mydatepicker, datePickerProps), container);
            const instance = dp.getInstance()as IDatepickerWrapperInstance;
            instance.element = container;
            return instance; 
        }
    }


interface IDatepickerWrapperConfig extends IDatepickerProps {
        colorPrimary:string;
}

interface  IDatepickerWrapperInstance extends IDatePickerInstance{
    element?: HTMLElement,
}
