import * as React from 'react'
import {useState} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue, Day } from 'react-modern-calendar-datepicker'

export default function OriginalDatePicker( props:any ) {
  const [day, setDay] = React.useState<DayValue>(null);
 
  return (
    <>
      <DatePicker value={day} locale={props.locale} onChange={setDay} />
    </>
  );
}

