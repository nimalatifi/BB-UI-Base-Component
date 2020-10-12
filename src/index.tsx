
import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./components/App/app";
// import {useState} from "react";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import DatePicker from "react-modern-calendar-datepicker";
import DatepickerWrappper from "./datePicker-wrapper";

// const Index = () => {
//   return <App />;
// };

// const App = () => {
//   const [selectedDay, setValue] = useState(null);
//   let myDatePicker= null;
//   myDatePicker = ReactDOM.render(React.createElement(DatePicker,{value:selectedDay , locale:"fa"}), document.getElementById("root"));
//   console.log(myDatePicker);<dp title={form.title}>
// };


(window as any).mydp= DatepickerWrappper.create({title:"Nima",colorPrimary:'blue'})
document.getElementById("root").append((window as any).mydp.element);


