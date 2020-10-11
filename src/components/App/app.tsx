import * as React from "react";
import {useState} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

const App = () => {
  const [selectedDay, setValue] = useState(null);
  
  return <DatePicker value={selectedDay} onChange={setValue} shouldHighlightWeekends />;
};

export default App;